import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { combineLatest } from 'rxjs';
import { Portal } from 'react-native-paper';

import { 
  FlatList, 
  GestureResponderEvent,
   Platform, 
   TextInput, 
   View 
} from 'react-native';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';

import { AppContext } from '../_layout';
import { BACKUP_HEIGHT } from '@/shared/definitions/utils/constants';
import { AttackMetaData } from '@/shared/definitions/interfaces/card.interfaces';
import { LanguageType, ModalType } from '@/shared/definitions/types/global.types';
import { CardGridStyles, cardStyles } from '@/shared/styles/component.styles';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import { FilterAttackSearch } from '@/shared/definitions/classes/filter_attack.class';
import { SortData } from '@/shared/definitions/interfaces/global.interfaces';

import { 
  filterOrSortAttacks, 
  getFilterIcon, 
  getSortIconStyle, 
  getSortOrderIcon, 
  getUniqueAttacks, 
} from '@/shared/definitions/utils/functions';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RenderAttackItem } from '@/components/dedicated/attacks/AttackItem';
import { AttacksScreenModal } from '@/components/modals';
import { SortAndFilterButtons } from '@/components/ui/FilterSortButtons';
import { ResetFilterButton } from '@/components/ui/ResetFilterButton';
import { FooterList } from '@/components/ui/FooterList';
import FilterAttackMenu from '@/components/shared/attacks/FilterAttackMenu';
import SortAttackMenu from '@/components/shared/attacks/SortAttackMenu';

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

  const [modalVisibility, setModalVisivility] = useState<Partial<Record<ModalType, boolean>>>({
    attacks: false,
    attacksSort: false,
  });

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

  function handleModalVisibility(key: ModalType, value: boolean): void {
    setModalVisivility(prev => ({...prev, [key]: value}));
    value ? SoundService.play('AUDIO_MENU_OPEN') :
      SoundService.play('AUDIO_MENU_CLOSE');
  }

  function handleClose(key: ModalType): void {
    handleModalVisibility(key, false);
  }

  useEffect(() => {
    const sub = combineLatest([
      FilterRxjs.getFilter<FilterAttackSearch>('attacks'),
      SortRxjs.getSortActive('attacks')
    ]).subscribe(([filters, sort]) => {
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

  return (
    <>
      <ParallaxScrollView title={"attack_list"} 
                          modalTitle='attacks'
                          modalContent={<AttacksScreenModal></AttacksScreenModal>}
                          modalHeight={BACKUP_HEIGHT}>
        <View style={[CardGridStyles.inputContainer, {paddingBottom: 2}]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: 272, borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%', position: 'relative'}]}
                        placeholder={i18n.t('search_attack_placeholder')}
                        value={searchQuery.current}
                        onChangeText={handleSearch}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={'SEARCH_LABEL'}
                        editable={state.cardState.loaded}
                        inputMode='text'
                      />
                  {searchQuery.current.length > 0 && 
                    <ResetFilterButton left={242} onPress={() => handleSearch('')}/>}
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
                  keyExtractor={(_, index) => index.toString()}
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
                            filterPress={() => handleModalVisibility('attacks', true)}
                            sortPress={() => handleModalVisibility('attacksSort', true)}
                            sortIconStyle={sortData?.iconStyle}
                            sortOrderIcon={sortData?.orderIcon}
                            styles={cardStyles}/>

      <Portal>
        {modalVisibility.attacks && 
          <FilterAttackMenu animatedStyle={{}}
                            filterKey={"attacks"}
                            isVisible={modalVisibility.attacks}
                            onClose={() => handleClose('attacks')}/>}
      </Portal>
      <Portal>
        {modalVisibility.attacksSort && 
          <SortAttackMenu animatedStyle={{}} 
                          filterKey={"attacks"}
                          isVisible={modalVisibility.attacksSort}
                          onClose={() => handleClose('attacksSort')}/>}
      </Portal>
    </>
  );
}