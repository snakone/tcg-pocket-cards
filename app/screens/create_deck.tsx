import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import { FlatList, Platform, Pressable, StyleProp, TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { Portal, Provider } from "react-native-paper";
import { Image } from 'expo-image';
import { BlurView } from "expo-blur";
import { Subscription } from "rxjs";

import { 
  ButtonStyles,
  CARD_IMAGE_WIDTH_3,
  CardGridStyles,
  homeScreenStyles,
  LayoutStyles, 
  ParallaxStyles, 
  ScreenStyles, 
  sortStyles 
} from "@/shared/styles/component.styles";

import { ThemedView } from "@/components/ThemedView";
import { CLOSE_SENTENCE, NO_CONTEXT, SEARCH_LABEL } from "@/shared/definitions/sentences/global.sentences";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/shared/definitions/utils/colors";
import { detailScrollStyles } from "@/components/dedicated/detail/detail.scroll";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import { SORT_FIELD_MAP, TYPE_MAP } from "@/shared/definitions/utils/contants";
import { AppContext } from "../_layout";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import CardsService from "@/core/services/cards.service";
import Storage from '@/core/storage/storage.service';
import { useError } from "@/core/providers/ErrorProvider";
import FilterCardMenu from "@/components/shared/cards/FilterCardMenu";
import SortCardMenu from "@/components/shared/cards/SortCardMenu";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { filterCards, sortCards } from "@/shared/definitions/utils/functions";
import { cardStyles } from "../(tabs)/cards";

import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import EnergyMenu from "@/components/dedicated/create/EnergyMenu";
import SkeletonCardGrid from "@/components/skeletons/SkeletonCardGrid";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated";
import useHeaderAnimation from "@/components/ui/HeaderAnimation";

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [isEnergyVisible, setIsEnergyVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isWithEnergy, setIsWithEnergy] = useState(false);
  const [searchCard, setSearchCard] = useState('');
  const [loading, setLoading] = useState(true);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [deck, setDeck] = useState<any[]>(Array.from({ length: 20 }, (_, i) => (null)));
  const cardsService = useMemo(() => new CardsService(), []);
  const { show: showError } = useError();
  const [filtered, setFiltered] = useState<Card[]>(state.cardState.cards);
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [sort, setSort] = useState<SortItem>();
  const [notSaved, setNotSaved] = useState(true);
  const router = useRouter();
  const [deckName, setDeckName] = useState(i18n.t('new_deck_value'));
  const { confirm } = useConfirmation();
  const scrollY = useSharedValue(0);
  const { animatedHeaderStyle, animatedTitleStyle, animatedGridHeaderStyle } = useHeaderAnimation(scrollY);

  const [element, setElement] = useState({
    [PokemonTypeENUM.GRASS]: null, 
    [PokemonTypeENUM.FIRE]: null,
    [PokemonTypeENUM.WATER]: null,
    [PokemonTypeENUM.ELECTRIC]: null,
    [PokemonTypeENUM.PSYCHIC]: null,
    [PokemonTypeENUM.FIGHT]: null,
    [PokemonTypeENUM.DARK]: null,
    [PokemonTypeENUM.STEEL]: null,
    [PokemonTypeENUM.DRAGON]: null,
    [PokemonTypeENUM.NORMAL]: null
  });

  useEffect(() => {
    const cards: Card[] = state.settingsState.cards;

    if (cards && cards.length !== 0 && !state.cardState.loaded) {
      dispatch({ type: 'SET_CARDS', cards });
      setLoading(false);
      return;
    }

    let sub: Subscription;
    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, []);

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', cards: res });
          Storage.set('cards', res);
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          Storage.set('cards', []);
          setLoading(false);
        }
      });

      return sub;
  }, [dispatch]);

  const playSound = async () => {
    SoundService.play('POP_PICK');
  }

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={CardGridStyles.imageContainer}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handlePick(index)}
              style={[CardGridStyles.image, {justifyContent: 'center', alignItems: 'center'}]}>
          <View>
            { item ? 
            <>
              <Image accessibilityLabel={item?.name} 
                    style={[
                  CardGridStyles.image, 
                  {width: CARD_IMAGE_WIDTH_3}
                ]} 
              source={CARD_IMAGE_MAP[String(item?.id)]}/>        
              { state.settingsState.favorites?.includes(item.id) && 
                <ThemedView style={[CardGridStyles.triangle]}></ThemedView>
              }
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [deck]);

  const renderPreviewItem = useCallback(({item}: {item: Card}) => (
    <View style={createDeckStyles.previewItem}>
      <TouchableOpacity
            onPress={() => previewPress(item)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          { item ? 
          <ThemedView style={{backgroundColor: Colors.light.background}}>
            <Image accessibilityLabel={item?.name} 
                    style={[
              CardGridStyles.image, 
              {width: Platform.OS === 'web' ? 31.8 : 49.4, height: 46, borderRadius: 4}
            ]} 
            source={CARD_IMAGE_MAP[String(item?.id)]}/>
            { state.settingsState.favorites?.includes(item.id) && 
              <ThemedView style={[CardGridStyles.triangle, {
                borderRightWidth: 8,
                borderBottomWidth: 8
              }]}></ThemedView>
            }
          </ThemedView> : <MaterialIcons name="add" style={{fontSize: 16, color: Colors.light.icon}}></MaterialIcons>
          }
        </View>
      </TouchableOpacity>
    </View>
  ), [])

  const renderHeader = useCallback(() => (
    <ThemedView style={createDeckStyles.amount}>
      <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.icon}}></MaterialIcons>
      <ThemedText style={{fontSize: 13}}>{deck.filter(d => Boolean(d)).length}/20</ThemedText>
    </ThemedView>
  ), [deck]);

  const RenderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded ? (
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>
      ) : (<SkeletonCardGrid columns={7} amount={56} width={47}/>);
    }, [state.cardState.loaded]);
  
    return renderCardState();
  };

  const ResetFilterButton = ({style}: any) => (
    <TouchableOpacity onPress={() => (setDeckName(''), handleSearch(''))} 
                      style={[CardGridStyles.clearInput, style]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const handleEnergyModal = (value: boolean) => {
    if (value) {
      SoundService.play('AUDIO_MENU_OPEN');
    } else {
      SoundService.play('AUDIO_MENU_CLOSE');
    }
    setIsEnergyVisible(value);
  }

  const handleGridModal = (value: boolean) => {
    if (value) {
      SoundService.play('AUDIO_MENU_OPEN');
    } else {
      SoundService.play('AUDIO_MENU_CLOSE');
    }
    setIsGridVisible(value);
    scrollY.value = 0;
  }

  const handlePick = (index: number) => {
    SoundService.play('CHANGE_VIEW');
    setIsGridVisible(true);
  }

  const handleEnergy = (key: any) => {
    playSound();

    setElement(prev => {
      return {
        ...prev,
        [key]: !(prev as any)[key]
      };
    })
  }

  const handleSearch = useCallback((text: string) => {
    setSearchCard(text);
    setFiltered(prev => {
      if(state.cardState.cards.length === 0) { return prev; }
      return state.cardState.cards.filter(card =>
        card.name.toLowerCase().includes(text.toLowerCase()));
    })
  }, [state.cardState.cards]);

  function previewPress(card: Card): void {
    if (!card) { return; }
    setDeck(prev => {
      const newDeck = [...prev];
      const index = newDeck.findIndex(c => c?.name === card.name);
      if (index !== -1) {
        newDeck[index] = null;
      }
      SoundService.play('DELETE_SOUND');
      return newDeck.sort((a, b) => Boolean(b) ? 1 : -1);
    });
  }

  function handleSave(): void {
    playSound();
    setLoading(true);
    setTimeout(() => {
      setNotSaved(false);
      setLoading(false);
    }, 2000);
  }

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={isSortVisible} 
                         onClose={onClose}
                         animatedStyle={{}}/>
  }, [isSortVisible, sort]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={isFilterVisible} 
                           animatedStyle={{}} 
                           onClose={onClose}/>
  }, [isFilterVisible]);

  const memoizedEnergy = useMemo(() => {
    return <EnergyMenu isVisible={isEnergyVisible} 
                       element={element} 
                       handleEnergyModal={handleEnergyModal}
                       handleEnergy={handleEnergy}/>
  }, [isEnergyVisible, element]);

  const keyExtractor = useCallback((item: Card) => String(item.id), []);

  useEffect(() => {
    if (!filtered || filtered.length === 0) { return; }
    const sorted = filterOrSortCards('sort', filtered, state.filterState.sort.find(s => s.active));
    setFiltered(sorted);
  }, [state.filterState.sort]);

  useEffect(() => {
    if (!filtered) { return; }
    
    if (!isFilterVisible && state.filterState.filter.areAllPropertiesNull()) {
      handleSearch('');
      return;
    }

    if(isFilterVisible) { return; }
    const sorted = filterOrSortCards('filter', state.cardState.cards);
    setFiltered(sorted);
  }, [state.filterState.filter]);

  useEffect(() => {
    if (!isEnergyVisible && isElementWithEnergy(element)) {
      setIsWithEnergy(true);
    } else {
      setIsWithEnergy(false);
    }
  }, [isEnergyVisible]);

  useEffect(() => {
    if (state.filterState.sort.length > 0) {
      const active = state.filterState.sort.find(s => s.active);
      setSort(active);
    }
  }, [state.filterState.sort]);

  useEffect(() => {
    if (state.cardState.cards.length > 0) {
      setFiltered(state.cardState.cards);
    }
  }, [state.cardState.cards]);

  function filterOrSortCards(type: 'sort' | 'filter', data: Card[], sort?: SortItem | undefined): Card[] {
    switch (type) {
      case 'sort': {
        if (!sort) { return data; }
        return manageSort(sort, data);
      }

      case 'filter': return manageFilter(data);
    }
  }

  function manageFilter(data: Card[]): Card[] {
    const filter = state.filterState.filter;
    return filterCards(filter, data, state.settingsState.favorites);
  }

  function manageSort(sort: SortItem, data: Card[]): Card[] {
    const sortField = SORT_FIELD_MAP[sort.label];
  
    if (!sortField) {
      console.error(`Unsupported sorting option: ${sort.label}`);
      return data;
    }
  
    return sortCards(sortField, data, sort);
  }

  const addToDeck = (card: Card) => {
    if (addNumberToList(card)) {
      SoundService.play('PICK_CARD_SOUND');
    };
  }

  function addNumberToList(
    card: Card,
    maxRepeats: number = 2
  ): boolean {

    const sameNameCards = deck.filter(
      (c) => Boolean(c) && c.name === card.name
    ) as Card[];

    if (sameNameCards.length < maxRepeats) {
      const emptyIndex = deck.indexOf(null);
  
      if (emptyIndex !== -1) {
        const newDeck = [...deck];
        newDeck[emptyIndex] = card;
        setDeck(newDeck);
        return true;
      }
    }
    return false;
  }

  function canAddToDeck(card: Card): boolean {
    const maxRepeats: number = 2;

    const sameNameCards = deck.filter(
      (c) => Boolean(c) && c.name === card.name
    ) as Card[];

    if (sameNameCards.length < maxRepeats) {
      const emptyIndex = deck.indexOf(null);
  
      if (emptyIndex !== -1) {
        return true;
      }
    }

    return false;
  }

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
  }, [sort])

  const getFilterOrderIcon = useCallback(() => {
    return state.filterState.filter.areAllPropertiesNull() ? 'cancel' : 'check-circle';
  }, [state.filterState.filter]);

  function onClose(): void {
    setIsSortVisible(false);
    setIsFilterVisible(false);
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

  const isElementWithEnergy = (element: any): boolean => {
    return Object.keys(element).some(key => element[key]);
  }

  async function handleReset(): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    const userConfirmed = await confirm("delete_deck", "delete_deck_question", 'delete');
    if (userConfirmed) {
      resetAll();
    }
  }

  const resetAll = useCallback(() => {
    setDeckName(i18n.t('new_deck_value'));
    setElement({
      [PokemonTypeENUM.GRASS]: null, 
      [PokemonTypeENUM.FIRE]: null,
      [PokemonTypeENUM.WATER]: null,
      [PokemonTypeENUM.ELECTRIC]: null,
      [PokemonTypeENUM.PSYCHIC]: null,
      [PokemonTypeENUM.FIGHT]: null,
      [PokemonTypeENUM.DARK]: null,
      [PokemonTypeENUM.STEEL]: null,
      [PokemonTypeENUM.DRAGON]: null,
      [PokemonTypeENUM.NORMAL]: null
    });
    setDeck(Array.from({ length: 20 }, (_, i) => (null)))
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const memoizedGridMenu = useMemo(() => {
    return (
      <>
        <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                  style={StyleSheet.absoluteFill} 
                  tint="light" 
                  experimentalBlurMethod='dimezisBlurView'/>
          <Pressable style={LayoutStyles.overlay} 
                     onPress={() => handleGridModal(false)}>
          </Pressable>
          <Animated.View style={[sortStyles.container, {height: '100%'}]}>
            { loading && <LoadingOverlay/> }
            <Animated.View style={[ParallaxStyles.header, { backgroundColor: "#fff", marginBottom: 0 }, animatedHeaderStyle]}>
              <Animated.View style={animatedTitleStyle}>
                <ThemedText type="headerTitle">{i18n.t('card_selection')}</ThemedText>
              </Animated.View>
            </Animated.View>
            <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
              <FlatList data={deck}
                        numColumns={10}
                        contentContainerStyle={{width: '100%', padding: 16, paddingTop: 20}}
                        renderItem={renderPreviewItem}
                        keyExtractor={(item, index) => index + 1 + ''}
              />
              <ThemedView style={{padding: 16, paddingTop: 0}}>
                <Animated.View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <TextInput style={[CardGridStyles.searchInput, {width: '80%'}]} 
                             placeholder={i18n.t('search_card_placeholder')}
                             placeholderTextColor={Colors.light.text}
                             accessibilityLabel={SEARCH_LABEL}
                             inputMode='text'
                             value={searchCard}
                             onChangeText={handleSearch}/>
                    {searchCard.length > 0 && <ResetFilterButton style={{left: 252}}/>}
                    <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.icon}}></MaterialIcons>
                      <ThemedText style={{fontSize: 13, width: 40, right: -6}}>{deck.filter(d => Boolean(d)).length}/20</ThemedText>
                    </ThemedView>
                </Animated.View>
              </ThemedView>
            </ThemedView>

            <ThemedView style={{marginBottom: 16 }}></ThemedView>

            <Animated.View style={animatedGridHeaderStyle}>
              <Animated.FlatList data={filtered}
                        numColumns={7}
                        contentContainerStyle={[{width: '100%', padding: 16, paddingTop: 0,}]}
                        keyExtractor={keyExtractor}
                        initialNumToRender={50}
                        maxToRenderPerBatch={50}
                        windowSize={15}
                        onScroll={scrollHandler}
                        keyboardDismissMode={'on-drag'}
                        keyboardShouldPersistTaps={'never'}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        ListEmptyComponent={RenderEmpty}
                        renderItem={({item, index}) =>     
                        <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
                          <TouchableOpacity
                                onPress={() => addToDeck(item)}
                                disabled={!canAddToDeck(item)}
                                style={[{justifyContent: 'center', alignItems: 'center'}]}>
                            <View>
                              { state.settingsState.favorites?.includes(item.id) && 
                                <ThemedView style={[CardGridStyles.triangle, {
                                  borderRightWidth: 10,
                                  borderBottomWidth: 10
                                }]}></ThemedView>
                              }
                              <Image accessibilityLabel={item.name} 
                                      style={[
                                CardGridStyles.image, 
                                {width: Platform.OS === 'web' ? 49 : 49.4}, !canAddToDeck(item) && {opacity: 0.3}
                              ]} 
                              source={CARD_IMAGE_MAP[String(item.id)]}/>
                            </View>
                          </TouchableOpacity>
                        </View>}
                        ListFooterComponent={<ThemedView style={{height: 80}}></ThemedView>}
              />
            </Animated.View>
            { loading ? null : state.cardState.cards?.length > 0 ? (
        <>
        <TouchableOpacity onPress={() => (setIsSortVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} style={cardStyles.container}>
          <ThemedView>
            <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                           color={'skyblue'} 
                           style={fixFilterIcon() as StyleProp<TextStyle>}> 
            </MaterialIcons>
            <MaterialIcons name={getOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (setIsFilterVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
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
            <View style={ScreenStyles.bottomContent}>
              <TouchableOpacity style={ButtonStyles.button} 
                                onPress={() => handleGridModal(false)} 
                                accessibilityLabel={CLOSE_SENTENCE}>
                <View style={ButtonStyles.insetBorder}>
                  <IconSymbol name="clear"></IconSymbol>
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
      </>
    )
  }, [isGridVisible, deck, filtered]);

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={'create_new_deck'} styles={{paddingInline: 16, marginTop: 0}} customClose={goBack}>
        <ThemedView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput style={[CardGridStyles.searchInput, {width: '87%'}]}
                     placeholder={i18n.t('new_deck_placeholder')}
                     value={deckName}
                     onChangeText={setDeckName}
                     placeholderTextColor={Colors.light.text}
                     accessibilityLabel={SEARCH_LABEL}
                     inputMode='text'
                  />
            {deckName.length > 0 && <ResetFilterButton style={{left: 278}}/>}
            <TouchableOpacity onPress={handleReset}>
              <MaterialIcons name="delete-outline" 
                            style={{fontSize: 28, left: -2, top: 3.1, opacity: 0.7}} 
                            color={'crimson'}>
              </MaterialIcons>
            </TouchableOpacity>
        </ThemedView>
        <TouchableOpacity style={{width: '100%'}} onPress={() => handleEnergyModal(true)}>
          <ThemedView style={[detailScrollStyles.artistContainer, createDeckStyles.selectButton]}>
            <ThemedView style={[detailScrollStyles.infoValue, createDeckStyles.selectEnergy]}>
              <ThemedView>
                <ThemedText style={detailScrollStyles.text}>{i18n.t('energy_select')}</ThemedText> 
              </ThemedView>
              <ThemedView>
              { isWithEnergy ?
                  <ThemedView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8}}>
                    {
                      Object.keys(element).map((key, i) => {
                        const image = (TYPE_MAP as any)[key]?.image;
                        return (
                            (element as any)[key] &&
                            <Image
                              key={key}
                              source={image}
                              style={{
                                width: 22,
                                height: 22,
                                position: 'relative'
                              }}
                            />
                        );
                      })
                    }
                  </ThemedView> : 
                  <MaterialIcons name={'chevron-right'} style={{fontSize: 25, left: 8, color: Colors.light.icon}}/>
                }
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>

        <FlatList ListHeaderComponent={renderHeader} 
                  data={deck}
                  renderItem={renderItem}
                  numColumns={3}
                  contentContainerStyle={{width: '100%', marginBottom: 65, marginTop: -2}}
                  style={{width: '100%', borderRadius: 8}}
                  stickyHeaderIndices={[0]}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index + ''}
                  ListFooterComponent={
                    <ThemedView style={Platform.OS !== 'web' && {marginBottom: 55}}>
                      <TouchableOpacity style={[homeScreenStyles.ctaButton, {marginBlock: 45}]} onPress={() => handleSave()}>
                        <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>{i18n.t('save_deck')}</ThemedText>
                      </TouchableOpacity>
                    </ThemedView>
        }/>
      </SharedScreen>
      <Portal>{isSortVisible && memoizedSort}</Portal>
      <Portal>{isFilterVisible && memoizedFilter}</Portal>
      <Portal>{isEnergyVisible && memoizedEnergy}</Portal>
      <Portal>{isGridVisible && memoizedGridMenu}</Portal>
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
    opacity: 0.8,
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
    alignItems: 'center'
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

