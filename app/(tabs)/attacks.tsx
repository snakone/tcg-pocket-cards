import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { combineLatest, filter, withLatestFrom } from 'rxjs';

import { 
  FlatList, 
  GestureResponderEvent,
   Platform, 
   TextInput, 
   View 
} from 'react-native';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import { ModalRxjs } from '@/core/rxjs/ModalRxjs';
import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';

import { cardStyles } from './cards';
import { AppContext } from '../_layout';
import { BACKUP_HEIGHT, SINGLE_SORT_DATA, SORT_FIELD_MAP } from '@/shared/definitions/utils/constants';
import { Attack, AttackMetaData } from '@/shared/definitions/interfaces/card.interfaces';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import { FilterAttackSearch } from '@/shared/definitions/classes/filter_attack.class';
import { SortData } from '@/shared/definitions/interfaces/global.interfaces';

import { 
  filterAttacks, 
  getFilterIcon, 
  getSortIconStyle, 
  getSortOrderIcon, 
  getUniqueAttacks, 
  sortAttacks 
} from '@/shared/definitions/utils/functions';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RenderAttackItem } from '@/components/dedicated/attacks/AttackItem';
import { AttacksScreenModal } from '@/components/modals';
import { SortAndFilterButtons } from '@/components/ui/FilterSortButtons';
import { ResetFilterButton } from '@/components/ui/ResetFilterButton';
import { FooterList } from '@/components/ui/FooterList';

export default function AttacksScreen() {
  console.log('Attacks Screen')
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const router = useRouter();
  const [attacks, setAttacks] = useState<(AttackMetaData)[]>([]);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const searchQuery = useRef('');
  const [filtered, setFiltered] = useState<AttackMetaData[]>([]);
  const flatListRef = useRef<FlatList<AttackMetaData> | null>(null);
  const [sortData, setSortData] = useState<SortData>();

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const attacks = state.cardState.cards.map(card => {
      if (card.attacks) {
        card.attacks = card.attacks.map((att, i) => {
          return {
            ...att,
            card: card.id,
            index: i
          } as AttackMetaData
        })
      }

      return card;

    }).flatMap(card => card.attacks).filter(Boolean);

    if (attacks) {
      const unique = getUniqueAttacks(attacks as AttackMetaData[]);
      setAttacks(unique as AttackMetaData[]);
      setFiltered(unique as AttackMetaData[]);
    }
  }, [state.cardState.cards]);

  function openFilter(): void {
    ModalRxjs.setModalVisibility({key: 'attacks', value: true});
  }

  function openSort(): void {
    ModalRxjs.setModalVisibility({key: 'attacksSort', value: true});
  }

  useEffect(() => {
    const sub = combineLatest([
      ModalRxjs.getModal('attacks'),
      ModalRxjs.getModal('attacksSort')
    ])
    .pipe(
      filter(([filterOpen, sortOpen]) => (attacks.length > 0) && !filterOpen && !sortOpen),
      withLatestFrom(
        FilterRxjs.getFilter<FilterAttackSearch>('attacks'),
        SortRxjs.getSortActive('attacks')
      )
    ).subscribe(([[_], filters, sort]) => {
        const filterCards = filterOrSortAttacks('filter', attacks as AttackMetaData[], lang, filters);
        const sorted = filterOrSortAttacks('sort', filterCards, lang, null, sort);
        setFiltered(sorted);
        if (sort) {
          setSortData(_ => {
            return {
              sort,
              iconStyle: getSortIconStyle(sort as SortItem),
              orderIcon: getSortOrderIcon(sort as SortItem),
              filterIcon: getFilterIcon(filters as FilterAttackSearch)
            }
          })
        }

        setTimeout(() => goUp(null, false), 100);
    });

    return () => sub.unsubscribe();
  }, [attacks]);

  const goToAttackDetail = useCallback((item: AttackMetaData) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/attack_detail?id=${encodeURIComponent(`${item.card}_${item.index}`)}`);
  }, []);

  const handleSearch = useCallback((text: string = '') => {
    searchQuery.current = text;
    setFiltered(
      attacks
      .filter(attack => attack.name[lang]
        .toLowerCase()?.includes(text.toLowerCase())) as AttackMetaData[]);
  }, [attacks, lang]);

  const filterOrSortAttacks = useCallback((
    type: 'sort' | 'filter', 
    data: AttackMetaData[],
    lang: LanguageType,
    filter?: FilterAttackSearch | null, 
    sort?: SortItem,
  ): AttackMetaData[] => {
      switch (type) {
        case 'sort': {
          if (!sort) { return data; }
          return manageSort(sort, data, lang);
        }
        case 'filter': {
          if (!filter) { return data; }
          return filterAttacks(filter as FilterAttackSearch, data);
        }
      }
  }, []);

  const manageSort = useCallback((sort: SortItem, data: AttackMetaData[], lang: LanguageType): AttackMetaData[] => {
    const sortField = SORT_FIELD_MAP[sort.label];
  
    if (!sortField) {
      console.error(`Unsupported sorting option: ${sort.label}`);
      return data;
    }
  
    return sortAttacks(sortField, data, sort, lang);
  }, [lang]);

  const renderItem = useCallback(({item}: {item: AttackMetaData}) => 
    <RenderAttackItem 
      item={item}
      lang={lang}
      onPress={() => goToAttackDetail(item)}
  />, [lang]);

  async function goUp(_: GestureResponderEvent | null, sound = true): Promise<void> {
    if (sound) SoundService.play('PICK_CARD_SOUND');
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 52,
    offset: 52 * index,
    index, 
  }), []);

  const keyExtractor = useCallback((item: Attack, index: number) => String(item.name) + index, []);

  return (
    <>
      <ParallaxScrollView title={"attack_list"} 
                          modalTitle='attacks'
                          modalContent={<AttacksScreenModal></AttacksScreenModal>}
                          modalHeight={BACKUP_HEIGHT}>
        <View style={[CardGridStyles.inputContainer, {paddingBottom: 2}]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: 280, borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%', left: 1, position: 'relative'}]}
                        placeholder={i18n.t('search_attack_placeholder')}
                        value={searchQuery.current}
                        onChangeText={handleSearch}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={'SEARCH_LABEL'}
                        editable={state.cardState.loaded}
                        inputMode='text'
                      />
                  {searchQuery.current.length > 0 && 
                    <ResetFilterButton left={246} onPress={() => handleSearch('')}/>}
          </ThemedView>

          <ThemedView style={[CardGridStyles.actionsContainer, 
            Platform.OS !== 'web' && {marginRight: 2}, {justifyContent: 'flex-end', top: 1}]}>
            <MaterialIcons name="photo-library" 
                            style={{fontSize: 20, marginLeft: 16, top: 1}} 
                            color={Colors.light.skeleton}>
            </MaterialIcons>
            <ThemedText style={[CardGridStyles.totalCards]}>{filtered.length}</ThemedText>                    
          </ThemedView>
        </View>
        <FlatList data={(filtered as AttackMetaData[])}
                  numColumns={1}
                  keyExtractor={keyExtractor}
                  initialNumToRender={25}
                  maxToRenderPerBatch={25}
                  windowSize={10}
                  getItemLayout={getItemLayout}
                  ref={flatListRef}
                  removeClippedSubviews={false}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={<ThemedText style={{ padding: 6 }}>{i18n.t('no_attacks_found')}</ThemedText>}
                  renderItem={renderItem}
                  bounces={false}
                  overScrollMode='never'
                  ListFooterComponent={
                    <FooterList filteredLength={filtered.length} 
                                onPress={() => goUp(null)}
                                height={148}>
                    </FooterList>
                  }
                  keyboardDismissMode={'on-drag'}/>
      </ParallaxScrollView>
      <SortAndFilterButtons sort={sortData?.sort}
                            filterIcon={sortData?.filterIcon}
                            filterPress={openFilter}
                            sortPress={openSort}
                            sortIconStyle={sortData?.iconStyle}
                            sortOrderIcon={sortData?.orderIcon}
                            styles={cardStyles}/>
    </>
  );
}