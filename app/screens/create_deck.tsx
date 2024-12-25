import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";

import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { CLOSE_SENTENCE, NO_CONTEXT, SEARCH_LABEL } from "@/shared/definitions/sentences/global.sentences";
import { ButtonStyles, CARD_IMAGE_WIDTH_3, CardGridStyles, filterStyles, homeScreenStyles, LayoutStyles, ModalStyles, ParallaxStyles, ScreenStyles, sortStyles } from "@/shared/styles/component.styles";
import { Animated, FlatList, Platform, Pressable, StyleProp, TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/shared/definitions/utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { detailScrollStyles } from "@/components/dedicated/detail/detail.scroll";
import { StyleSheet } from 'react-native';
import { Portal, Provider } from "react-native-paper";
import { BlurView } from "expo-blur";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import { SELECT_ENERGY_HEIGHT, SORT_FIELD_MAP, TYPE_MAP } from "@/shared/definitions/utils/contants";
import { Image } from 'expo-image';
import { AppContext } from "../_layout";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import CardsService from "@/core/services/cards.service";
import { Subscription } from "rxjs";
import Storage from '@/core/storage/storage.service';
import { useError } from "@/core/providers/ErrorProvider";
import FilterCardMenu from "@/components/shared/cards/FilterCardMenu";
import SortCardMenu from "@/components/shared/cards/SortCardMenu";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { filterCards, sortCards } from "@/shared/definitions/utils/functions";
import { cardStyles } from "../(tabs)/cards";

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [deckName, setDeckName] = useState('Nuevo mazo');
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
  }, [state.filterState.sort])

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

  const playSound = async () => {
    SoundService.play('POP_PICK');
  }

  const isElementWithEnergy = (element: any): boolean => {
    return Object.keys(element).some(key => element[key]);
  }

  const isElementWith3MoreEnergy = (element: any): boolean => {
    return Object.keys(element).filter(k => !!(element as any)[k]).length >= 3;
  }

  const ResetFilterButton = ({style}: any) => (
    <TouchableOpacity onPress={() => (setDeckName(''), handleSearch(''))} 
                      style={[CardGridStyles.clearInput, style]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={CardGridStyles.imageContainer}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handlePick(index)}
              style={[CardGridStyles.image, {justifyContent: 'center', alignItems: 'center'}]}>
          <View>
          { item ? 
          <Image accessibilityLabel={item?.name} 
                  style={[
            CardGridStyles.image, 
            {width: CARD_IMAGE_WIDTH_3}
          ]} 
          source={CARD_IMAGE_MAP[String(item?.id)]}/> :
            <MaterialIcons name="add" style={styles.addIcon}></MaterialIcons>
          }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [deck]);

  const renderPreviewItem = useCallback(({item}: {item: Card}) => (
    <View style={styles.previewItem}>
      <TouchableOpacity
            onPress={() => previewPress(item)}
            style={[{justifyContent: 'center', alignItems: 'center'}]}>
        <View>
          { item ? 
          <Image accessibilityLabel={item?.name} 
                  style={[
            CardGridStyles.image, 
            {width: Platform.OS === 'web' ? 31.8 : 49.4, height: 46, borderRadius: 4}
          ]} 
          source={CARD_IMAGE_MAP[String(item?.id)]}/> :
            <MaterialIcons name="add" style={{fontSize: 16, color: Colors.light.icon}}></MaterialIcons>
          }
        </View>
      </TouchableOpacity>
    </View>
  ), [])

  const renderHeader = useCallback(() => (
    <ThemedView style={styles.amount}>
      <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.icon}}></MaterialIcons>
      <ThemedText style={{fontSize: 13}}>{deck.filter(d => Boolean(d)).length}/20</ThemedText>
    </ThemedView>
  ), [deck]);

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
  }

  const handlePick = (index: number) => {
    playSound();
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

  useEffect(() => {
    if (state.cardState.cards.length > 0) {
      setFiltered(state.cardState.cards);
    }
  }, [state.cardState.cards])

  const handleSearch = useCallback((text: string) => {
    setSearchCard(text);
    setFiltered(prev => {
      if(state.cardState.cards.length === 0) { return prev; }
      return state.cardState.cards.filter(card =>
        card.name.toLowerCase().includes(text.toLowerCase()));
    })
  }, [state.cardState.cards]);

  const addToDeck = (card: Card) => {
    if (addNumberToList(card)) {
      SoundService.play('PICK_CARD_SOUND');
    };
  }

  function previewPress(card: Card): void {
    if (!card) { return; }
    setDeck(prev => {
      const newDeck = [...prev];
      const foo = newDeck.findIndex(c => c?.name === card.name);
      if (foo !== -1) {
        newDeck[foo] = null;
      }
      SoundService.play('AUDIO_MENU_CLOSE');
      return newDeck.sort((a, b) => Boolean(b) ? 1 : -1);
    });
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

  function onClose(): void {
    setIsSortVisible(false);
    setIsFilterVisible(false);
  }

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
  }, [state.filterState.filter])

  function filterOrSortCards(type: 'sort' | 'filter', data: Card[], sort?: SortItem | undefined): Card[] {
    switch (type) {
      case 'sort': {
        if (!sort) { return data; }
        return manageSort(sort, data);
      }

      case 'filter': {
        return manageFilter(data);
      }
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
  }, [state.filterState.filter])

  const memoizedEnergyMenu = useMemo(() => {
    return (
      <>
        <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                  style={StyleSheet.absoluteFill} 
                  tint="light" 
                  experimentalBlurMethod='dimezisBlurView'/>
          <Pressable style={LayoutStyles.overlay} 
                     onPress={() => handleEnergyModal(false)}>
          </Pressable>
          <Animated.View style={[sortStyles.container, {height: SELECT_ENERGY_HEIGHT}]}>
            <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
              <ThemedView style={{top: -4}}>
                <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('energy')}</ThemedText>
                <ThemedText style={{textAlign: 'center', marginTop: 4, fontSize: 12}}>{i18n.t('select_energy')}</ThemedText>
              </ThemedView>
            </View>
            <ThemedView style={[
              filterStyles.flexContainer,
              { justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48, padding: 16 },
            ]}>
              {
                Object.keys(element).map((key, i) => {
                  const image = (TYPE_MAP as any)[key]?.image;
                  const label = (TYPE_MAP as any)[key]?.label;

                  return (
                    <TouchableOpacity onPress={() => handleEnergy(key)}
                                      disabled={isElementWith3MoreEnergy(element) && !(element as any)[key]}
                                      key={i}
                                      style={[
                                        filterStyles.button,
                                        {
                                          flexDirection: 'row',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          width: '48%',
                                        }, (element as any)[key] && {backgroundColor: '#444444'},
                                        (isElementWith3MoreEnergy(element) && !(element as any)[key]) && { opacity: 0.5 }
                    ]}>
                      <Image
                        source={image}
                        style={{
                          width: 21,
                          height: 21,
                          position: 'absolute',
                          left: 20,
                          marginRight: 8,
                        }}
                      />
                      <ThemedText style={[filterStyles.buttonText, {left: 18}, (element as any)[key] && {color: 'white'},]}>{i18n.t(label)}</ThemedText>
                    </TouchableOpacity>
                  );
                })
              }

              <ThemedView style={{marginBlock: 20, width: '100%', paddingHorizontal: 16}}>
                <ThemedText>- {i18n.t('energy_game')}</ThemedText>
                <ThemedText>- {i18n.t('energy_types')}</ThemedText>
              </ThemedView>

            </ThemedView>
            <View style={ScreenStyles.bottomContent}>
              <TouchableOpacity style={ButtonStyles.button} 
                                onPress={() => handleEnergyModal(false)} 
                                accessibilityLabel={CLOSE_SENTENCE}>
                <View style={ButtonStyles.insetBorder}>
                  <IconSymbol name="clear"></IconSymbol>
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
      </>
    )
  }, [isEnergyVisible, element]);

  const memoizedGridMenu = useMemo(() => {
    return (
      <>
        { loading && <LoadingOverlay/> }
        <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                  style={StyleSheet.absoluteFill} 
                  tint="light" 
                  experimentalBlurMethod='dimezisBlurView'/>
          <Pressable style={LayoutStyles.overlay} 
                     onPress={() => handleGridModal(false)}>
          </Pressable>
          <Animated.View style={[sortStyles.container, {height: '100%'}]}>
            <View style={[ParallaxStyles.header, { backgroundColor: "#fff", marginBottom: 0 }]}>
              <ThemedText type="headerTitle">{i18n.t('create_deck')}</ThemedText>
            </View>
            <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
              <FlatList data={deck}
                        numColumns={10}
                        contentContainerStyle={{width: '100%', padding: 16, paddingTop: 20}}
                        renderItem={renderPreviewItem}
                        keyExtractor={(item, index) => index + ''}
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

            <ThemedView style={{marginBottom: 16, backgroundColor: Colors.light.background }}>
              
            </ThemedView>

            <ThemedView style={{height: Platform.OS === 'web' ? 520 : 530}}>
              <FlatList data={filtered}
                        numColumns={7}
                        contentContainerStyle={[{width: '100%', padding: 16, paddingTop: 0,}]}
                        keyExtractor={keyExtractor}
                        initialNumToRender={5}
                        maxToRenderPerBatch={35}
                        windowSize={15}
                        keyboardDismissMode={'on-drag'}
                        keyboardShouldPersistTaps={'never'}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        renderItem={({item, index}) =>     
                        <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
                          <TouchableOpacity
                                onPress={() => addToDeck(item)}
                                style={[{justifyContent: 'center', alignItems: 'center'}]}>
                            <View>
                              <Image accessibilityLabel={item.name} 
                                      style={[
                                CardGridStyles.image, 
                                {width: Platform.OS === 'web' ? 49 : 49.4}
                              ]} 
                              source={CARD_IMAGE_MAP[String(item.id)]}/>
                            </View>
                          </TouchableOpacity>
                        </View>}
                        ListFooterComponent={<ThemedView style={{height: 80}}></ThemedView>}
              />
            </ThemedView>
            { loading ? null : state.cardState.cards?.length > 0 ? (
        <>
        <TouchableOpacity onPress={() => setIsSortVisible(true)} style={cardStyles.container}>
          <ThemedView>
            <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                           color={'skyblue'} 
                           style={fixFilterIcon() as StyleProp<TextStyle>}> 
            </MaterialIcons>
            <MaterialIcons name={getOrderIcon()} style={cardStyles.sortIcon}>
            </MaterialIcons>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFilterVisible(true)} 
                          style={[cardStyles.container, {bottom: 88}]}>
          <ThemedView>
            <IconSymbol name="cat.circle" 
                        color={'mediumaquamarine'} 
                        style={{fontSize: 32}}>
            </IconSymbol>
            <MaterialIcons name={getFilterOrderIcon()} style={cardStyles.sortIcon}>
            </MaterialIcons>
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
      <SharedScreen title={'create_new_deck'} styles={{paddingInline: 16, marginTop: 0}}>
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
            <TouchableOpacity>
              <MaterialIcons name="delete-outline" 
                            style={{fontSize: 28, left: -2, top: 3.1, opacity: 0.7}} 
                            color={'crimson'}>
              </MaterialIcons>
            </TouchableOpacity>
        </ThemedView>
        <TouchableOpacity style={{width: '100%'}} onPress={() => handleEnergyModal(true)}>
          <ThemedView style={[detailScrollStyles.artistContainer, styles.selectButton]}>
            <ThemedView style={[detailScrollStyles.infoValue, styles.selectEnergy]}>
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
                  </ThemedView> : <MaterialIcons name={'chevron-right'} 
                                                 style={{fontSize: 25, width: 25, height: 25, left: 8, color: Colors.light.icon}}/>
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
                  ListFooterComponent={
                    <ThemedView style={Platform.OS !== 'web' && {marginBottom: 55}}>
                      <TouchableOpacity style={[homeScreenStyles.ctaButton, {marginBlock: 45}]} onPress={() => (playSound())}>
                        <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>{i18n.t('save_deck')}</ThemedText>
                      </TouchableOpacity>
                    </ThemedView>
        }/>
      </SharedScreen>
      <Portal>{isSortVisible && memoizedSort}</Portal>
      <Portal>{isFilterVisible && memoizedFilter}</Portal>
      <Portal>{isEnergyVisible && memoizedEnergyMenu}</Portal>
      <Portal>{isGridVisible && memoizedGridMenu}</Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
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

