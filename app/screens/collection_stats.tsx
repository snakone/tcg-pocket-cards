import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { MaterialIcons } from "@expo/vector-icons";
import { Portal, Provider } from "react-native-paper";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedView } from "@/components/ThemedView";
import { AppContext } from "../_layout";
import { CollectionElementStat, CollectionRarityStat, CollectionStat, ExpansionEmblem, UserCollection } from "@/shared/definitions/interfaces/global.interfaces";
import { CardExpansionENUM, CardLanguageENUM, CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { settingsStyles } from "./settings";
import { COLLECTION_LANGUAGE_MAP, CollectionLanguageList, EXPANSION_PACK_MAP } from "@/shared/definitions/utils/constants";
import { Colors } from "@/shared/definitions/utils/colors";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { EXPANSION } from "@/shared/definitions/enums/packs.enums";
import CollectionStatsItem from "@/components/dedicated/collection/StatsItem";
import SelectExpansionMenu from "@/components/dedicated/collection/SelectExpansionMenu";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import ProgressBar from "@/components/dedicated/collection/ProgressBar";
import { cardStyles } from "../(tabs)/cards";
import ListMenu from "@/components/dedicated/collection/ListMenu";
import { StatsGrid } from "@/components/dedicated/collection/StatsGrid";
import { ExpansionGridStats } from "@/components/dedicated/collection/ExpansionGridStats";

import { 
  ARCEUS_EMBLEM, 
  CHARIZARD_EMBLEM, 
  CROWN_RARITY, 
  DARK_ICON, 
  DIALGA_EMBLEM, 
  DRAGON_ICON, 
  ELECTRIC_ICON, 
  FIGHT_ICON, 
  FIRE_ICON, 
  GRASS_ICON, 
  MEW_EMBLEM, 
  MEWTWO_EMBLEM, 
  NORMAL_ICON, 
  NORMAL_RARITY, 
  PALKIA_EMBLEM, 
  PIKACHU_EMBLEM, 
  PROMO_A_EMBLEM, 
  PSYCHIC_ICON, 
  STAR_RARITY, 
  STEEL_ICON, 
  WATER_ICON
} from "@/shared/definitions/sentences/path.sentences";
import { roundPercentage } from "@/shared/definitions/utils/functions";

export default function CollectionStatsScreen() {
  const {i18n} = useI18n();
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [collection, setCollection] = useState<UserCollection[]>([]);
  const [langCollection, setLangCollection] = useState<CardLanguageENUM>(state.settingsState.collectionLanguage || CardLanguageENUM.EN);
  const flatListRef = useRef<FlatList<CollectionStat> | any>(null);
  const [expansionVisible, setExpansionVisible] = useState<boolean>(false);
  const [currentExpansion, setCurrentExpansion] = useState<ExpansionEmblem>();

  const [mainStats, setMainStats] = useState<CollectionStat>();
  const [pikachuStats, setPikachuStats] = useState<CollectionStat>();
  const [mewtwoStats, setMewtwoStats] = useState<CollectionStat>();
  const [charizardStats, setCharizardStats] = useState<CollectionStat>();
  const [mewStats, setMewStats] = useState<CollectionStat>();
  const [dialgaStats, setDialgaStats] = useState<CollectionStat>();
  const [palkiaStats, setPalkiaStats] = useState<CollectionStat>();
  const [arceusStats, setArceusStats] = useState<CollectionStat>();
  const [promoStats, setPromoStats] = useState<CollectionStat>();

  const [missingPacks, setMissingPacks] = useState<CollectionStat[]>([]);

  const [waterStats, setWaterStats] = useState<CollectionElementStat>();
  const [grassStats, setGrassStats] = useState<CollectionElementStat>();
  const [fireStats, setFireStats] = useState<CollectionElementStat>();
  const [electricStats, setElectricStats] = useState<CollectionElementStat>();
  const [fightStats, setFightStats] = useState<CollectionElementStat>();
  const [darkStats, setDarkStats] = useState<CollectionElementStat>();
  const [psychicStats, setPsychicStats] = useState<CollectionElementStat>();
  const [steelStats, setSteelStats] = useState<CollectionElementStat>();
  const [dragonStats, setDragonStats] = useState<CollectionElementStat>();
  const [normalStats, setNormalStats] = useState<CollectionElementStat>();

  const [commonStats, setCommonStats] = useState<CollectionRarityStat>();
  const [unCommonStats, setUnCommonStats] = useState<CollectionRarityStat>();
  const [rareStats, setRareStats] = useState<CollectionRarityStat>();
  const [doubleStats, setDoubleStats] = useState<CollectionRarityStat>();
  const [artStats, setArtStats] = useState<CollectionRarityStat>();
  const [superStats, setSuperStats] = useState<CollectionRarityStat>();
  const [inmersiveStats, setInmersiveStats] = useState<CollectionRarityStat>();
  const [crownStats, setCrownStats] = useState<CollectionRarityStat>();

  const [listMenuVisible, setListMenuVisible] = useState<boolean>(false);

  const allStats = [
    charizardStats,
    mewtwoStats,
    pikachuStats,
    mewStats,
    dialgaStats,
    palkiaStats,
    arceusStats,
    promoStats,
  ];

  const allElementStats = [
    grassStats,
    waterStats,
    fireStats,
    electricStats,
    fightStats,
    darkStats,
    psychicStats,
    steelStats,
    dragonStats,
    normalStats
  ];

  const allRarityStats = [
    commonStats,
    unCommonStats,
    rareStats,
    doubleStats,
    artStats,
    superStats,
    inmersiveStats,
    crownStats
  ];

  useEffect(() => {
    setCollection(state.settingsState.collection);
  }, [state.settingsState.collection]);

  useEffect(() => {
    if (state.settingsState.collectionLanguage !== undefined) {
      selectLanguage(state.settingsState.collectionLanguage, false);
    }
  }, [state.settingsState.collectionLanguage]);

  const filterAndSort = (filterFn: (card: Card) => boolean) => {
    const filtered = state.cardState.cards.filter(filterFn).sort((a, b) => a.order - b.order);
    return { data: filtered, length: filtered.length };
  };

  const getCards = useCallback((pack: EXPANSION) => 
    filterAndSort(card => card.found && card.found.includes(pack) || false)
  , [state.cardState.cards]);

  const getCardsExpansion = useCallback((expansion: CardExpansionENUM) => 
    filterAndSort(card => card.expansion === expansion)
  , [state.cardState.cards]);

  const getCardRarity = useCallback((rarity: CardRarityENUM) => 
    filterAndSort(card => card.rarity === rarity)
  , [state.cardState.cards]);

  const getCardByType = useCallback((type: PokemonTypeENUM) => 
    filterAndSort(card => card.element === type)
  , [state.cardState.cards]);

  const { data: pikachuCards, length: pikachuCardsLength } = getCards(EXPANSION.PIKACHU);
  const { data: mewtwoCards, length: mewtwoCardsLength } = getCards(EXPANSION.MEWTWO);
  const { data: charizardCards, length: charizardCardsLength } = getCards(EXPANSION.CHARIZARD);
  const { data: islandCards, length: islandCardsLength } = getCards(EXPANSION.MEW);
  const { data: dialgaCards, length: dialgaCardsLength } = getCards(EXPANSION.DIALGA);
  const { data: palkiaCards, length: palkiaCardsLength } = getCards(EXPANSION.PALKIA);
  const { data: triumphCards, length: triumphCardsLength } = getCards(EXPANSION.ARCEUS);
  const { data: promoAPackCards, length: promoAPackCardsLength } = getCardsExpansion(CardExpansionENUM.PROMO_A);

  const { data: grassCards, length: grassCardsLength } = getCardByType(PokemonTypeENUM.GRASS);
  const { data: darkCards, length: darkCardsLength } = getCardByType(PokemonTypeENUM.DARK);
  const { data: dragonCards, length: dragonCardsLength } = getCardByType(PokemonTypeENUM.DRAGON);
  const { data: electricCards, length: electricCardsLength } = getCardByType(PokemonTypeENUM.ELECTRIC);
  const { data: fightCards, length: fightCardsLength } = getCardByType(PokemonTypeENUM.FIGHT);
  const { data: fireCards, length: fireCardsLength } = getCardByType(PokemonTypeENUM.FIRE);
  const { data: normalCards, length: normalCardsLength } = getCardByType(PokemonTypeENUM.NORMAL);
  const { data: psychicCards, length: psychicCardsLength } = getCardByType(PokemonTypeENUM.PSYCHIC);
  const { data: steelCards, length: steelCardsLength } = getCardByType(PokemonTypeENUM.STEEL);
  const { data: waterCards, length: waterCardsLength } = getCardByType(PokemonTypeENUM.WATER);

  const { data: commonCards, length: commonCardsLength } = getCardRarity(CardRarityENUM.COMMON);
  const { data: unCommonCards, length: unCommonCardsLength } = getCardRarity(CardRarityENUM.UNCOMMON);
  const { data: rareCards, length: rareCardsLength } = getCardRarity(CardRarityENUM.RARE);
  const { data: doubleCards, length: doubleCardsLength } = getCardRarity(CardRarityENUM.DOUBLE);
  const { data: artCards, length: artCardsLength } = getCardRarity(CardRarityENUM.ART);
  const { data: superCards, length: superCardsLength } = getCardRarity(CardRarityENUM.SUPER);
  const { data: inmersiveCards, length: inmersiveCardsLength } = getCardRarity(CardRarityENUM.INMERSIVE);
  const { data: crownCards, length: crownCardsLength } = getCardRarity(CardRarityENUM.CROWN);

  const charizardCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.CHARIZARD));
  const charizardArtCards = artCards.filter(card => card.found?.includes(EXPANSION.CHARIZARD));
  const pikachuCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.PIKACHU));
  const pikachuArtCards = artCards.filter(card => card.found?.includes(EXPANSION.PIKACHU));
  const mewtwoCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.MEWTWO));
  const mewtwoArtCards = artCards.filter(card => card.found?.includes(EXPANSION.MEWTWO));
  const mewCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.MEW));
  const mewArtCards = artCards.filter(card => card.found?.includes(EXPANSION.MEW));
  const dialgaCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.DIALGA));
  const dialgaArtCards = artCards.filter(card => card.found?.includes(EXPANSION.DIALGA));
  const palkiaCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.PALKIA));
  const palkiaArtCards = artCards.filter(card => card.found?.includes(EXPANSION.PALKIA));
  const arceusCrownCards = crownCards.filter(card => card.found?.includes(EXPANSION.ARCEUS));
  const arceusdArtCards = artCards.filter(card => card.found?.includes(EXPANSION.ARCEUS));

  const allCards = {
    grass: grassCards,
    dark: darkCards,
    dragon: dragonCards,
    electric: electricCards,
    fight: fightCards,
    fire: fireCards,
    normal: normalCards,
    psychic: psychicCards,
    steel: steelCards,
    water: waterCards,
    common: commonCards,
    uncommon: unCommonCards,
    rare: rareCards,
    double: doubleCards,
    art: artCards,
    super: superCards,
    inmersive: inmersiveCards,
    crown: crownCards
  }

  const DATA = [
    {
      cards: state.cardState.cards.map(card => card.id),
      length: state.cardState.cards.length,
      setter: setMainStats,
    },
    {
      name: 'PIKACHU',
      label: 'expansion_pikachu',
      cards: pikachuCards.map(card => card.id),
      length: pikachuCardsLength,
      setter: setPikachuStats,
      emblem: PIKACHU_EMBLEM,
      crown: pikachuCrownCards.map(card => card.id),
      art: pikachuArtCards.map(card => card.id)
    },
    {
      name: 'MEWTWO',
      label: 'expansion_mewtwo',
      cards: mewtwoCards.map(card => card.id),
      length: mewtwoCardsLength,
      setter: setMewtwoStats,
      emblem: MEWTWO_EMBLEM,
      crown: mewtwoCrownCards.map(card => card.id),
      art: mewtwoArtCards.map(card => card.id)
    },
    {
      name: 'CHARIZARD',
      label: 'expansion_charizard',
      cards: charizardCards.map(card => card.id),
      length: charizardCardsLength,
      setter: setCharizardStats,
      emblem: CHARIZARD_EMBLEM,
      crown: charizardCrownCards.map(card => card.id),
      art: charizardArtCards.map(card => card.id)
    },
    {
      name: 'MEW',
      label: 'expansion_mew',
      cards: islandCards.map(card => card.id),
      length: islandCardsLength,
      setter: setMewStats,
      emblem: MEW_EMBLEM,
      crown: mewCrownCards.map(card => card.id),
      art: mewArtCards.map(card => card.id)
    },
    {
      name: 'DIALGA',
      label: 'expansion_dialga',
      cards: dialgaCards.map(card => card.id),
      length: dialgaCardsLength,
      setter: setDialgaStats,
      emblem: DIALGA_EMBLEM,
      crown: dialgaCrownCards.map(card => card.id),
      art: dialgaArtCards.map(card => card.id)
    },
    {
      name: 'PALKIA',
      label: 'expansion_palkia',
      cards: palkiaCards.map(card => card.id),
      length: palkiaCardsLength,
      setter: setPalkiaStats,
      emblem: PALKIA_EMBLEM,
      crown: palkiaCrownCards.map(card => card.id),
      art: palkiaArtCards.map(card => card.id)
    },
    {
      name: 'ARCEUS',
      label: 'expansion_arceus',
      cards: triumphCards.map(card => card.id),
      length: triumphCardsLength,
      setter: setArceusStats,
      emblem: ARCEUS_EMBLEM,
      crown: arceusCrownCards.map(card => card.id),
      art: arceusdArtCards.map(card => card.id)
    },
    {
      name: 'PROMO',
      label: 'expansion_promo_a',
      cards: promoAPackCards.map(card => card.id),
      length: promoAPackCardsLength,
      setter: setPromoStats,
      emblem: PROMO_A_EMBLEM,
    },
  ];

  const DATA_ELEMENTS = [
    {
      cards: grassCards,
      length: grassCardsLength,
      icon: GRASS_ICON,
      setter: setGrassStats,
    },
    {
      cards: waterCards,
      length: waterCardsLength,
      icon: WATER_ICON,
      setter: setWaterStats,
    },
    {
      cards: fireCards,
      length: fireCardsLength,
      icon: FIRE_ICON,
      setter: setFireStats,
    },
    {
      cards: electricCards,
      length: electricCardsLength,
      icon: ELECTRIC_ICON,
      setter: setElectricStats,
    },
    {
      cards: fightCards,
      length: fightCardsLength,
      icon: FIGHT_ICON,
      setter: setFightStats,
    },
    {
      cards: darkCards,
      length: darkCardsLength,
      icon: DARK_ICON,
      setter: setDarkStats,
    },
    {
      cards: psychicCards,
      length: psychicCardsLength,
      icon: PSYCHIC_ICON,
      setter: setPsychicStats,
    },
    {
      cards: steelCards,
      length: steelCardsLength,
      icon: STEEL_ICON,
      setter: setSteelStats,
    },
    {
      cards: dragonCards,
      length: dragonCardsLength,
      icon: DRAGON_ICON,
      setter: setDragonStats,
    },
    {
      cards: normalCards,
      length: normalCardsLength,
      icon: NORMAL_ICON,
      setter: setNormalStats,
    },
  ];

  const DATA_RARITY = [
    {
      value: CardRarityENUM.COMMON,
      cards: commonCards,
      length: commonCardsLength,
      icon: NORMAL_RARITY,
      amount: 1,
      setter: setCommonStats
    },
    {
      value: CardRarityENUM.UNCOMMON,
      cards: unCommonCards,
      length: unCommonCardsLength,
      icon: NORMAL_RARITY,
      amount: 2,
      setter: setUnCommonStats
    },
    {
      value: CardRarityENUM.RARE,
      cards: rareCards,
      length: rareCardsLength,
      icon: NORMAL_RARITY,
      amount: 3,
      setter: setRareStats
    },
    {
      value: CardRarityENUM.DOUBLE,
      cards: doubleCards,
      length: doubleCardsLength,
      icon: NORMAL_RARITY,
      amount: 4,
      setter: setDoubleStats
    },
    {
      value: CardRarityENUM.ART,
      cards: artCards,
      length: artCardsLength,
      icon: STAR_RARITY,
      amount: 1,
      setter: setArtStats
    },
    {
      value: CardRarityENUM.SUPER,
      cards: superCards,
      length: superCardsLength,
      icon: STAR_RARITY,
      amount: 2,
      setter: setSuperStats
    },
    {
      value: CardRarityENUM.INMERSIVE,
      cards: inmersiveCards,
      length: inmersiveCardsLength,
      icon: STAR_RARITY,
      amount: 3,
      setter: setInmersiveStats
    },
    {
      value: CardRarityENUM.CROWN,
      cards: crownCards,
      length: crownCardsLength,
      icon: CROWN_RARITY,
      amount: 1,
      setter: setCrownStats
    },
  ];

  const selectLanguage = useCallback((value: CardLanguageENUM, sound = true) => {
    setLangCollection(value);

    if (sound) {
      SoundService.play('POP_PICK');
    }

    const collectionCards = new Set(
      Array.from(state.settingsState.collection
        .filter(coll => coll.amount[value] > 0).map(coll => coll.id))
    );

    dispatch({type: 'SET_COLLECTION_LANGUAGE', value});
    setData(collectionCards);
    setElementData(collectionCards);
    setRarityData(collectionCards);
    goUp();
  }, []);

  useEffect(() => {
    getMostMissingPacks();
  }, [
    charizardStats,
    mewtwoStats,
    pikachuStats,
    mewStats,
    dialgaStats,
    palkiaStats,
    arceusStats,
    promoStats,
  ]);

  const setData = useCallback((collectionCards: Set<number>) => {
    DATA.forEach(data => {
      const missing = data.cards.filter(id => !collectionCards.has(id)).length;
      const totalMissing = ((missing / data.length) * 100).toFixed(1);
      const totalOwned = Math.abs(data.length - missing);
      const crownCards = data.crown?.filter(id => collectionCards.has(id)).length || 0;
      const artCards = data.art?.filter(id => collectionCards.has(id)).length || 0;
  
      data.setter({
        name: data?.name,
        missing,
        perct_missing: totalMissing,
        owned: totalOwned,
        length: data.length,
        label: data.label || '',
        emblem: data.emblem,
        crown: crownCards,
        art: artCards,
        perct_owned: (100 - Number(totalMissing)).toFixed(1)
      });
    });
  }, []);

  const setElementData = useCallback((collectionCards: Set<number>) => {
    DATA_ELEMENTS.forEach(data => {
      const owned = data.cards.filter(card => collectionCards.has(card.id)).length || 0;
      data.setter({owned, length: data.length, icon: data.icon});
    });

  }, []);

  const setRarityData = useCallback((collectionCards: Set<number>) => {
    DATA_RARITY.forEach(data => {
      const owned = data.cards.filter(card => collectionCards.has(card.id)).length || 0;
      data.setter({
        owned, 
        length: data.length, 
        icon: data.icon,
        amount: data.amount,
        value: data.value
      });
    });

  }, []);

  function getMostMissingPacks(): void {
    const missing = allStats.filter(stat => stat?.name !== 'PROMO')
                            .sort((a, b) => Number(b?.perct_missing) - Number(a?.perct_missing))
                            .slice(0, 4);

    if (missing.every(k => k?.missing === 0)) {
      setMissingPacks([]);
      return;
    }
    setMissingPacks(missing as CollectionStat[]);
  }

  function goUp(): void {
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  function onClose(value: ExpansionEmblem): void {
    setExpansionVisible(false);
    setCurrentExpansion(value);
  }

  const memoizedExpansion = useMemo(() => {
    return <SelectExpansionMenu isVisible={expansionVisible} 
                                animatedStyle={{}} 
                                onClose={onClose}
                                current={currentExpansion}/>
  }, [expansionVisible, currentExpansion]);

  const memoizedListMenu = useMemo(() => {
    return <ListMenu isVisible={listMenuVisible} 
                                animatedStyle={{}} 
                                onClose={() => setListMenuVisible(false)}
                                stats={allStats as CollectionStat[]}/>
  }, [listMenuVisible, allStats]);

  function openExpansion(): void {
    SoundService.play('AUDIO_MENU_OPEN');
    setExpansionVisible(true);
  }

  function openListMenu(): void {
    SoundService.play('AUDIO_MENU_OPEN');
    setListMenuVisible(true);
  }

  return (
    <Provider>
      <SharedScreen title={'stats'} styles={{paddingInline: 16, marginTop: 0}}>
        <ThemedView style={[settingsStyles.container, {marginBottom: 6, padding: 0, borderRadius: 12}]}>
          <ThemedView style={[settingsStyles.row, {width: '100%', gap: 0}]}>
            {
              CollectionLanguageList.map((item, i) => {
                return (
                  <TouchableOpacity onPress={() => selectLanguage(item)} key={i.toString()}>
                    <ThemedText style={[
                      collectionStatsStyles.lang,
                      i === 0 && {paddingLeft: 12, borderTopLeftRadius: 12, borderBottomLeftRadius: 12},
                      i === CollectionLanguageList.length - 1 && {paddingRight: 12, borderTopRightRadius: 12, borderBottomRightRadius: 12},
                      langCollection === item && {backgroundColor: Colors.light.icon, color: 'white'}
                      ]}>{COLLECTION_LANGUAGE_MAP[item]}</ThemedText>
                  </TouchableOpacity>
                )
              })
            }
          </ThemedView>
        </ThemedView>
        
        {
          mainStats && <CollectionStatsItem stat={mainStats} round={roundPercentage}></CollectionStatsItem>
        }

        <ThemedView style={[settingsStyles.container, {height: 48, padding: 10, borderRadius: 12, marginBottom: 18}]}>
          <TouchableOpacity onPress={openExpansion} style={{flex: 1, justifyContent: 'center'}} >
            <ThemedView style={settingsStyles.row}>
              {
                currentExpansion && currentExpansion.label !== undefined ? 
                <ThemedText style={{marginLeft: 6, fontWeight: 'semibold'}}>{i18n.t(currentExpansion.label.toLowerCase())}</ThemedText> :
                  <ThemedText style={{marginLeft: 6}}>{i18n.t('select_expansion')}</ThemedText>
              }
              <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                <MaterialIcons name={'chevron-right'} 
                              style={[
                                {fontSize: 28, left: 8, color: Colors.light.icon, position: 'absolute'}, 
                                Platform.OS !== 'web' && {top: -14}
                              ]}/>
              </ThemedView>
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>

        {
          currentExpansion === undefined &&
          <>
            <StatsGrid allRarity={allRarityStats as any} allElements={allElementStats as any}></StatsGrid>
            <ThemedView style={{flexDirection: 'row', justifyContent: 'center', gap: 24, width: '100%'}}>
                {
                  missingPacks.map((missed, i) => {
                    return (
                      <ThemedView key={i.toString()}>
                        <ThemedView style={{boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.3)'}}>
                          <Image source={(EXPANSION_PACK_MAP as any)[missed?.label]} style={{width: 68, height: 131}}/>
                        </ThemedView>
                        {
                          missed && missed.perct_owned &&
                            <ProgressBar percentage={missed.perct_owned}></ProgressBar>
                        }
                        {
                          missed && missed.perct_owned &&
                          <ThemedText style={{textAlign: 'center', fontSize: 12}}>{roundPercentage(missed.perct_owned)}</ThemedText>
                        }
                      </ThemedView>
                    )
                  })
                }
            </ThemedView>
          </>
        }

        {
          currentExpansion !== undefined &&
          <ExpansionGridStats allCards={allCards} 
                              language={langCollection} 
                              collection={state.settingsState.collection} 
                              currentExpansion={currentExpansion?.value}
                              allStats={allStats as CollectionStat[]}>
          </ExpansionGridStats>
        }
         
        <TouchableOpacity onPress={openListMenu} style={cardStyles.container}>
          <ThemedView>
            <MaterialIcons name={"list"} 
                            color={Colors.light.icon} 
                            style={{fontSize: 35, left: -1}}> 
            </MaterialIcons>
          </ThemedView>
        </TouchableOpacity>
      </SharedScreen>
      <Portal>{expansionVisible && memoizedExpansion}</Portal>
      <Portal>{listMenuVisible && memoizedListMenu}</Portal>
    </Provider>
  )
}

export const collectionStatsStyles = StyleSheet.create({
 lang: {
  fontWeight: 'bold',
  fontSize: 12,
  paddingVertical: 12,
  paddingHorizontal: 7,
  textAlign: 'center',
  borderRadius: 2
 },
 chip: {
  backgroundColor: 'white',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  paddingVertical: 4,
  paddingHorizontal: 6,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 6,
 },
 chipText: {
  fontSize: 12
 },
 energy: {
  width: 16, 
  height: 16, 
  marginRight: 8
 }
});

