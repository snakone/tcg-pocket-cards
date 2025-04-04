import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Platform, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { Portal, Provider } from "react-native-paper";
import { Image } from 'expo-image';
import { BlurView } from "expo-blur";
import { combineLatest } from "rxjs";

import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import { DataRxjs } from "@/core/rxjs/DataRxjs";
import { FilterRxjs } from "@/core/rxjs/FilterRxjs";
import { SortRxjs } from "@/core/rxjs/SortRxjs";

import { 
  ButtonStyles,
  CARD_IMAGE_WIDTH_3,
  CardGridStyles,
  gridHeightMap,
  homeScreenStyles,
  LayoutStyles, 
  offersStyles, 
  ParallaxStyles, 
  ScreenStyles, 
  sortStyles 
} from "@/shared/styles/component.styles";

import { 
  addCardToList, 
  canAddToDeck, 
  filterCards, 
  filterOrSortCards, 
  getFilterIcon, 
  getHighlightCards, 
  getImageLanguage116x162, 
  getImageLanguage69x96, 
  getNewID, 
  getSortIconStyle, 
  getSortOrderIcon, 
  getUsedEnergies, 
  isDeckValid, 
  isElementWithEnergy, 
  sortFunction
} from "@/shared/definitions/utils/functions";

import { AppContext } from "../_layout";
import { Colors } from "@/shared/definitions/utils/colors";
import { DEFAULT_ELEMENT, MAX_CONTENT, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { SortData, StorageDeck } from "@/shared/definitions/interfaces/global.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

import { cardStyles } from "../(tabs)/cards";
import { collectionStyles } from "./collection";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { detailScrollStyles } from "@/components/dedicated/detail/detail.scroll";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import FilterCardMenu from "@/components/shared/cards/FilterCardMenu";
import SortCardMenu from "@/components/shared/cards/SortCardMenu";
import EnergyMenu from "@/components/dedicated/create/EnergyMenu";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { ResetFilterButton } from "@/components/ui/ResetFilterButton";
import PreviewList from "@/components/dedicated/create/PreviewList";
import { SortAndFilterButtons } from "@/components/ui/FilterSortButtons";

interface CreateDeckData {
  active: Card[] | null[],
  name: string,
  energy: boolean;
  decks: StorageDeck[] 
}

const numColumns = 6;

export default function CreateDeckScreen() {
  console.log('Create Deck Screen')
  const {i18n} = useI18n();
  const [loading, setLoading] = useState(false);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [filtered, setFiltered] = useState<Card[]>([]);
  const [notSaved, setNotSaved] = useState(false);
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const router = useRouter();
  const { confirm } = useConfirmation();
  const { deck_id } = useLocalSearchParams<{ deck_id: string }>();
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortData, setSortData] = useState<SortData>();
  const [element, setElement] = useState({...DEFAULT_ELEMENT});

  const [modalVisibility, setModalVisivility] = useState<Record<string, boolean>>({
    energy: false,
    cards: false,
    sort: false,
    filter: false,
  });

  const [data, setData] = useState<CreateDeckData>({
    active: Array(20).fill(null),
    name: '',
    decks: [],
    energy: false
  });

  useEffect(() => {
    setFiltered(state.cardState.cards);
  }, [state.cardState.cards]);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    setData(prev => ({...prev, energy: !modalVisibility.energy && isElementWithEnergy(element)}));
  }, [modalVisibility.energy]);

  useEffect(() => {
    const sub = DataRxjs.getData<StorageDeck[]>('decks')
      .subscribe(res => {
        if (deck_id !== undefined) {
          const selected = res.find(deck => deck.id === Number(deck_id));

          if (selected) {
            const deck = selected.cards.map(
              card => state.cardState.cards.find(c => c.id === card) || null);
  
            setData({
              active: deck as Card[],
              name: selected.name,
              energy: selected.energies.length > 0,
              decks: res
            })
  
            Object.keys(element).forEach((key: any) => {
              if (selected.energies?.includes(key)) {
                (element as any)[key] = true;
              }
            });
          }
        } else {
          setData({
            active: Array(20).fill(null),
            name: '',
            energy: false,
            decks: res
          })
        }
    });

    return () => sub.unsubscribe();
  }, [state.cardState.cards]);

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
      FilterRxjs.getFilter<FilterSearch>('decks'),
      SortRxjs.getSortActive('decks')
    ])
     .subscribe(([filters, sort]) => {
        const filterCards = filterOrSortCards('filter', state.cardState.cards, favorites, filters, sort);
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
  }, [favorites]);

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={[CardGridStyles.imageContainer, !item && {opacity: 0.8}]}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={handlePick}
              style={[CardGridStyles.image, {justifyContent: 'center', alignItems: 'center'}]}>
          <View>
            { item ? 
            <>
              <Image accessibilityLabel={item?.name[lang]} 
                    style={[
                  CardGridStyles.image, 
                  {width: CARD_IMAGE_WIDTH_3}
                ]} 
              source={getImageLanguage116x162(lang, item?.id)}
              placeholder={BACKWARD_CARD}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [lang]);

  const RenderHeader = useCallback(() => (
    <ThemedView style={createDeckStyles.amount}>
      <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.skeleton}}></MaterialIcons>
      <ThemedText style={{fontSize: 13}}>{data.active.filter(d => Boolean(d)).length}/20</ThemedText>
    </ThemedView>
  ), [data.active]);

  const handleModal = useCallback((value: boolean, key: string) => {
    setModalVisivility(prev => ({...prev, [key]: value}));
    const sound = value ? 'AUDIO_MENU_OPEN' : 'AUDIO_MENU_CLOSE';
    SoundService.play(sound);
  }, []);

  const handlePick = useCallback(() => {
    SoundService.play('CHANGE_VIEW');
    setModalVisivility(prev => ({...prev, cards: true}));
  }, []);

  const handleEnergy = useCallback((key: any) => {
    SoundService.play('POP_PICK')
    setNotSaved(true);

    setElement(prev => {
      return {
        ...prev,
        [key]: !(prev as any)[key]
      };
    })
  }, [])

  const handleSearch = useCallback((text: string) => {
    setFiltered(prev => {
      if(state.cardState.cards.length === 0) { return prev; }
      return state.cardState.cards.filter(card =>
        card.name[lang].toLowerCase()?.includes(text.toLowerCase()));
    })
  }, [state.cardState.cards, lang]);

  async function handleSave(): Promise<void> {
    SoundService.play('POP_PICK')
    const newDeck = await convertDeckToStorage();
    
    if (!newDeck.valid) {
      const userConfirmed = await confirm("save_invalid", "save_invalid_deck");
      if (userConfirmed) {
        saveDeck(newDeck);
      }
    } else { saveDeck(newDeck); }
  }

  function saveDeck(deck: StorageDeck): void {
    setLoading(true);
    DataRxjs.addDeck(deck);

    setTimeout(() => {
      setNotSaved(false);
      setLoading(false);
      router.canGoBack() ? router.back() : router.replace('/');
    }, 777);
  }

  function manageAddDeck(card: Card): void {
    if (canAddToDeck(data.active as Card[], card)) {
      SoundService.play('PICK_CARD_SOUND');
      setNotSaved(true);
      addToList(card);
    }
  }

  function addToList(card: Card): void {
    const sortedDeck = addCardToList(data.active as Card[], card);
    setData(prev => ({...prev, active: sortedDeck}));
  }

  function previewItemPress(card: Card): void {
    if (!card) { return; }
    setData(prev => {
      const index = prev.active.findIndex(c => c?.id === card.id);
      if (index === -1) return prev;

      const newDeck = [...prev.active];
      newDeck[index] = null;
      SoundService.play("DELETE_SOUND");
      setNotSaved(true);
      const sortedDeck = newDeck.sort(sortFunction);
      return { ...prev, active: sortedDeck as Card[] };
    });
  }

  async function convertDeckToStorage(): Promise<StorageDeck> {
    const energies = getUsedEnergies(element);

    const item: StorageDeck = {
      id: getNewID(deck_id, data.decks),
      name: data?.name || i18n.t('new_deck_value'),
      cards: data.active.map(card => card?.id || null) as number[],
      energies,
      popular: getHighlightCards(data.active as Card[]),
      valid: isDeckValid(data?.name || '', data.active as Card[], energies),
      created: new Date().getTime()
    };

    return item;
  }

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={modalVisibility.sort} 
                         onClose={() => handleModal(false, 'sort')}
                         animatedStyle={{}}
                         filterKey={"decks"}/>
  }, [modalVisibility.sort]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={modalVisibility.filter} 
                           animatedStyle={{}} 
                           onClose={() => handleModal(false, 'filter')}
                           filterKey={"decks"}/>
  }, [modalVisibility.filter]);

  const memoizedEnergy = useMemo(() => {
    return <EnergyMenu isVisible={modalVisibility.energy} 
                       element={element} 
                       onClose={() => (handleModal(false, 'energy'), SoundService.play('AUDIO_MENU_CLOSE'))}
                       handleEnergy={handleEnergy}/>
  }, [modalVisibility.energy, element]);

  async function goUp(sound = true): Promise<void> {
    if (sound) {
      SoundService.play('PICK_CARD_SOUND');
    }
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const goBack = useCallback(async (): Promise<void> => {
    SoundService.play('AUDIO_MENU_CLOSE');
    if (notSaved) {
      const userConfirmed = await confirm("exit_no_save", "exit_without_save");
      if (userConfirmed) {
        router.canGoBack() ? router.back() : router.replace('/');
      }
    } else {
      router.canGoBack() ? router.back() : router.replace('/');
    }
  }, [notSaved]);

  async function handleReset(): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    const userConfirmed = await confirm("clean_deck", "clean_deck_question");
    if (userConfirmed) { resetAll(); }
  }

  async function handleDelete(): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    const userConfirmed = await confirm("delete_deck", "delete_deck_question", 'delete');
    if (userConfirmed) {
      setLoading(true);
      DataRxjs.removeDeck(Number(deck_id));

      setTimeout(() => {
        setNotSaved(false);
        setLoading(false);
        router.canGoBack() ? router.back() : router.replace('/');
      }, 1000);
    }
  }

  const resetAll = useCallback(() => {
    setData(prev => ({...prev, name: i18n.t('new_deck_value')}));
    setData(prev => ({...prev, energy: false, active: Array.from({ length: 20 }, (_, i) => (null))}));
    setElement(DEFAULT_ELEMENT);
    setNotSaved(true);
  }, []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: gridHeightMap[numColumns],
    offset: gridHeightMap[numColumns] * index,
    index, 
  }), []);

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => {
    const arr = data.active.filter(card => card?.name.es === item.name.es && card?.rarity === item.rarity && card.id === item.id);
    const foo = data.active.filter(card => card?.name.es === item.name.es);
    const same = data.active.find(d => d?.id === item.id);
    const full = arr.length === 2 || foo.length === 2;
    const canRemove = arr.length >= 1;
    return (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => manageAddDeck(item)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View style={{position: 'relative'}}>
          { full &&
            <ThemedView style={[CardGridStyles.image, offersStyles.included]}></ThemedView>
          }
          { canRemove && same && 
            <TouchableOpacity onPress={(e) => (e.stopPropagation(), previewItemPress(item))} 
                              style={[collectionStyles.remove, {width: 18, height: 18}]}
                              hitSlop={{top: 25, bottom: 25, left: 25, right: 25}}>
                <ThemedText style={[
                  {color: 'crimson', fontSize: 31, top: -4}, 
                  Platform.OS !== 'web' && {fontSize: 24, top: -17, transform: [{scaleX: 1.5}, {scaleY: 2}]}]}>-</ThemedText>
            </TouchableOpacity>
          }
          {
            (full || canRemove) && same &&
            <ThemedView style={collectionStyles.amount}>
              <ThemedText style={collectionStyles.amountText}>{arr.length + '/2'}</ThemedText>
            </ThemedView>
          }

          <Image accessibilityLabel={item.name[lang]}
                 source={BACKWARD_CARD}
                 style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58},
                  {position: 'absolute', zIndex: 10, opacity: 0},
                  ((data.active.filter(Boolean).length === 20) && (!full && !same && !canRemove)) && {opacity: 1}
                ]}/>

          <Image accessibilityLabel={item.name[lang]}
                 source={getImageLanguage69x96(lang, item.id)}
                 placeholder={BACKWARD_CARD}
                 style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  )}, [data.active]);

  const CardListGrid = useCallback(() => (
    <View style={{width: '100%', flex: 1, paddingBottom: 16}}>
      <FlatList data={filtered}
                numColumns={numColumns}
                ref={flatListRef}
                contentContainerStyle={[{width: '100%', padding: 16, paddingTop: 0}]}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={25}
                maxToRenderPerBatch={25}
                windowSize={10}
                removeClippedSubviews={false}
                getItemLayout={getItemLayout}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>}
                renderItem={renderCard}
                keyboardDismissMode={'on-drag'}
                ListFooterComponent={<ThemedView style={{height: 95}}></ThemedView>}
      />
    </View>
  ), [filtered, data.active]);

  const memoizedGridMenu = useMemo(() => {
    return (
      <>
        <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                  style={StyleSheet.absoluteFill} 
                  tint="light" 
                  experimentalBlurMethod='dimezisBlurView'/>
          <Pressable style={LayoutStyles.overlay} 
                     onPress={() => handleModal(false, 'cards')}>
          </Pressable>
          <View style={[sortStyles.container, {height: '100%'}]}>
            { loading && <LoadingOverlay/> }
            <View style={[ParallaxStyles.header, { backgroundColor: "#fff", marginBottom: 0 }]}>
              <View>
                <ThemedText type="headerTitle">{i18n.t('card_selection')}</ThemedText>
              </View>
            </View>
            <PreviewList handleSearch={handleSearch} 
                         styles={createDeckStyles}
                         previousDeck={data.active}
                         onPreviewPress={previewItemPress}/>
            <ThemedView style={{marginBottom: 20 }}></ThemedView>

            {CardListGrid()}

            { loading ? null : state.cardState.cards?.length > 0 && (
              <SortAndFilterButtons sort={sortData?.sort}
                                    filterIcon={sortData?.filterIcon}
                                    filterPress={() => (handleModal(true, 'filter'), SoundService.play('AUDIO_MENU_OPEN'))}
                                    sortPress={() => (handleModal(true, 'sort'), SoundService.play('AUDIO_MENU_OPEN'))}
                                    sortIconStyle={sortData?.iconStyle}
                                    sortOrderIcon={sortData?.orderIcon}
                                    styles={cardStyles}/>
            )}
            <View style={ScreenStyles.bottomContent}>
              <Pressable style={ButtonStyles.button} 
                                onPress={() => handleModal(false, 'cards')} 
                                accessibilityLabel={'CLOSE_SENTENCE'}>
                <View style={ButtonStyles.insetBorder}>
                  <IconSymbol name="clear"></IconSymbol>
                </View>
              </Pressable>
            </View>
          </View>
      </>
    )
  }, [modalVisibility.cards, filtered, data.active]);

  const handleText = useCallback((text: string) => {
    setData(prev => ({...prev, name: text}));
    setNotSaved(true);
  }, []);

  const handleResetText = useCallback(() => {
    setData(prev => ({...prev, name: ''}));
    handleSearch('');
    setNotSaved(true);
  }, []);

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={deck_id ? 'edit_deck' : 'create_new_deck'} 
                    styles={{paddingInline: 16, marginTop: 0, paddingBottom: 16}} customClose={goBack}>
        <ThemedView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 6}}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '76%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                      placeholder={i18n.t('new_deck_placeholder')}
                      value={data.name}
                      onChangeText={(text) => handleText(text)}
                      placeholderTextColor={Colors.light.text}
                      accessibilityLabel={'SEARCH_LABEL'}
                      inputMode='text'
                      maxLength={21}
                    />
              {data.name.length > 0 && 
                <ResetFilterButton left={240} onPress={handleResetText}/>}
          </ThemedView>

          <ThemedView style={{flexDirection: 'row', gap: 8}}>
            <TouchableOpacity onPress={handleReset}>
              <MaterialIcons name="sync" 
                            style={{fontSize: 26, left: -4, top: 5, opacity: 0.5}} 
                            color={Colors.light.icon}>
              </MaterialIcons>
            </TouchableOpacity>

            { Boolean(deck_id) && 
              <TouchableOpacity onPress={handleDelete}>
                <MaterialIcons name="delete-outline" 
                               style={{fontSize: 28, left: -2, top: 3.1, opacity: 0.7}} 
                               color={'crimson'}>
                </MaterialIcons>
              </TouchableOpacity>
            }
          </ThemedView>
        </ThemedView>
        <TouchableOpacity style={{width: '100%'}} onPress={() => handleModal(true, 'energy')}>
          <ThemedView style={[detailScrollStyles.artistContainer, createDeckStyles.selectButton]}>
            <ThemedView style={[detailScrollStyles.infoValue, createDeckStyles.selectEnergy, {paddingHorizontal: 16}]}>
              <ThemedView>
                {
                  data?.energy ? 
                  <ThemedText style={[detailScrollStyles.text]}>{i18n.t('energy_selected')}</ThemedText>
                  : <ThemedText style={detailScrollStyles.text}>{i18n.t('energy_select')}</ThemedText>
                } 
              </ThemedView>
              <ThemedView>
              { data?.energy ?
                  <ThemedView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6}}>
                    {
                      Object.keys(element).map((key, i) => {
                        const image = (TYPE_MAP as any)[key]?.image;
                        return (
                            (element as any)[key] &&
                            <Image
                              key={key}
                              source={image}
                              style={{
                                width: 20,
                                height: 20,
                                position: 'relative'
                              }}
                            />
                        );
                      })
                    }
                  </ThemedView> : 
                  <MaterialIcons name={'chevron-right'} 
                                 style={[{fontSize: 25, left: 8, color: Colors.light.icon}, 
                                    Platform.OS !== 'web' && {top: -3}
                                 ]}/>
                }
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>

        {
          Platform.OS !== 'web' &&
           <ThemedView style={{position: 'absolute', right: 16, top: 108, zIndex: 100}}>
            <RenderHeader></RenderHeader>
           </ThemedView>
        }

        <FlatList ListHeaderComponent={Platform.OS === 'web' ? RenderHeader : null} 
                  data={data.active as Card[]}
                  renderItem={renderItem}
                  numColumns={3}
                  contentContainerStyle={{width: '100%', marginBottom: 65}}
                  style={{width: '100%', borderRadius: 8}}
                  stickyHeaderIndices={Platform.OS === 'web' ? [0] : []}
                  showsVerticalScrollIndicator={false}
                  
                  keyExtractor={(item, index) => index + ''}
                  ListFooterComponent={
                    <ThemedView style={Platform.OS !== 'web' && {marginBottom: 55}}>
                      <TouchableOpacity style={[
                        homeScreenStyles.ctaButton, {marginTop: 45, marginBottom: 30},
                        data && data.decks?.length >= MAX_CONTENT && {opacity: 0.5}
                      ]} 
                          onPress={() => handleSave()}
                          disabled={data && data.decks.length >= MAX_CONTENT}>
                        <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>{i18n.t('save_deck')}</ThemedText>
                      </TouchableOpacity>
                    </ThemedView>
        }/>
      </SharedScreen>
      <Portal>{modalVisibility.sort && memoizedSort}</Portal>
      <Portal>{modalVisibility.filter && memoizedFilter}</Portal>
      <Portal>{modalVisibility.energy && memoizedEnergy}</Portal>
      <Portal>{modalVisibility.cards && memoizedGridMenu}</Portal>
    </Provider>
  )
}

export const createDeckStyles = StyleSheet.create({
  selectButton: {
    width: '100%', 
    marginTop: 6,
    marginBottom: 12, 
    borderRadius: 8, 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'
  },
  addIcon: {
    width: 36,
    height: 36,
    fontSize: 36,
    color: Colors.light.icon
  },
  amount: {
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    opacity: 0.9,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  selectEnergy: {
    width: '100%',
    paddingVertical: 8,
    height: 37, 
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(135, 206, 235)',
    borderRadius: 8
  },
  previewItem: {
    flex: 1, 
    marginInline: 2, 
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)', 
    height: 46, 
    justifyContent: 'center', 
    marginBottom: 6,
    borderRadius: 4
  }
});
