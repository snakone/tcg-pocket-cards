import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from 'expo-image';
import { useRouter } from "expo-router";

import { CardExpansionENUM, CardLanguageENUM, CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { EXPANSION } from "@/shared/definitions/enums/packs.enums";
import { CollectionElementStat, CollectionRarityStat, CollectionStat, UserCollection } from "@/shared/definitions/interfaces/global.interfaces";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { StatsGrid } from "./StatsGrid";

import { 
  GRASS_ICON, 
  WATER_ICON, 
  FIRE_ICON, 
  ELECTRIC_ICON, 
  FIGHT_ICON, 
  DARK_ICON, 
  PSYCHIC_ICON, 
  STEEL_ICON, 
  DRAGON_ICON, 
  NORMAL_ICON, 
  NORMAL_RARITY, 
  STAR_RARITY, CROWN_RARITY,
  BACKWARD_CARD,
  RAINBOW_RARITY
} from "@/shared/definitions/sentences/path.sentences";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { getImageLanguage116x162, roundPercentage } from "@/shared/definitions/utils/functions";
import { useI18n } from "@/core/providers/LanguageProvider";
import { STATS_EXPANSION_MAP } from "@/shared/definitions/utils/constants";
import { TabsMenuStyles } from "@/shared/styles/component.styles";
import { AppContext } from "@/app/_layout";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { LanguageType } from "@/shared/definitions/types/global.types";
import SoundService from "@/core/services/sounds.service";

interface CollectionGridStats {
  currentExpansion: EXPANSION;
  allCards: {[key: string]: Card[]},
  language: CardLanguageENUM,
  collection: UserCollection[];
  allStats: CollectionStat[];
}

export const ExpansionGridStats = ({currentExpansion, allCards, language, collection, allStats}: CollectionGridStats) => {
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const router = useRouter();

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
  const [rainbowStats, setRainbowStats] = useState<CollectionRarityStat>();
  const [doubleRainbowStats, setDoubleRainbowStats] = useState<CollectionRarityStat>();
  const [crownStats, setCrownStats] = useState<CollectionRarityStat>();

  const [currentStat, setCurrentStat] = useState<CollectionStat>();
  const [missingCards, setMissingCards] = useState<number[]>();

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
    rainbowStats,
    doubleRainbowStats,
    crownStats
  ];

  const DATA_ELEMENTS = [
    {
      cards: allCards.grass,
      icon: GRASS_ICON,
      setter: setGrassStats,
    },
    {
      cards: allCards.water,
      icon: WATER_ICON,
      setter: setWaterStats,
    },
    {
      cards: allCards.fire,
      icon: FIRE_ICON,
      setter: setFireStats,
    },
    {
      cards: allCards.electric,
      icon: ELECTRIC_ICON,
      setter: setElectricStats,
    },
    {
      cards: allCards.fight,
      icon: FIGHT_ICON,
      setter: setFightStats,
    },
    {
      cards: allCards.dark,
      icon: DARK_ICON,
      setter: setDarkStats,
    },
    {
      cards: allCards.psychic,
      icon: PSYCHIC_ICON,
      setter: setPsychicStats,
    },
    {
      cards: allCards.steel,
      icon: STEEL_ICON,
      setter: setSteelStats,
    },
    {
      cards: allCards.dragon,
      icon: DRAGON_ICON,
      setter: setDragonStats,
    },
    {
      cards: allCards.normal,
      icon: NORMAL_ICON,
      setter: setNormalStats,
    },
  ];

  const DATA_RARITY = [
    {
      value: CardRarityENUM.COMMON,
      cards: allCards.common,
      icon: NORMAL_RARITY,
      amount: 1,
      setter: setCommonStats
    },
    {
      value: CardRarityENUM.UNCOMMON,
      cards: allCards.uncommon,
      icon: NORMAL_RARITY,
      amount: 2,
      setter: setUnCommonStats
    },
    {
      value: CardRarityENUM.RARE,
      cards: allCards.rare,
      icon: NORMAL_RARITY,
      amount: 3,
      setter: setRareStats
    },
    {
      value: CardRarityENUM.DOUBLE,
      cards: allCards.double,
      icon: NORMAL_RARITY,
      amount: 4,
      setter: setDoubleStats
    },
    {
      value: CardRarityENUM.ART,
      cards: allCards.art,
      icon: STAR_RARITY,
      amount: 1,
      setter: setArtStats
    },
    {
      value: CardRarityENUM.SUPER,
      cards: allCards.super,
      icon: STAR_RARITY,
      amount: 2,
      setter: setSuperStats
    },
    {
      value: CardRarityENUM.INMERSIVE,
      cards: allCards.inmersive,
      icon: STAR_RARITY,
      amount: 3,
      setter: setInmersiveStats
    },
    {
      value: CardRarityENUM.RAINBOW,
      cards: allCards.rainbow,
      icon: RAINBOW_RARITY,
      amount: 1,
      setter: setRainbowStats
    },
    {
      value: CardRarityENUM.DOUBLE_RAINBOW,
      cards: allCards.doubleRainbow,
      icon: RAINBOW_RARITY,
      amount: 2,
      setter: setDoubleRainbowStats
    },
    {
      value: CardRarityENUM.CROWN,
      cards: allCards.crown,
      icon: CROWN_RARITY,
      amount: 1,
      setter: setCrownStats
    },
  ];

  useEffect(() => {
    const collectionCards = new Set(
      Array.from(collection
        .filter(coll => coll.amount[language] > 0).map(coll => coll.id))
    );

    setCurrentStat(allStats[STATS_EXPANSION_MAP[currentExpansion]])
    setElementData(collectionCards, currentExpansion);
    setRarityData(collectionCards, currentExpansion);
    getMissingCards(collectionCards, currentExpansion)
  }, [language, currentExpansion]);

  const setElementData = useCallback((collectionCards: Set<number>, expansion: EXPANSION) => {
    DATA_ELEMENTS.forEach(data => {
      const cards = Number(expansion) === 99 ? 
                    data.cards.filter(card => card.expansion === CardExpansionENUM.PROMO_A) : 
                     data.cards.filter(card => card.found?.includes(expansion));
      const owned = cards.filter(card => collectionCards.has(card.id)).length || 0;
      data.setter({owned, length: cards.length, icon: data.icon});
    });
  }, []);

  const setRarityData = useCallback((collectionCards: Set<number>, expansion: EXPANSION) => {
    if (Number(expansion) === 99) { return; }
    DATA_RARITY.forEach(data => {
      const cards = data.cards.filter(card => card.found?.includes(expansion));
      const owned = cards.filter(card => collectionCards.has(card.id)).length || 0;
      data.setter({
        owned, 
        length: cards.length, 
        icon: data.icon,
        amount: data.amount,
        value: data.value
      });
    });

  }, []);

  const getMissingCards = useCallback((collectionCards: Set<number>, expansion: EXPANSION) => {
    const cards = state.cardState.cards.filter(card => !collectionCards.has(card.id));
    const missing = Number(expansion) === 99 ? 
                     cards.filter(card => card.expansion === CardExpansionENUM.PROMO_A) :
                      cards.filter(card => card.found?.includes(expansion))
    setMissingCards(missing.sort((b, a) => a.rarity - b.rarity).slice(0, 4).map(card => card.id));
  }, []);

  function goToDetailScreen(id: number): void {
    SoundService.play('PICK_CARD_SOUND');
    dispatch({type: 'SET_NAVIGATING', value: true});
    router.push(`/screens/detail?id=${encodeURIComponent(id)}`);
  }

  const renderItem = useCallback(({item}: {item: CollectionStat}) => {
    const isPromo = item.label === 'expansion_promo_a';
    return (
      <>
        {
          item && 
          <ThemedView style={{width: '100%', marginBottom: 2}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', }}>
              {
                item.emblem && 
                <Image source={item.emblem} 
                  style={[
                  {backgroundColor: 'transparent', height: 50, width: 50, marginRight: 13, top: 2},
                  isPromo && { width: 44, height: 44, marginRight: 19, left: 2}
                ]}/>
              }

              <ThemedView style={{gap: 4}}>
                {item.name && <ThemedText style={{fontWeight: 'bold'}}>{i18n.t(item.label)}</ThemedText>}
                <ThemedView style={{flexDirection: 'row', gap: 8}}>
                  <ThemedView style={styles.chip}>
                    <ThemedText style={styles.chipText}>{item.owned}/{item.length}</ThemedText>
                  </ThemedView>
                  {
                    !isPromo && 
                    <ThemedView style={styles.chip}>
                      <Image source={CROWN_RARITY} style={{width: 20, height: 13, marginRight: 6}}/>
                      <ThemedText style={styles.chipText}>{item.crown}</ThemedText>
                    </ThemedView>
                  }
                  {
                    !isPromo &&
                    <ThemedView style={styles.chip}>
                      <Image source={STAR_RARITY} style={{width: 16, height: 15, marginRight: 6}}/>
                      <ThemedText style={styles.chipText}>{item.art}</ThemedText>
                    </ThemedView>
                  }
                  <ThemedText style={[styles.chipText, {left: 2, top: 4}]}>{roundPercentage(item.perct_owned)}</ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        }
      </>
    )
  }, []);
    
  return (
    <>
      <ThemedView style={{alignItems: 'center', marginTop: 0, width: '100%', top: -4}}>
        {
          currentStat !== undefined &&
          <FlatList data={[currentStat]}
                    numColumns={1}
                    contentContainerStyle={{width: '100%'}}
                    renderItem={renderItem}
                    style={{width: '100%'}}
                    keyExtractor={(item, index) => index + 1 + ''}
                    showsVerticalScrollIndicator={false}/>
        }
      </ThemedView>

      <View style={[TabsMenuStyles.separator, {height: 1, marginTop: 4, marginBottom: 20, width: '100%'}]}></View>

      <StatsGrid allRarity={allRarityStats as any} 
                 allElements={allElementStats as any}
                 expansion={currentExpansion}>
      </StatsGrid>

      <ThemedView style={{flexDirection: 'row', justifyContent: 'center', gap: 24, width: '100%', marginTop: 16}}>
          {
            missingCards && [0, 1, 2, 3].map((_, i) => {
              return (
                <ThemedView key={i.toString()}>
                  <TouchableOpacity onPress={() => goToDetailScreen(missingCards[i])}
                                    style={{boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.3)'}}
                                    disabled={!missingCards[i] || state.cardState.navigating}>
                    <Image style={{width: 71, height: 99}}
                              source={missingCards[i] ? getImageLanguage116x162(lang, missingCards[i]) : BACKWARD_CARD}/>
                  </TouchableOpacity>
                  {
                    missingCards[i] &&
                     <ThemedText style={{textAlign: 'center', fontSize: 12, marginTop: 10}}>0/1</ThemedText>
                  }
                </ThemedView>
              )
            })
          }
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
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