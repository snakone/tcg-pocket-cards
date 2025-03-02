import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Platform, Pressable, StyleProp, TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { Portal, Provider } from "react-native-paper";
import { Image } from 'expo-image';
import { BlurView } from "expo-blur";
import Animated from "react-native-reanimated";

import { 
  ButtonStyles,
  CARD_IMAGE_WIDTH_3,
  CardGridStyles,
  homeScreenStyles,
  LayoutStyles, 
  offersStyles, 
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
import { SORT_FIELD_MAP, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { AppContext } from "../_layout";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import Storage from '@/core/storage/storage.service';
import FilterCardMenu from "@/components/shared/cards/FilterCardMenu";
import SortCardMenu from "@/components/shared/cards/SortCardMenu";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { filterCards, getImageLanguage116x162, getImageLanguage69x96, sortCards } from "@/shared/definitions/utils/functions";
import { cardStyles } from "../(tabs)/cards";

import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import EnergyMenu from "@/components/dedicated/create/EnergyMenu";
import SkeletonCardGrid from "@/components/skeletons/SkeletonCardGrid";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { StorageDeck } from "@/shared/definitions/interfaces/global.interfaces";
import { CardStageENUM } from "@/shared/definitions/enums/card.enums";
import PreviewList from "@/components/dedicated/create/PreviewList";
import CreateService from "@/core/services/create.service";
import { LanguageType } from "@/shared/definitions/types/global.types";

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [isEnergyVisible, setIsEnergyVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isWithEnergy, setIsWithEnergy] = useState(false);
  const [searchCard, setSearchCard] = useState('');
  const [loading, setLoading] = useState(false);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [deck, setDeck] = useState<any[]>(Array.from({ length: 20 }, (_, i) => (null)));
  const [filtered, setFiltered] = useState<Card[]>(state.cardState.cards);
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [sort, setSort] = useState<SortItem>();
  const [notSaved, setNotSaved] = useState(false);
  const router = useRouter();
  const [deckName, setDeckName] = useState(i18n.t('new_deck_value'));
  const { confirm } = useConfirmation();
  const { deck_id } = useLocalSearchParams<{ deck_id: string }>();
  const createService = useMemo(() => new CreateService(), []);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

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
    const checkDeck = async () => {
      if (deck_id !== undefined) {
        const selected = state.settingsState.decks.find(deck => deck.id === Number(deck_id));
        if (selected) {
          const deck = selected.cards.map(card => state.cardState.cards.find(c => c.id === card) || null);
          setDeck(deck);
          setDeckName(selected.name);
          setIsWithEnergy(selected.energies.length > 0);
          Object.keys(element).forEach((key: any) => {
            if (selected.energies?.includes(key)) {
              (element as any)[key] = true;
            }
          })
        }
      }
    };

    checkDeck();
  }, [state.cardState.cards]);

  useEffect(() => {
    const sub = createService.currentDeck$.subscribe(deck => setDeck(deck));
    return () => {
      sub.unsubscribe();
    }
  }, []);

  const playSound = async () => {
    SoundService.play('POP_PICK');
  }

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={[CardGridStyles.imageContainer, !item && {opacity: 0.8}]}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handlePick(index)}
              style={[CardGridStyles.image, {justifyContent: 'center', alignItems: 'center'}]}>
          <View>
            { item ? 
            <>
              <Image accessibilityLabel={item?.name[lang]} 
                    style={[
                  CardGridStyles.image, 
                  {width: CARD_IMAGE_WIDTH_3}
                ]} 
              source={getImageLanguage116x162(lang, item?.id)}/>        
              { state.settingsState.favorites?.includes(item.id) && 
                <ThemedView style={[CardGridStyles.triangle]}></ThemedView>
              }
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), []);

  const renderHeader = useCallback(() => (
    <ThemedView style={createDeckStyles.amount}>
      <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.skeleton}}></MaterialIcons>
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
    <TouchableOpacity onPress={() => (setDeckName(''), handleSearch(''), setNotSaved(true))} 
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
  }

  const handlePick = (index: number) => {
    SoundService.play('CHANGE_VIEW');
    setIsGridVisible(true);
  }

  const handleEnergy = (key: any) => {
    playSound();
    setNotSaved(true);

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
        card.name[lang].toLowerCase()?.includes(text.toLowerCase()));
    })
  }, [state.cardState.cards, lang]);

  async function handleSave(): Promise<void> {
    playSound();
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
    Storage.addDeck(deck);
    dispatch({type: 'ADD_DECK', value: deck});

    setTimeout(() => {
      setNotSaved(false);
      setLoading(false);
      router.canGoBack() ? router.back() : router.replace('/');
    }, 1000);
  }

  async function convertDeckToStorage(): Promise<StorageDeck> {
    const filteredDecks = (deck as Card[]).filter(card => Boolean(card) && card.health > 0)
                                          .sort((a, b) => b.rarity > a.rarity ? 1 : -1);

    const result = filteredDecks.slice(0, filteredDecks.length > 2 ? 3 : filteredDecks.length);

    if (
      (filteredDecks.length > 2 && result.length > 1) && 
      (result[0].name === result[1].name && result[0].id === result[1].id)) {
      result.splice(1, 1, result[2]);
    }

    result.length = 2;
    const popular = result.map(card => card.id);

    const energies = Object.keys(element).filter(key => Boolean((element as any)[key]))
                                         .map(key => (key as unknown as PokemonTypeENUM));

    const data: StorageDeck = {
      id: Number(deck_id) ? Number(deck_id) : 
            (state.settingsState.decks.filter(d => Boolean(d))
                                      .sort((a, b) => b.id > a.id ? -1 : 1)
                                      .findLast(d => Boolean(d))?.id || 0) + 1,
      name: deckName,
      cards: deck.map(card => card?.id || null),
      energies,
      popular,
      valid: isDeckValid(deck, energies),
      created: new Date().getTime()
    };

    return data;
  }

  function isDeckValid(deck: Card[], energies: PokemonTypeENUM[]): boolean {
    if (
      deckName.length <= 0 ||
      energies.length === 0 || 
      deck.filter(card => Boolean(card)).length !== 20 ||
      !deck.find(card => card.stage === CardStageENUM.BASIC) ||
      (
        !getUniqueEnergies(deck).some(type => energies.map(energy => Number(energy)).includes(type)) && 
        !isPokemonNormalWithEnergy(deck)
      )
    ) {
      return false;
    }

    return true;
  }

  function getUniqueEnergies(cards: Card[]): PokemonTypeENUM[] {
    const energySet = new Set<PokemonTypeENUM>();
  
    cards.forEach(card => {
      card?.attacks?.forEach(attack => {
        attack.energy.forEach(energy => energySet.add(energy));
      });
    });
  
    return Array.from(energySet).sort();
  }

  function isPokemonNormalWithEnergy(deck: Card[]): boolean {
    return deck.some(card => 
        card.attacks?.some(att => 
          att.energy.every(ener => ener === PokemonTypeENUM.NORMAL)));
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
  }, [state.filterState.filter, lang]);

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
    const userConfirmed = await confirm("clean_deck", "clean_deck_question");
    if (userConfirmed) {
      resetAll();
    }
  }

  async function handleDelete(): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    const userConfirmed = await confirm("delete_deck", "delete_deck_question", 'delete');
    if (userConfirmed) {
      setLoading(true);
      Storage.removeDeck(Number(deck_id));
      dispatch({type: 'REMOVE_DECK', value: Number(deck_id)});

      setTimeout(() => {
        setNotSaved(false);
        setLoading(false);
        router.canGoBack() ? router.back() : router.replace('/');
      }, 1000);
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
    setDeck(Array.from({ length: 20 }, (_, i) => (null)));
    setIsWithEnergy(false);
    setNotSaved(true);
  }, []);

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => createService.onAddNumber(item)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          { deck.filter(card => card?.name.es === item.name.es).length === 2 && 
             <ThemedView style={[CardGridStyles.image, offersStyles.included]}></ThemedView>
          }
          <Image accessibilityLabel={item.name[lang]}
                 source={getImageLanguage69x96(lang, item.id)}
                 style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  ), [deck]);

  const cardListGrid = useCallback(() => (
    <View style={{height: Platform.OS === 'web' ? 518 : 525}}>
      <FlatList data={filtered}
                numColumns={6}
                contentContainerStyle={[{width: '100%', padding: 16, paddingTop: 0,}]}
                keyExtractor={keyExtractor}
                initialNumToRender={25}
                maxToRenderPerBatch={35}
                windowSize={15}
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={RenderEmpty}
                renderItem={renderCard}
                ListFooterComponent={<ThemedView style={{height: 95}}></ThemedView>}
      />
    </View>
), [searchCard, filtered, deck]);
  
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
            <Animated.View style={[ParallaxStyles.header, { backgroundColor: "#fff", marginBottom: 0 }]}>
              <Animated.View>
                <ThemedText type="headerTitle">{i18n.t('card_selection')}</ThemedText>
              </Animated.View>
            </Animated.View>
            <PreviewList state={state} 
                         handleSearch={handleSearch} 
                         setNotSaved={setNotSaved} 
                         styles={createDeckStyles}
                         service={createService}
                         previousDeck={deck}/>
            <ThemedView style={{marginBottom: 20 }}></ThemedView>
            {cardListGrid()}

            { loading ? null : state.cardState.cards?.length > 0 && (
              <>
                <TouchableOpacity onPress={() => (setIsSortVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
                                  style={cardStyles.container}>
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
            )}
            <View style={ScreenStyles.bottomContent}>
              <Pressable style={ButtonStyles.button} 
                                onPress={() => handleGridModal(false)} 
                                accessibilityLabel={CLOSE_SENTENCE}>
                <View style={ButtonStyles.insetBorder}>
                  <IconSymbol name="clear"></IconSymbol>
                </View>
              </Pressable>
            </View>
          </Animated.View>
      </>
    )
  }, [isGridVisible, filtered, deck]);

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={deck_id ? 'edit_deck' : 'create_new_deck'} 
                    styles={{paddingInline: 16, marginTop: 0, paddingBottom: 16}} customClose={goBack}>
        <ThemedView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 6}}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '76%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                      placeholder={i18n.t('new_deck_placeholder')}
                      value={deckName}
                      onChangeText={(text) => (setDeckName(text), setNotSaved(true))}
                      placeholderTextColor={Colors.light.text}
                      accessibilityLabel={SEARCH_LABEL}
                      inputMode='text'
                      maxLength={21}
                    />
              {deckName.length > 0 && <ResetFilterButton style={{left: 242}}/>}
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
        <TouchableOpacity style={{width: '100%'}} onPress={() => handleEnergyModal(true)}>
          <ThemedView style={[detailScrollStyles.artistContainer, createDeckStyles.selectButton]}>
            <ThemedView style={[detailScrollStyles.infoValue, createDeckStyles.selectEnergy, {paddingHorizontal: 16}]}>
              <ThemedView>
                {
                  isWithEnergy ? 
                  <ThemedText style={[detailScrollStyles.text]}>{i18n.t('energy_selected')}</ThemedText>
                  : <ThemedText style={detailScrollStyles.text}>{i18n.t('energy_select')}</ThemedText>
                } 
              </ThemedView>
              <ThemedView>
              { isWithEnergy ?
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
            {renderHeader()}
           </ThemedView>
        }

        <FlatList ListHeaderComponent={Platform.OS === 'web' ? renderHeader : null} 
                  data={deck}
                  renderItem={renderItem}
                  numColumns={3}
                  contentContainerStyle={{width: '100%', marginBottom: 65}}
                  style={{width: '100%', borderRadius: 8}}
                  stickyHeaderIndices={Platform.OS === 'web' ? [0] : []}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index + ''}
                  ListFooterComponent={
                    <ThemedView style={Platform.OS !== 'web' && {marginBottom: 55}}>
                      <TouchableOpacity style={[homeScreenStyles.ctaButton, {marginBlock: 45, flex: 1}]} 
                                        onPress={() => handleSave()}>
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

