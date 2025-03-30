import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, TextStyle, Pressable, View, TextInput, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useRouter } from 'expo-router';
import { Portal, Provider } from 'react-native-paper';
import { Image } from 'expo-image';
import { Platform } from 'react-native';

import { AppContext } from '../_layout';
import { CLOSE_SENTENCE, GO_UP, NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol, SvgStackSymbol } from '@/components/ui/IconSymbol';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import SoundService from '@/core/services/sounds.service';
import FilterCardMenu from '@/components/shared/cards/FilterCardMenu';
import SortCardMenu from '@/components/shared/cards/SortCardMenu';
import { CollectionScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { BACKUP_HEIGHT, COLLECTION_LANGUAGE_MAP, SORT_FIELD_MAP } from '@/shared/definitions/utils/constants';
import { ScreenStyles, ButtonStyles, CardGridStyles, ModalStyles, offersStyles, CARD_IMAGE_WIDTH_5, TabButtonStyles, gridHeightMap } from '@/shared/styles/component.styles';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { filterCards, getImageLanguage69x96, sortCards } from '@/shared/definitions/utils/functions';
import SkeletonCardGrid from '@/components/skeletons/SkeletonCardGrid';
import CollectionCardMenu from '@/components/shared/collection/CollectionCardMenu';
import Storage from '@/core/storage/storage.service';
import { CardLanguageENUM } from '@/shared/definitions/enums/card.enums';
import { CollectionUser } from '@/shared/definitions/classes/collection.class';
import { UserCollection } from '@/shared/definitions/interfaces/global.interfaces';
import { useConfirmation } from '@/core/providers/ConfirmationProvider';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';

export default function CollectionCardsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [sort] = useState<SortItem>();
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();
  const [lang] = useState<LanguageType>(state.settingsState.language);
  const [filtered, setFiltered] = useState<Card[]>([]);
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const [langCollection, setLangCollection] = useState<CardLanguageENUM>(state.settingsState.collection_language || CardLanguageENUM.EN);
  const { confirm } = useConfirmation();

  const collection = useMemo(() => state.settingsState.collection, [state.settingsState.collection]);

  const onMenuClose = useCallback(async ({ unmark, markAll, language }: any): Promise<void> => {
    setIsMenuVisible(false);
  
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
  
    if (langCollection !== language) {
      setLangCollection(language);
    }
  }, [collection, langCollection]);

  const onViewStats = useCallback((language: CardLanguageENUM): void => {
    setIsMenuVisible(false);
  
    setTimeout(() => {
      SoundService.play('CHANGE_VIEW');
      dispatch({ type: 'SET_COLLECTION_LANGUAGE', value: language });
      dispatch({ type: 'SET_NAVIGATING', value: true });
      router.push('/screens/collection_stats');
    }, 100);
  }, []);

  const memoizedMenu = useMemo(() => {
    return <CollectionCardMenu isVisible={isMenuVisible} 
                               onClose={onMenuClose}
                               animatedStyle={{}}
                               selectedLanguage={langCollection}
                               onViewStats={onViewStats}/>
  }, [isMenuVisible, langCollection]);

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={isSortVisible} 
                         onClose={onClose}
                         animatedStyle={{}}
                         filterKey={"collection"}/>
  }, [isSortVisible, sort]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={isFilterVisible} 
                           animatedStyle={{}} 
                           onClose={onClose}
                           filterKey={"collection"}/>
  }, [isFilterVisible]);

  const markAllCards = useCallback((language: CardLanguageENUM): void => {
    const allMarked = filtered.map((card) => {
      const item = collection.find((sel) => sel.id === card.id);
      if (!item) {
        return new CollectionUser(card.id, language) as UserCollection;
      }
  
      if (item.amount[language] === 0) {
        item.amount[language]++;
      }
  
      return item;
    });
  
    dispatch({ type: 'SET_COLLECTION', value: allMarked });
    Storage.set('collection', allMarked);
  }, [filtered, collection, langCollection]);

  const unMarkAllCards = useCallback((language: CardLanguageENUM): void => {
    dispatch({ type: 'RESET_COLLECTION', value: language });
  
    collection.forEach((sel) => {
      sel.amount[language] = 0;
    });
  
    Storage.set('collection', collection);
  }, [collection]);

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'SET_NAVIGATING', value: false});
    }, 1000);
    
    return (() => {
      dispatch({type: 'SET_NAVIGATING', value: false});
    });
  }, []);
  
  function onClose(): void {
    setIsSortVisible(false);
    setIsFilterVisible(false);
  }

  useEffect(() => {
    setFiltered(state.cardState.cards);

    return (() => {
      dispatch({type: 'RESET_FILTER', value: 'collection'});
    })
  }, [state.cardState.cards]);

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
    return state.filterState.filters.collection.filter.areAllPropertiesNull() ? 'cancel' : 'check-circle';
  }, [state.filterState.filters.collection.filter]);

  const goBack = useCallback(async (): Promise<void> => {
    SoundService.play('AUDIO_MENU_CLOSE');
    router.canGoBack() ? router.back() : router.replace('/');
  }, []);

  useEffect(() => {
    if (!filtered || filtered.length === 0) { return; }
    if(isSortVisible) { return; }
    const sorted = filterOrSortCards('sort', filtered, state.filterState.filters.collection.sort.find(s => s.active));
    setFiltered(sorted);
    setTimeout(() => goUp(false), 100);
  }, [isSortVisible]);

  useEffect(() => {
    if (!filtered) { return; }
    
    if (!isFilterVisible && state.filterState.filters.collection.filter.areAllPropertiesNull()) {
      handleSearch('');
      return;
    }

    if(isFilterVisible) { return; }
    const sorted = filterOrSortCards('filter', state.cardState.cards);
    setFiltered(sorted);
    setTimeout(() => goUp(false), 100);
  }, [isFilterVisible, lang]);

  const filterOrSortCards = useCallback(
    (type: 'sort' | 'filter', data: Card[], sort?: SortItem): Card[] => {
      switch (type) {
        case 'sort': {
          if (!sort) {
            return data;
          }
          return manageSort(sort, data);
        }
  
        case 'filter': {
          return manageFilter(data);
        }
  
        default:
          return data;
      }
    }, [state.settingsState.favorites, state.filterState.filters.collection.filter]);

  const manageSort = useCallback((sort: SortItem, data: Card[]): Card[] => {
    const sortField = SORT_FIELD_MAP[sort.label];
  
    if (!sortField) {
      console.error(`Unsupported sorting option: ${sort.label}`);
      return data;
    }
  
    return sortCards(sortField, data, sort);
  }, [state.settingsState.favorites]);

  const manageFilter = useCallback((data: Card[]): Card[] => {
    const filter = state.filterState.filters.collection.filter;
    return filterCards(filter as FilterSearch, data, state.settingsState.favorites, collection, langCollection);
  }, [state.settingsState.favorites, state.filterState.filters.collection.filter]);
  

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(state.cardState.cards.filter(card =>
      card.name[lang].toLowerCase()?.includes(text.toLowerCase())));
  }, [lang]);

  const ResetFilterButton = useCallback(() => (
    <TouchableOpacity onPress={() => handleSearch('')}
                      style={[CardGridStyles.clearInput, {left: 184}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  ), []);

  const addToSelection = useCallback((item: Card) => {
    SoundService.play('PICK_CARD_SOUND');
    Storage.addToCollection(item.id, langCollection);
    dispatch({type: 'ADD_TO_COLLECTION', value: {id: item.id, lang: langCollection}});
  }, [langCollection]);

  const removeSelected = useCallback((item: Card) => {
    SoundService.play('DELETE_SOUND');
    Storage.removeFromCollection(item.id, langCollection);
    dispatch({type: 'REMOVE_FROM_COLLECTION', value: {id: item.id, lang: langCollection}});
  }, [langCollection]);

  const collectionMap = useMemo(() => {
    return new Map(collection.map((item) => [item.id, item]));
  }, [collection]);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: gridHeightMap[1],
    offset: gridHeightMap[1] * index,
    index, 
  }), []);

  const renderItem = useCallback(({ item }: { item: Card }) => {
    const selectedItem = collectionMap.get(item.id)?.amount[langCollection];
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
                                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
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
        source={getImageLanguage69x96(lang, item.id)}/>
      </TouchableOpacity>
    </View>
  )}, [collection, lang, langCollection]);

  const keyExtractor = useCallback((item: Card) => String(item.id), []);

  const getAmountAll = useCallback(() => {
    return collection.reduce((acc, curr) => acc + curr.amount[langCollection], 0);
  }, [collection, langCollection]);

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
  }, [searchQuery, filtered.length]);

  async function goUp(sound = true): Promise<void> {
    if (sound) {
      SoundService.play('PICK_CARD_SOUND');
    }
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const RenderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded ? (
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>
      ) : (
        <SkeletonCardGrid columns={5} />
      );
    }, [state.cardState.loaded]);
  
    return renderCardState();
  };

  return (
    <Provider>
      <ParallaxScrollView title={"my_collection"} 
                          modalTitle='collection'
                          modalContent={CollectionScreenModal()}
                          modalHeight={BACKUP_HEIGHT}
                          styles={{gap: 0}}>

        <View style={[CardGridStyles.inputContainer]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '60%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                        placeholder={i18n.t('search_card_placeholder')}
                        value={searchQuery}
                        onChangeText={handleSearch}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={SEARCH_LABEL}
                        inputMode='text'
                      />
                  {searchQuery.length > 0 && <ResetFilterButton/>}
          </ThemedView>
          <ThemedView style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <MaterialIcons name='language' color={'#8E8E8F'} size={20} style={{width: 20, height: 20, top: 2}}></MaterialIcons>
            <ThemedText style={{fontSize: 13, fontWeight: 'semibold', textAlign: 'right'}}>{COLLECTION_LANGUAGE_MAP[langCollection]}</ThemedText>
          </ThemedView>
          <ThemedView style={[{flexDirection: 'row', gap: 10, alignItems: 'center', left: -4}, Platform.OS !== 'web' && {left: -6}]}>
            <SvgStackSymbol color={'#8E8E8F'}
                            width={18}
                            height={18}
                            style={[
                            TabButtonStyles.stacks, {top: -2}]} />
            <ThemedText style={{fontSize: 13, textAlign: 'right'}}>{getAmountAll()}</ThemedText>
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
                  getItemLayout={getItemLayout}
                  removeClippedSubviews={true}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={RenderEmpty}
                  renderItem={renderItem}
                  ListFooterComponent={renderFooter}
                  bounces={false}
                  overScrollMode='never'
          />
                
        <View style={ScreenStyles.bottomContent}>
          <Pressable style={ButtonStyles.button} 
                            onPress={goBack} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
        { state.cardState.cards?.length > 0 ? (
          <>
            <TouchableOpacity onPress={() => (setIsMenuVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
                              style={[collectionStyles.container]}>
              <ThemedView>
                <IconSymbol name="menubar.rectangle" 
                            color={'#8E8E8F'}
                            style={{fontSize: 28}} />
              </ThemedView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (setIsSortVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
                              style={[collectionStyles.container, {bottom: 88}]}>
              <ThemedView>
                <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                              color={'skyblue'} 
                              style={fixFilterIcon() as StyleProp<TextStyle>}> 
                </MaterialIcons>
                <MaterialIcons name={getOrderIcon()} style={collectionStyles.sortIcon}></MaterialIcons>
              </ThemedView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (setIsFilterVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
                              style={[collectionStyles.container, {bottom: 152}]}>
              <ThemedView>
                <IconSymbol name="cat.circle" 
                            color={'mediumaquamarine'} 
                            style={{fontSize: 32}}>
                </IconSymbol>
                <MaterialIcons name={getFilterOrderIcon()} style={collectionStyles.sortIcon}></MaterialIcons>
              </ThemedView>
            </TouchableOpacity>       
          </>
        ) : null}
      </ParallaxScrollView>

      <Portal>{isSortVisible && memoizedSort}</Portal>
      <Portal>{isFilterVisible && memoizedFilter}</Portal>
      <Portal>{isMenuVisible && memoizedMenu}</Portal>
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


