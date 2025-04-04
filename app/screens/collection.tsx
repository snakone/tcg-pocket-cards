import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, StyleSheet, Pressable, View, TextInput, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useRouter } from 'expo-router';
import { Portal, Provider } from 'react-native-paper';
import { Image } from 'expo-image';
import { Platform } from 'react-native';
import { combineLatest } from 'rxjs';

import SoundService from '@/core/services/sounds.service';
import { useI18n } from '@/core/providers/LanguageProvider';
import Storage from '@/core/storage/storage.service';
import { useConfirmation } from '@/core/providers/ConfirmationProvider';
import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';
import { DataRxjs } from '@/core/rxjs/DataRxjs';

import { 
  areAllAmountsZero, 
  filterOrSortCards, 
  getFilterIcon, 
  getImageLanguage69x96, 
  getSortIconStyle, 
  getSortOrderIcon, 
} from '@/shared/definitions/utils/functions';

import { AppContext } from '../_layout';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import { BACKUP_HEIGHT, COLLECTION_LANGUAGE_MAP } from '@/shared/definitions/utils/constants';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { BACKWARD_CARD } from '@/shared/definitions/sentences/path.sentences';
import { CardLanguageENUM } from '@/shared/definitions/enums/card.enums';
import { CollectionUser } from '@/shared/definitions/classes/collection.class';
import { SortData, UserCollectionItem } from '@/shared/definitions/interfaces/global.interfaces';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';

import { 
  ScreenStyles,
  ButtonStyles, 
  CardGridStyles, 
  ModalStyles, 
  offersStyles, 
  CARD_IMAGE_WIDTH_5, 
  TabButtonStyles, 
  gridHeightMap 
} from '@/shared/styles/component.styles';

import { cardStyles } from '../(tabs)/cards';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol, SvgStackSymbol } from '@/components/ui/IconSymbol';
import FilterCardMenu from '@/components/shared/cards/FilterCardMenu';
import SortCardMenu from '@/components/shared/cards/SortCardMenu';
import { CollectionScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import CollectionCardMenu from '@/components/shared/collection/CollectionCardMenu';
import { ResetFilterButton } from '@/components/ui/ResetFilterButton';
import { SortAndFilterButtonsWithMenu } from '@/components/ui/FilterSortButtons';

export default function CollectionCardsScreen() {
  console.log('Collection Screen')
  const [searchQuery, setSearchQuery] = useState('');
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const router = useRouter();
  const [lang] = useState<LanguageType>(state.settingsState.language);
  const [filtered, setFiltered] = useState<Card[]>(state.cardState.cards);
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const { confirm } = useConfirmation();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [collection, setCollection] = useState<UserCollectionItem[]>([]);
  const [sortData, setSortData] = useState<SortData>();
  const [langColl, setLangColl] = useState<CardLanguageENUM>(CardLanguageENUM.EN);

  const [modalVisibility, setModalVisivility] = useState<Record<string, boolean>>({
    sort: false,
    filter: false,
    menu: false,
  });

  useEffect(() => {
    const sub = DataRxjs.getData<UserCollectionItem[]>('collection')
      .subscribe(res => setCollection(res));

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    const sub = DataRxjs.getData<number[]>("favorites").subscribe((res) => {
      setFavorites(state.cardState.cards
        .filter(card => res?.includes(card.id))
        .map(card => card.id)
      );
    });
  
    return () => sub.unsubscribe();
  }, [state.cardState.cards]);

  useEffect(() => {
    const sub = combineLatest([
      FilterRxjs.getFilter<FilterSearch>('collection'),
      SortRxjs.getSortActive('collection')
    ])
      .subscribe(([filters, sort]) => {
        const filterCards = filterOrSortCards('filter', state.cardState.cards, favorites, filters, sort, collection, langColl);
        const sorted = filterOrSortCards('sort', filterCards, favorites, null, sort);
        setFiltered(sorted);
        if (sort) {
          setSortData(_ => {
            return {
              sort,
              iconStyle: getSortIconStyle(sort as SortItem),
              orderIcon: getSortOrderIcon(sort as SortItem),
              filterIcon: getFilterIcon(filters)
            }
          })
        }
        setTimeout(() => goUp(false), 100);
      });

    return () => sub.unsubscribe();
  }, [favorites, langColl]);

  const onMenuClose = useCallback(async ({ unmark, markAll, language }: any): Promise<void> => {
    handleModal('menu', false);
    if (markAll) {
      markAllCards(language);
    } else if (unmark) {
      const userConfirmed = await confirm("unmark", "unmark_cards");
      if (userConfirmed) {
        unMarkAllCards(language);
      }
    }
  
    if (language === undefined) {
      language = CardLanguageENUM.EN;
    }
  
    if (langColl !== language) {
      setLangColl(language);
    }
  }, [collection, langColl, filtered]);

  const onViewStats = useCallback((language: CardLanguageENUM): void => {
    handleModal('menu', false);
  
    setTimeout(() => {
      SoundService.play('CHANGE_VIEW');
      router.push(`/screens/collection_stats?language=${encodeURIComponent(language)}`);
    }, 100);
  }, []);

  const memoizedMenu = useMemo(() => {
    return <CollectionCardMenu isVisible={modalVisibility.menu} 
                               onClose={onMenuClose}
                               animatedStyle={{}}
                               selectedLanguage={langColl}
                               onViewStats={onViewStats}/>
  }, [modalVisibility.menu, langColl]);

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={modalVisibility.sort} 
                         onClose={() => handleModal('sort', false)}
                         animatedStyle={{}}
                         filterKey={"collection"}/>
  }, [modalVisibility.sort]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={modalVisibility.filter} 
                           animatedStyle={{}} 
                           onClose={() => handleModal('filter', false)}
                           filterKey={"collection"}/>
  }, [modalVisibility.filter]);

  const markAllCards = useCallback((language: CardLanguageENUM): void => {
    const allMarked = filtered.map((card) => {
      const item = collection.find((sel) => sel.id === card.id);
      if (!item) {
        return new CollectionUser(card.id, language) as UserCollectionItem;
      }
  
      if (item.amount[language] === 0) {
        item.amount[language]++;
      }
  
      return item;
    });
  
    setCollection(allMarked);
    Storage.set('collection', allMarked);
  }, [filtered, collection, langColl]);

  const unMarkAllCards = useCallback((language: CardLanguageENUM): void => {
    setCollection(prev => {
      const update = prev.map(sel => ({
        ...sel,
        amount: { ...sel.amount, [language]: 0 }
      }));
  
      Storage.set('collection', update);
      return update;
    });
  }, [collection]);

  function handleModal(key: string, value: boolean): void {
    setModalVisivility(prev => ({...prev, [key]: value}));

    if (value) {
      SoundService.play('AUDIO_MENU_OPEN');
    }
  }

  const goBack = useCallback(async (): Promise<void> => {
    SoundService.play('AUDIO_MENU_CLOSE');
    DataRxjs.setData({key: 'collection', value: collection})
    router.canGoBack() ? router.back() : router.replace('/');
  }, [collection]);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(state.cardState.cards.filter(card =>
      card.name[lang].toLowerCase()?.includes(text.toLowerCase())));
  }, [lang]);

  const addToSelection = useCallback((card: Card) => {
    SoundService.play('PICK_CARD_SOUND');
    Storage.addToCollection(card.id, langColl);
  
    setCollection(prev => {
      const existingIndex = prev.findIndex(coll => coll.id === card.id);
  
      if (existingIndex !== -1) {
        return prev.map((coll, index) =>
          index === existingIndex
            ? { ...coll, amount: { ...coll.amount, [langColl]: (coll.amount[langColl] || 0) + 1 } }
            : coll
        );
      } else {
        return [...prev, new CollectionUser(card.id, langColl)];
      }
    });
  }, [langColl]);

  const removeSelected = useCallback((card: Card) => {
    SoundService.play('DELETE_SOUND');
    Storage.removeFromCollection(card.id, langColl);
    setCollection(prev => {
      const item = prev.find(coll => coll.id === card.id);

      if (item) {
        item.amount[langColl]--;
      } 

      if (item && areAllAmountsZero(item)) {
        prev = prev.filter(coll => coll.id !== card.id);
      }

      return [...prev];
    })
  }, [collection, langColl]);

  const collectionMap = useMemo(() => {
    return new Map(collection.map((item) => [item.id, item]));
  }, [collection]);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: gridHeightMap[1],
    offset: gridHeightMap[1] * index,
    index, 
  }), []);

  const renderItem = useCallback(({ item }: { item: Card }) => {
    const selectedItem = collectionMap.get(item.id)?.amount[langColl];
    return (
    <View key={item.id} style={[
        CardGridStyles.imageContainer, 
        {marginHorizontal: 1, marginVertical: 1}
      ]}>
      <TouchableOpacity 
        onPress={() => addToSelection(item)} 
        style={[{ zIndex: 1, position: 'relative' }, !selectedItem && {opacity: 0.9}]}>
          { !selectedItem ?
            <ThemedView style={[
              CardGridStyles.image, 
              offersStyles.included,
              Platform.OS === 'android' && {opacity: 0.5}, 
              {width: CARD_IMAGE_WIDTH_5}]}>
            </ThemedView> :
            <>
              <TouchableOpacity onPressIn={(e) => (e.stopPropagation(), removeSelected(item))} 
                                style={collectionStyles.remove}
                                hitSlop={{top: 25, bottom: 25, left: 25, right: 25}}>
                  <ThemedText style={[
                    {color: 'crimson', fontSize: 31, top: -4}, 
                    Platform.OS !== 'web' && {fontSize: 29, top: -10}]}>-</ThemedText>
              </TouchableOpacity>

              <ThemedView style={collectionStyles.amount}>
                <ThemedText style={collectionStyles.amountText}>{selectedItem}</ThemedText>
              </ThemedView>
            </>
          }
        <Image accessibilityLabel={item.name[lang]} 
                style={[
          CardGridStyles.image, 
          {width: CARD_IMAGE_WIDTH_5}
        ]} 
        source={getImageLanguage69x96(lang, item.id)}
        placeholder={BACKWARD_CARD}/>
      </TouchableOpacity>
    </View>
  )}, [collection, lang, langColl]);

  const keyExtractor = useCallback((item: Card) => String(item.id), []);

  const GetAmountAll = useCallback(() => {
    const total = collection.reduce((acc, curr) => acc + curr.amount[langColl], 0);
    return <ThemedText style={{fontSize: 13, textAlign: 'right'}}>{total}</ThemedText>;
  }, [collection, langColl]);

  const renderFooter = useCallback(() => {
    if (filtered.length < 34) {
      return <ThemedView style={{ height: 20 }}></ThemedView>;
    }

    return (
      <View
        style={[
          ModalStyles.modalFooter,
          { marginBlock: 35, boxShadow: 'none', paddingTop: 20, paddingBottom: 74 },
        ]}
      >
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => goUp()}
          accessibilityLabel={'GO_UP'}
          accessibilityRole="button"
          accessible={true}
        >
          <View style={ButtonStyles.insetBorder}>
            <ThemedText>{i18n.t('go_up')}</ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    )
  }, [searchQuery, filtered.length]);

  async function goUp(sound = true): Promise<void> {
    if (sound) {
      SoundService.play('PICK_CARD_SOUND');
    }
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  return (
    <Provider>
      <ParallaxScrollView title={"my_collection"} 
                          modalTitle='collection'
                          modalContent={<CollectionScreenModal></CollectionScreenModal>}
                          modalHeight={BACKUP_HEIGHT}
                          styles={{gap: 0}}>

        <View style={[CardGridStyles.inputContainer]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '60%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                        placeholder={i18n.t('search_card_placeholder')}
                        value={searchQuery}
                        onChangeText={handleSearch}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={'SEARCH_LABEL'}
                        inputMode='text'
                      />
                  {searchQuery.length > 0 && <ResetFilterButton left={184} onPress={() => handleSearch('')}/>}
          </ThemedView>
          <ThemedView style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <MaterialIcons name='language' color={'#8E8E8F'} size={20} style={{width: 20, height: 20, top: 2}}></MaterialIcons>
            <ThemedText style={{fontSize: 13, fontWeight: 'semibold', textAlign: 'right'}}>{COLLECTION_LANGUAGE_MAP[langColl]}</ThemedText>
          </ThemedView>
          <ThemedView style={[{flexDirection: 'row', gap: 10, alignItems: 'center', left: -4}, Platform.OS !== 'web' && {left: -6}]}>
            <SvgStackSymbol color={'#8E8E8F'}
                            width={18}
                            height={18}
                            style={[
                            TabButtonStyles.stacks, {top: -2}]} />
            <GetAmountAll></GetAmountAll>
          </ThemedView>
        </View>
        <FlatList data={filtered}
                  ref={flatListRef}
                  numColumns={5}
                  contentContainerStyle={[{width: '100%'}]}
                  keyExtractor={keyExtractor}
                  initialNumToRender={20}
                  maxToRenderPerBatch={25}
                  windowSize={12}
                  keyboardDismissMode={'on-drag'}
                  getItemLayout={getItemLayout}
                  removeClippedSubviews={true}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={<ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>}
                  renderItem={renderItem}
                  ListFooterComponent={renderFooter}
                  bounces={false}
                  overScrollMode='never'
          />
                
        <View style={ScreenStyles.bottomContent}>
          <Pressable style={ButtonStyles.button} 
                            onPress={goBack} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
        { state.cardState.cards?.length > 0 ? (
          <>
            <SortAndFilterButtonsWithMenu sort={sortData?.sort}
                                          filterIcon={sortData?.filterIcon}
                                          filterPress={() => handleModal('filter', true)}
                                          sortPress={() => handleModal('sort', true)}
                                          menuPress={() => handleModal('menu', true)}
                                          sortIconStyle={sortData?.iconStyle}
                                          sortOrderIcon={sortData?.orderIcon}
                                          styles={cardStyles}/>
          </>
        ) : null}
      </ParallaxScrollView>

      <Portal>{modalVisibility.sort && memoizedSort}</Portal>
      <Portal>{modalVisibility.filter && memoizedFilter}</Portal>
      <Portal>{modalVisibility.menu && memoizedMenu}</Portal>
    </Provider>
  );
}

export const collectionStyles = StyleSheet.create({
  container: {
    position: 'absolute', 
    right: 24, 
    bottom: 24,
    width: 50,
    height: 50,
    borderRadius: 48,
    backgroundColor: 'white',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    opacity: 0.8
  },
  sortIcon: {
    position: 'absolute',
    fontSize: 16,
    backgroundColor: 'rgba(120, 120, 120, .8)',
    borderRadius: 20,
    color: 'white',
    right: -16,
    top: 8.5
  },
  sortIconList: {
    position: 'absolute',
    fontSize: 20,
    borderRadius: 20,
    right: -30,
    top: 9,
    color: Colors.light.text,
  },
  expansionContainer: {
    height: 444,
    marginBottom: 40
  },
  expansionImage: { 
    width: 106, 
    height: 50,
    top: 0,
    left: 0,
  },
  amount: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'grey',
    minWidth: 38, 
    height: 14,
    borderTopRightRadius: 10,
    opacity: 0.8
  },
  amountText: {
    textAlign: 'center', 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: Platform.OS === 'web' ? 11 : 9,

  },
  remove: {
    position: 'absolute',
    right: 2,
    top: 2,
    zIndex: 100,
    backgroundColor: 'white',
    width: 22, 
    height: 22,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  }
});


