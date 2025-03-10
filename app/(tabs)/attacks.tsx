import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Animated, FlatList, GestureResponderEvent, Platform, StyleProp, TextInput, TextStyle, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useI18n } from '@/core/providers/LanguageProvider';
import { BACKUP_HEIGHT, SORT_FIELD_MAP } from '@/shared/definitions/utils/constants';
import { GO_UP, NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { AppContext } from '../_layout';
import SoundService from '@/core/services/sounds.service';
import { ThemedText } from '@/components/ThemedText';
import { Attack } from '@/shared/definitions/interfaces/card.interfaces';
import { ThemedView } from '@/components/ThemedView';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { ButtonStyles, CardGridStyles, ModalStyles } from '@/shared/styles/component.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/shared/definitions/utils/colors';
import { renderAttackItem } from '@/components/dedicated/attacks/AttackItem';
import { AttacksScreenModal } from '@/components/modals/AttacksScreenModal';
import { cardStyles } from './cards';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { filterAttacks, sortAttacks } from '@/shared/definitions/utils/functions';

export default function AttacksScreen() {
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const router = useRouter();
  const [attacks, setAttacks] = useState<(Attack)[]>([]);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const searchQuery = useRef('');
  const [filtered, setFiltered] = useState<Attack[]>([]);
  const [sort, setSort] = useState<SortItem>();
  const flatListRef = useRef<FlatList<Attack> | null>(null);

  const getUniqueItems = (arr: Attack[]): Attack[] => {
    const seen = new Set();
    
    return arr.filter(item => {
      const key = `${item.name.es}|${item.damage}|${item.description?.es}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    }).map((item, i) => ({id: i, ...item}));
  };

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    if (state.filterState.attack_sort.length > 0) {
      const active = state.filterState.attack_sort.find(s => s.active);
      setSort(active);
    }
  }, [state.filterState.attack_sort]);

  useEffect(() => {
    const attacks = state.cardState.cards.flatMap(card => card.attacks).filter(Boolean);
    if (attacks) {
      const unique = getUniqueItems(attacks as Attack[]);
      setAttacks(unique);
      setFiltered(unique);
      dispatch({type: 'SET_ATTACK_LIST', value: unique});
    }
  }, [state.cardState.cards]);

  const keyExtractor = useCallback((item: Attack, index: number) => String(item.name) + index, []);

  const RenderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded ? (
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_attacks_found')}</ThemedText>
      ) : (<ThemedText>Loading</ThemedText>);
    }, [state.cardState.loaded]);
  
    return renderCardState();
  };

  const goToAttackDetail = (item: Attack) => {
    SoundService.play('AUDIO_MENU_OPEN');
    dispatch({type: 'SET_CURRENT_ATTACK', value: item});
    router.push(`/screens/attack_detail`);
  }

  const handleSearch = useCallback((text: string) => {
    searchQuery.current = text;
    setFiltered((attacks).filter(attack => attack.name[lang].toLowerCase()?.includes(text.toLowerCase())));
  }, [attacks, lang]);

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 246}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  async function handleActionMenu(action: string): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    dispatch({type: action, value: true});
  }

  useEffect(() => {
    if (!filtered || filtered.length === 0) { return; }
    if(state.modalState.sort_attack_opened) { return; }

    const sorted = filterOrSortAttacks('sort', filtered, lang, state.filterState.attack_sort.find(s => s.active));
    setFiltered(sorted);
    setTimeout(() => goUp(null, false), 100);
  }, [state.modalState.sort_attack_opened, lang]);

  useEffect(() => {
    if (!filtered) { return; }
    if(state.modalState.filter_attack_opened) { return; }
  
    const filterCards = filterOrSortAttacks('filter', attacks, lang);
    const sorted = filterOrSortAttacks('sort', filterCards, lang, state.filterState.attack_sort.find(s => s.active));

    setFiltered(sorted);
    setTimeout(() => goUp(null, false), 100);
  }, [state.modalState.filter_attack_opened, attacks]);

  function filterOrSortAttacks(
    type: 'sort' | 'filter', 
    data: Attack[], 
    lang: LanguageType,
    sort?: SortItem | undefined,
  ): Attack[] {
    switch (type) {
      case 'sort': {
        if (!sort) { return data; }
        return manageSort(sort, data, lang);
      }

      case 'filter': {
        return manageFilter(data);
      }
    }
  }

  function manageSort(sort: SortItem, data: Attack[], lang: LanguageType): Attack[] {
    const sortField = SORT_FIELD_MAP[sort.label];
  
    if (!sortField) {
      console.error(`Unsupported sorting option: ${sort.label}`);
      return data;
    }
  
    return sortAttacks(sortField, data, sort, lang);
  }

  function manageFilter(data: Attack[]): Attack[] {
    const filter = state.filterState.attack_filter;
    return filterAttacks(filter, data);
  }

  const renderItem = useCallback(({item}: {item: Attack}) => {
    return renderAttackItem({ item, lang, onPress: () => goToAttackDetail(item) })
  }, [lang]);

  const fixFilterIcon = useCallback(() => {
    return [
      { fontSize: 32, position: 'relative' }, 
      sort?.label === 'order_by_hp' || sort?.label === 'order_by_rarity' ? {top: 1} : null,
      sort?.label === 'order_by_retreat' ? {top: -2} : null
    ]
  }, [sort]);

  const getOrderIcon = useCallback(() => {
    return !sort?.order ? 'arrow-upward' : 
            sort.order === 'asc' ? 'arrow-upward' : 'arrow-downward'
  }, [sort]);

  const getFilterOrderIcon = useCallback(() => {
    return state.filterState.attack_filter.areAllPropertiesNull() ? 'cancel' : 'check-circle';
  }, [state.filterState.attack_filter]);

  async function goUp(_: GestureResponderEvent | null, sound = true): Promise<void> {
    if (sound) SoundService.play('PICK_CARD_SOUND');
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const renderFooter = useCallback(() => {
    if (filtered.length < 15) {
      return <ThemedView style={{ height: 20 }}></ThemedView>;
    }

    return (
      <View
        style={[
          ModalStyles.modalFooter,
          { marginBlock: 34, boxShadow: 'none', paddingTop: 20 },
        ]}
      >
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={goUp}
          accessibilityLabel={GO_UP}
          accessibilityRole="button"
          accessible={true}
        >
          <View style={ButtonStyles.insetBorder}>
            <ThemedText>{i18n.t('go_up')}</ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    )
  }, [searchQuery.current, filtered.length]);

  return (
    <>
      <ParallaxScrollView title={"attack_list"} 
                          modalTitle='attacks'
                          modalContent={AttacksScreenModal()}
                          modalHeight={BACKUP_HEIGHT}>
        <FlatList data={(filtered as Attack[])}
                  numColumns={1}
                  keyExtractor={keyExtractor}
                  initialNumToRender={25}
                  maxToRenderPerBatch={50}
                  windowSize={25}
                  ref={flatListRef}
                  removeClippedSubviews={false}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={RenderEmpty}
                  renderItem={renderItem}
                  stickyHeaderIndices={[0]}
                  ListFooterComponent={renderFooter}
                  ListHeaderComponent={
                    <Animated.View style={[CardGridStyles.inputContainer]}>
                      <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '78%', borderRadius: 8,}}>
                        <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                                    placeholder={i18n.t('search_attack_placeholder')}
                                    value={searchQuery.current}
                                    onChangeText={handleSearch}
                                    placeholderTextColor={Colors.light.text}
                                    accessibilityLabel={SEARCH_LABEL}
                                    editable={state.cardState.loaded}
                                    inputMode='text'
                                  />
                              {searchQuery.current.length > 0 && <ResetFilterButton/>}
                      </ThemedView>
  
                      <ThemedView style={[CardGridStyles.actionsContainer, 
                        Platform.OS !== 'web' && {marginRight: 2}, {justifyContent: 'flex-end', top: 1}]}>
                        <MaterialIcons name="photo-library" 
                                       style={{fontSize: 20, marginLeft: 16, top: 1}} 
                                       color={Colors.light.skeleton}>
                        </MaterialIcons>
                        <ThemedText style={[CardGridStyles.totalCards]}>{filtered.length}</ThemedText>                    
                      </ThemedView>
                    </Animated.View>
                  }
        />
      </ParallaxScrollView>
      { attacks?.length > 0 ? (
        <>
          <TouchableOpacity onPress={() => handleActionMenu('OPEN_ATTACK_SORT')} style={cardStyles.container}>
            <ThemedView>
              <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                              color={'skyblue'} 
                              style={fixFilterIcon() as StyleProp<TextStyle>}> 
              </MaterialIcons>
              <MaterialIcons name={getOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (handleActionMenu('OPEN_ATTACK_FILTER'))} 
                            style={[cardStyles.container, {bottom: 88}]}>
            <ThemedView>
              <IconSymbol name="cat.circle" 
                          color={'mediumaquamarine'} 
                          style={{fontSize: 32}}>
              </IconSymbol>
              <MaterialIcons name={getFilterOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
            </ThemedView>
          </TouchableOpacity>       
        </>
      ) : null}
    </>
  );
}