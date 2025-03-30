import { Platform, StyleSheet, View } from "react-native";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import ViewShot from "react-native-view-shot";

import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { CardExpansionENUM, CardRarityENUM, CardSpecialConditionENUM, CardStageENUM } from "@/shared/definitions/enums/card.enums";
import { sortCards } from "@/shared/definitions/utils/functions";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { EXPANSION } from "@/shared/definitions/enums/packs.enums";
import { PACK_PER_EXPANSION_MAP } from "@/shared/definitions/utils/constants";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";

import ShareService from "@/core/services/share.service";
import { GraphicSummary } from "./components/GraphicSummary";
import { GraphicExpansion } from "./components/GraphicExpansion";
import { GraphicGrades } from "./components/GraphicGrades";
import { GraphicTypes } from "./components/GraphicTypes";
import { GraphicMiscellania } from "./components/GraphicMiscellania";
import { GraphicWeak } from "./components/GraphicWeak";
import { GraphicTop } from "./components/GraphicTop";
import { GraphicConditions } from "./components/GraphicConditions";
import { GraphicHeader } from "./components/GraphicHeader";
import { GraphicFooter } from "./components/GraphicFooter";

interface GraphicCollageProps {
  showExpansion: boolean,
  showGrades: boolean,
  showTypes: boolean,
  showMiscellania: boolean,
  showWeak: boolean,
  showTop: boolean,
  showConditions: boolean,
  quality: number,
  onFinish: () => void
}

export function GraphicCollage({
  showExpansion,
  showGrades,
  showTypes,
  showMiscellania,
  showWeak,
  showTop,
  showConditions,
  quality,
  onFinish
}: GraphicCollageProps) {
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;
  const [lang] = useState<LanguageType>(state.settingsState.language);
  const shareService = useMemo(() => new ShareService(), []);

  const summaryRef = useRef<any>(null);
  const expansionRef = useRef<any>(null);
  const expansionRefSecond = useRef<any>(null);
  const expansionRefThird = useRef<any>(null);
  const gradesRef = useRef<any>(null);
  const typesRef = useRef<any>(null);
  const miscellaniaRef = useRef<any>(null);
  const weakRef = useRef<any>(null);
  const topRef = useRef<any>(null);
  const conditionsRef = useRef<any>(null);

  const [innerShowExpansion, setInnerShowExp] = useState(false);
  const [innerShowGrades, setInnerShowGrades] = useState(false);
  const [innerShowTypes, setInnerShowTypes] = useState(false);
  const [innerShowMiscellania, setInnerShowMisc] = useState(false);
  const [innerShowWeak, setInnerShowWeak] = useState(false);
  const [innerShowTop, setInnerShowTop] = useState(false);
  const [innerShowCondition, setInnerShowCond] = useState(false);
  
  const references = [
    { item: summaryRef, label: i18n.t('summary') },
    { item: expansionRef, label: i18n.t('expansions') + '-1', func: (_: boolean) => setInnerShowExp(_), value: showExpansion },
    { item: expansionRefSecond, label: i18n.t('expansions') + '-2', func: (_: boolean) => setInnerShowExp(_), value: showExpansion },
    { item: expansionRefThird, label: i18n.t('expansions') + '-3', func: (_: boolean) => setInnerShowExp(_), value: showExpansion },
    { item: gradesRef, label: i18n.t('grade'), func: (_: boolean) => setInnerShowGrades(_), value: showGrades },
    { item: typesRef, label: i18n.t('types'), func: (_: boolean) => setInnerShowTypes(_), value: showTypes },
    { item: miscellaniaRef, label: i18n.t('miscellania'), func: (_: boolean) => setInnerShowMisc(_), value: showMiscellania },
    { item: weakRef, label: i18n.t('weak'), func: (_: boolean) => setInnerShowWeak(_), value: showWeak },
    { item: topRef, label: i18n.t('top_20'), func: (_: boolean) => setInnerShowTop(_), value: showTop },
    { item: conditionsRef, label: i18n.t('conditions'), func: (_: boolean) => setInnerShowCond(_), value: showConditions },
  ];

  useEffect(() => {
    setTimeout(() => makeAllPictures(), 3000);
  }, []);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  async function makeAllPictures(): Promise<void> {
    const WAIT = Platform.OS === 'android' ? 9000 : 2500;
    for (const ref of references) {
      if (!ref) { continue; }

      if (ref && ref.func && ref.value) {
        ref.func(true);
        await delay(WAIT);
      }

      if (ref.item?.current) {
        await shareService.makeInfoGraphic(ref.item, 'infographic-tcg-pocket-cards-' + ref.label.toLowerCase(), quality);
      }

      if (ref && ref.func && ref.value) {
        ref.func(false);
        await delay(WAIT / 2);
      }   
    }
    onFinish();
  }

  const filterAndSort = (filterFn: (card: Card) => boolean) => {
    const filtered = state.cardState.cards.filter(filterFn).sort((a, b) => a.order - b.order);
    return { data: filtered, length: filtered.length };
  };
  
  const getCards = useCallback((pack: EXPANSION) => 
    filterAndSort(card => card.found && card.found.includes(pack) || false)
  , [state.cardState.cards]);
  
  const getWithAbility = useCallback(() => 
    filterAndSort(card => Boolean(card.ability?.name))
  , [state.cardState.cards]);
  
  const getStage = useCallback((stage: CardStageENUM) => {
    const result = filterAndSort(card => card.stage === stage);
    const filtered = result.data.filter((card, index, self) => 
      card.stage !== CardStageENUM.FOSSIL || 
      index === self.findIndex(t => t.name.en === card.name.en)
    );
    return { data: filtered, length: filtered.length };
  }, [state.cardState.cards]);

  const getCondition = useCallback((condition: CardSpecialConditionENUM) => 
    filterAndSort(card => card.condition?.some(c => c === condition))
  , [state.cardState.cards]);
  
  const getCardByType = useCallback((type: PokemonTypeENUM) => 
    filterAndSort(card => card.element === type)
  , [state.cardState.cards]);
  
  const getCardWeak = useCallback((type: PokemonTypeENUM) => 
    filterAndSort(card => card.weak === type)
  , [state.cardState.cards]);
  
  const getSharedCards = useCallback((expansion: CardExpansionENUM) => {
    const amount = PACK_PER_EXPANSION_MAP[expansion];
    return filterAndSort(card => card.expansion === expansion && card.found?.length === amount);
  }, [state.cardState.cards]);
  
  const getCardsExpansion = useCallback((expansion: CardExpansionENUM) => 
    filterAndSort(card => card.expansion === expansion)
  , [state.cardState.cards]);
  
  const getCardRarity = useCallback((rarity: CardRarityENUM) => 
    filterAndSort(card => card.rarity === rarity)
  , [state.cardState.cards]);

  const getTop20 = useCallback((prop: string, order = 'desc') => {
    const sortItem: SortItem = {
      active: true,
      label: prop,
      order: order as 'desc' | 'asc',
      id: 1,
      icon: prop
    }

    const sorted = sortCards(prop, state.cardState.cards, sortItem)
                    .filter((card, index, self) => prop === 'rarity' || 
                      (index === self.findIndex((t) => t.name.en === card.name.en)));
    
    sorted.length = 20;
    return sorted;
  }, [state.cardState.cards]);

  const getRetreatTop20 = useCallback(() => {
    const sortItem: SortItem = {
      active: true,
      label: 'retreat',
      order: 'asc',
      id: 1,
      icon: 'retreat'
    }

    const cards = [...state.cardState.cards];

    const filtered = cards.sort((b, a) => a?.order - b?.order)
                    .filter((card, index, self) => index === self.findIndex((t) => t.name.en === card.name.en));

    const sorted = sortCards('retreat', filtered, sortItem)
                  .filter(card => card.pokedex !== -1)
    sorted.length = 20;
    return sorted;
  }, [state.cardState.cards]);

  const getAttackTop20 = useCallback(() => {
    const cards = [...state.cardState.cards];
    return cards
      .sort((a, b) => {
        const maxDamageA = a.attacks !== undefined ? Math.max(...a.attacks.map(attack => attack.damage)) : -1;
        const maxDamageB = b.attacks !== undefined ? Math.max(...b.attacks.map(attack => attack.damage)) : -1;
        return maxDamageB - maxDamageA;
      }).filter((card, index, self) => index === self.findIndex((t) => t.name.en === card.name.en))
      .slice(0, 20);
  }, [state.cardState.cards]);

  const { data: pikachuCards, length: pikachuCardsLength } = getCards(EXPANSION.PIKACHU);
  const { data: mewtwoCards, length: mewtwoCardsLength } = getCards(EXPANSION.MEWTWO);
  const { data: charizardCards, length: charizardCardsLength } = getCards(EXPANSION.CHARIZARD);
  const { data: islandCards } = getCards(EXPANSION.MEW);
  const { data: dialgaCards, length: dialgaCardsLength } = getCards(EXPANSION.DIALGA);
  const { data: palkiaCards, length: palkiaCardsLength } = getCards(EXPANSION.PALKIA);
  const { data: premiumCards, length: premiumCardsLength } = getCards(EXPANSION.PREMIUM);
  const { data: promo1Cards } = getCards(EXPANSION.PROMO_A1);
  const { data: promo2Cards } = getCards(EXPANSION.PROMO_A2);
  const { data: promo3Cards } = getCards(EXPANSION.PROMO_A3);
  const { data: promo4Cards } = getCards(EXPANSION.PROMO_A4);
  const { data: promo5Cards } = getCards(EXPANSION.PROMO_A5);
  const { data: promo6Cards } = getCards(EXPANSION.PROMO_A6);
  const { data: specialCards, length: specialCardsLength } = getCards(EXPANSION.SPECIAL_MISSION);
  const { data: triumphCards } = getCards(EXPANSION.ARCEUS);
  const { data: shinyCards, length: shinyCardsLength } = getCards(EXPANSION.SHINY);

  const { length: geneticPackCardsLength } = getCardsExpansion(CardExpansionENUM.GENETIC_APEX);
  const { length: islandPackCardsLength } = getCardsExpansion(CardExpansionENUM.MYTHICAL_ISLAND);
  const { length: spacePackCardsLength } = getCardsExpansion(CardExpansionENUM.SPACE_TIME_SMACKDOWN);
  const { length: triumphPackCardsLength } = getCardsExpansion(CardExpansionENUM.TRIUMPH_LIGHT);
  const { length: shiningCardsLength } = getCardsExpansion(CardExpansionENUM.SHINING_REVELRY);
  const { data: promoAPackCards, length: promoAPackCardsLength } = getCardsExpansion(CardExpansionENUM.PROMO_A);

  const { data: rareCards, length: rareCardsLength } = getCardRarity(CardRarityENUM.RARE);
  const { data: doubleCards, length: doubleCardsLength } = getCardRarity(CardRarityENUM.DOUBLE);
  const { data: artCards, length: artCardsLength } = getCardRarity(CardRarityENUM.ART);
  const { data: superCards, length: superCardsLength } = getCardRarity(CardRarityENUM.SUPER);
  const { data: inmersiveCards, length: inmersiveCardsLength } = getCardRarity(CardRarityENUM.INMERSIVE);
  const { data: rainbowCards, length: rainbowCardsLength } = getCardRarity(CardRarityENUM.SHINY);
  const { data: doubleRainbowCards, length: doubleRainbowCardsLength } = getCardRarity(CardRarityENUM.DOUBLE_SHINY);
  const { data: crownCards, length: crownCardsLength } = getCardRarity(CardRarityENUM.CROWN);

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

  const { data: withAbilityCards, length: withAbilityCardsLength } = getWithAbility();

  const { data: itemCards, length: itemCardsLength } = getStage(CardStageENUM.ITEM);
  const { data: fossilCards, length: fossilCardsLength } = getStage(CardStageENUM.FOSSIL);
  const { data: supporterCards, length: supporterCardsLength } = getStage(CardStageENUM.SUPPORTER);
  const { data: toolCards, length: toolCardsLength } = getStage(CardStageENUM.TOOL);

  const { data: weakGrassCards, length: weakGrassCardsLength } = getCardWeak(PokemonTypeENUM.GRASS);
  const { data: weakDarkCards, length: weakDarkCardsLength } = getCardWeak(PokemonTypeENUM.DARK);
  const { data: weakElectricCards, length: weakElectricCardsLength } = getCardWeak(PokemonTypeENUM.ELECTRIC);
  const { data: weakFightCards, length: weakFightCardsLength } = getCardWeak(PokemonTypeENUM.FIGHT);
  const { data: weakFireCards, length: weakFireCardsLength } = getCardWeak(PokemonTypeENUM.FIRE);
  const { data: weakPsychicCards, length: weakPsychicCardsLength } = getCardWeak(PokemonTypeENUM.PSYCHIC);
  const { data: weakSteelCards, length: weakSteelCardsLength } = getCardWeak(PokemonTypeENUM.STEEL);
  const { data: weakWaterCards, length: weakWaterCardsLength } = getCardWeak(PokemonTypeENUM.WATER);

  const { data: sharedGenetic, length: sharedGeneticLength } = getSharedCards(CardExpansionENUM.GENETIC_APEX);
  const { data: sharedSmack, length: sharedSmackLength } = getSharedCards(CardExpansionENUM.SPACE_TIME_SMACKDOWN);

  const { data: benchCondition, length: benchConditionLength } = getCondition(CardSpecialConditionENUM.ATTACK_BENCH);
  const { data: addCondition, length: addConditionLength } = getCondition(CardSpecialConditionENUM.ADD_ENERGY);
  const { data: burnedCondition, length: burnedConditionLength } = getCondition(CardSpecialConditionENUM.BURNED);
  const { data: callCondition, length: callConditionLength } = getCondition(CardSpecialConditionENUM.CALL_CARDS);
  const { data: confusionCondition, length: confusionConditionLength } = getCondition(CardSpecialConditionENUM.CONFUSION);
  const { data: cornerCondition, length: cornerConditionLength } = getCondition(CardSpecialConditionENUM.CORNER);
  const { data: discardCondition, length: discardConditionLength } = getCondition(CardSpecialConditionENUM.DISCARD);
  const { data: extraCondition, length: extraConditionLength } = getCondition(CardSpecialConditionENUM.EXTRA_DAMAGE);
  const { data: flipCondition, length: flipConditionLength } = getCondition(CardSpecialConditionENUM.FLIP_COIN);
  const { data: healCondition, length: healConditionLength } = getCondition(CardSpecialConditionENUM.HEAL);
  const { data: inactiveCondition, length: inactiveConditionLength } = getCondition(CardSpecialConditionENUM.INACTIVE);
  const { data: nothingCondition, length: nothingConditionLength } = getCondition(CardSpecialConditionENUM.NOTHING);
  const { data: paralizeCondition, length: paralizeConditionLength } = getCondition(CardSpecialConditionENUM.PARALYZE);
  const { data: poisonCondition, length: poisonConditionLength } = getCondition(CardSpecialConditionENUM.POISON);
  const { data: recoilCondition, length: recoilConditionLength } = getCondition(CardSpecialConditionENUM.RECOIL);
  const { data: resistCondition, length: resistConditionLength } = getCondition(CardSpecialConditionENUM.RESIST);
  const { data: retireCondition, length: retireConditionLength } = getCondition(CardSpecialConditionENUM.RETIRE);
  const { data: sleepCondition, length: sleepConditionLength } = getCondition(CardSpecialConditionENUM.SLEEP);
  const { data: withdrawCondition, length: withdrawConditionLength } = getCondition(CardSpecialConditionENUM.WITHDRAW_CARD);
  const { data: arceusCondition, length: arceusConditionLength } = getCondition(CardSpecialConditionENUM.ARCEUS_LINK);
  const { data: playCardsCondition, length: playCardsConditionLength } = getCondition(CardSpecialConditionENUM.PLAY_CARDS);
  const { data: randomCondition, length: randomConditionLength } = getCondition(CardSpecialConditionENUM.RANDOM_ATTACK);
  const { data: endTurnCondition, length: endTurnConditionLength } = getCondition(CardSpecialConditionENUM.END_TURN);
  const { data: plusEXCondition, length: plusEXConditionLength } = getCondition(CardSpecialConditionENUM.PLUS_EX);

  const SUMMARY_DATA: any = {
    geneticPackCardsLength, islandPackCardsLength, spacePackCardsLength, promoAPackCardsLength,
    pikachuCardsLength, mewtwoCardsLength, charizardCardsLength, dialgaCardsLength, palkiaCardsLength, triumphPackCardsLength,
    rareCardsLength, doubleCardsLength, artCardsLength, superCardsLength, inmersiveCardsLength, crownCardsLength,
    grassCardsLength, fireCardsLength, waterCardsLength, electricCardsLength, psychicCardsLength,
    fightCardsLength, darkCardsLength, steelCardsLength, dragonCardsLength, normalCardsLength,
    withAbilityCardsLength, itemCardsLength, toolCardsLength, fossilCardsLength, supporterCardsLength,
    benchConditionLength, recoilConditionLength, extraConditionLength, resistConditionLength, healConditionLength,
    poisonConditionLength, paralizeConditionLength, sleepConditionLength, confusionConditionLength, burnedConditionLength,
    flipConditionLength, nothingConditionLength, discardConditionLength, addConditionLength, cornerConditionLength,
    withdrawConditionLength, retireConditionLength, callConditionLength, inactiveConditionLength,
    arceusConditionLength, weakGrassCardsLength, weakFireCardsLength, weakWaterCardsLength, weakElectricCardsLength,
    weakPsychicCardsLength, weakFightCardsLength, weakDarkCardsLength, weakSteelCardsLength, shiningCardsLength,
    rainbowCardsLength, doubleRainbowCardsLength
  };

  const EXPANSION_DATA: any = {
    geneticPackCardsLength, pikachuCardsLength, pikachuCards, mewtwoCardsLength, mewtwoCards,
    charizardCardsLength, charizardCards, sharedGeneticLength, sharedGenetic, islandPackCardsLength,
    islandCards, spacePackCardsLength, dialgaCardsLength, dialgaCards, palkiaCardsLength, palkiaCards,
    sharedSmackLength, sharedSmack, triumphPackCardsLength, triumphCards, promoAPackCardsLength, promoAPackCards,
    promo1Cards, promo2Cards, promo3Cards, promo4Cards, promo5Cards, promo6Cards, premiumCardsLength, 
    specialCards, premiumCards, specialCardsLength, shinyCardsLength, shinyCards
  };

  const GRADES_DATA: any = {
    rareCardsLength, rareCards, doubleCardsLength, doubleCards, artCardsLength, artCards,
    superCardsLength, superCards, inmersiveCardsLength, inmersiveCards,
    crownCardsLength, crownCards, rainbowCards, rainbowCardsLength, doubleRainbowCards, doubleRainbowCardsLength
  };

  const TYPES_DATA: any = {
    grassCardsLength, grassCards, fireCardsLength, fireCards, waterCardsLength, waterCards,
    electricCardsLength, electricCards, psychicCardsLength, psychicCards,
    fightCardsLength, fightCards, darkCardsLength, darkCards, steelCardsLength, steelCards,
    dragonCardsLength, dragonCards, normalCardsLength, normalCards
  };

  const MISCELLANIA_DATA: any = {
    withAbilityCardsLength, withAbilityCards, itemCardsLength, itemCards,
    toolCardsLength, toolCards, fossilCardsLength, fossilCards,
    supporterCardsLength, supporterCards
  };

  const WEAK_DATA: any = {
    weakGrassCardsLength, weakGrassCards, weakFireCardsLength, weakFireCards,
    weakWaterCardsLength, weakWaterCards, weakElectricCardsLength, weakElectricCards,
    weakPsychicCardsLength, weakPsychicCards, weakFightCardsLength, weakFightCards,
    weakDarkCardsLength, weakDarkCards, weakSteelCardsLength, weakSteelCards
  };

  const TOP_DATA: any = {
    rarity: getTop20('rarity'),
    retreat: getRetreatTop20(),
    health: getTop20('health'),
    height: getTop20('height'),
    weight: getTop20('weight'),
    attack: getAttackTop20()
  };

  const CONDITIONS_DATA: any = {
    benchConditionLength, benchCondition, recoilConditionLength, recoilCondition, extraConditionLength,
    extraCondition, resistConditionLength, resistCondition, healConditionLength, healCondition,
    poisonConditionLength, poisonCondition, paralizeConditionLength, paralizeCondition,
    sleepConditionLength, sleepCondition, confusionConditionLength, confusionCondition,
    burnedConditionLength, burnedCondition, flipConditionLength, flipCondition,
    nothingConditionLength, nothingCondition, discardConditionLength, discardCondition,
    addConditionLength, addCondition, cornerConditionLength, cornerCondition,
    withdrawConditionLength, withdrawCondition, retireConditionLength, retireCondition,
    callConditionLength, callCondition, inactiveConditionLength, inactiveCondition,
    playCardsConditionLength, playCardsCondition, randomConditionLength, randomCondition,
    arceusConditionLength, arceusCondition, endTurnConditionLength, endTurnCondition,
    plusEXCondition, plusEXConditionLength
  };

  return (
    <ThemedView>
      {
        Platform.OS === 'web' ? 
          <View ref={summaryRef} style={styles.content}>
            <GraphicHeader styles={styles} child={false}></GraphicHeader>
            <GraphicSummary data={SUMMARY_DATA} styles={styles}></GraphicSummary>
            <GraphicFooter styles={styles} child={false}></GraphicFooter>
          </View> : 
          <ViewShot ref={summaryRef} style={[styles.content]}>
            <GraphicHeader styles={styles} child={false}></GraphicHeader>
            <GraphicSummary data={SUMMARY_DATA} styles={styles}></GraphicSummary>
            <GraphicFooter styles={styles} child={false}></GraphicFooter>
          </ViewShot>
      }
      
      {
        innerShowExpansion && showExpansion &&
        <>
          {
            Platform.OS === 'web' ? 
            <>
              <View ref={expansionRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicExpansion data={EXPANSION_DATA} language={lang} styles={styles} startIndex={0} endIndex={2}></GraphicExpansion>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>
              <View ref={expansionRefSecond} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicExpansion data={EXPANSION_DATA} language={lang} styles={styles} startIndex={3} endIndex={5}></GraphicExpansion>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>
              <View ref={expansionRefThird} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicExpansion data={EXPANSION_DATA} language={lang} styles={styles} startIndex={6} endIndex={7} showSeries={true}></GraphicExpansion>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>           
            </> :
            <>
              <ViewShot ref={expansionRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicExpansion data={EXPANSION_DATA} language={lang} styles={styles} startIndex={0} endIndex={2}></GraphicExpansion>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>
              <ViewShot ref={expansionRefSecond} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicExpansion data={EXPANSION_DATA} language={lang} styles={styles} startIndex={3} endIndex={5}></GraphicExpansion>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>
              <ViewShot ref={expansionRefThird} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicExpansion data={EXPANSION_DATA} language={lang} styles={styles} startIndex={6} endIndex={7} showSeries={true}></GraphicExpansion>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>  
            </>
          }
        </>
      }

      {
        innerShowGrades && showGrades &&
        <>
          {
            Platform.OS === 'web' ?
              <View ref={gradesRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicGrades data={GRADES_DATA} language={lang} styles={styles}></GraphicGrades>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View> : 
              <ViewShot ref={gradesRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicGrades data={GRADES_DATA} language={lang} styles={styles}></GraphicGrades>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>
          }
        </>
      }

      {
        innerShowTypes && showTypes &&
        <>
          {
            Platform.OS === 'web' ?
              <View ref={typesRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicTypes data={TYPES_DATA} language={lang} styles={styles}></GraphicTypes>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>
              : 
              <ViewShot ref={typesRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicTypes data={TYPES_DATA} language={lang} styles={styles}></GraphicTypes>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>
          }
        </>
      }

      {
        innerShowMiscellania && showMiscellania &&
        <>
          { 
            Platform.OS === 'web' ?     
              <View ref={miscellaniaRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicMiscellania data={MISCELLANIA_DATA} language={lang} styles={styles}></GraphicMiscellania>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>
              :
              <ViewShot ref={miscellaniaRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicMiscellania data={MISCELLANIA_DATA} language={lang} styles={styles}></GraphicMiscellania>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>          
          }
        </>
      }

      {
        innerShowWeak && showWeak &&
        <>
          {
            Platform.OS === 'web' ?
              <View ref={weakRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicWeak data={WEAK_DATA} language={lang} styles={styles}></GraphicWeak>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>
              :
              <ViewShot ref={weakRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicWeak data={WEAK_DATA} language={lang} styles={styles}></GraphicWeak>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>
          }
        </>
      }

      {
        innerShowTop && showTop &&
        <>
          {
            Platform.OS === 'web' ?
            <View ref={topRef} style={styles.content}>
              <GraphicHeader styles={styles}></GraphicHeader>
              <GraphicTop data={TOP_DATA} language={lang} styles={styles}></GraphicTop>
              <GraphicFooter styles={styles}></GraphicFooter>
            </View> :
            <ViewShot ref={topRef} style={styles.content}>
              <GraphicHeader styles={styles}></GraphicHeader>
              <GraphicTop data={TOP_DATA} language={lang} styles={styles}></GraphicTop>
              <GraphicFooter styles={styles}></GraphicFooter>
            </ViewShot>           
          }
        </>
      }

      {
        innerShowCondition && showConditions &&
        <>
          {
            Platform.OS === 'web' ?
              <View ref={conditionsRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicConditions data={CONDITIONS_DATA} language={lang} styles={styles}></GraphicConditions>
                <GraphicFooter styles={styles}></GraphicFooter>
              </View>           
             :
              <ViewShot ref={conditionsRef} style={styles.content}>
                <GraphicHeader styles={styles}></GraphicHeader>
                <GraphicConditions data={CONDITIONS_DATA} language={lang} styles={styles}></GraphicConditions>
                <GraphicFooter styles={styles}></GraphicFooter>
              </ViewShot>           
          }
        </>
      }
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
    paddingHorizontal: 20
  },
  subTitlte: {
    fontSize: 28,
    fontWeight: 'semibold',
    marginTop: 20,
    marginBottom: 16,
    color: 'black',
    paddingHorizontal: 20
  },
  list: {
    width: 'auto', 
    marginTop: 0, 
    padding: 20,
    backgroundColor: 'rgb(245, 245, 245)',
    marginBottom: 20,
    paddingBottom: 52,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 20
  },
  textMargin: {
    fontSize: 16,
    marginBottom: 30,
    paddingHorizontal: 20
  },
  expansionImage: {
    overflow: 'hidden',
    width: 96,
    height: 45,
    left: 4,
    top: -2
  },
  summary: {
    padding: 20, 
    borderRadius: 8, 
    backgroundColor: 'rgb(240, 240, 240)',
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20
  },
  stageIcon: {
    width: 58,
    height: 50,
    fontSize: 44,
    top: 8,
    left: 10,
    color: 'mediumaquamarine'
  },
  energy: {
    width: 36,
    height: 36,
    marginRight: 12,
    top: 2
  },
  summaryImage: {
    overflow: 'hidden',
    width: 56,
    height: 40,
    top: 2,
    left: -2,
    marginRight: 2
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'semibold'
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 20, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryEnergy: {
    width: 23, 
    height: 23, 
    marginRight: 2, 
    top: 1
  },
  flexRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 20, 
    alignItems: 'center'
  },
  energyRow: {
    width: '13%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  rowGap: {
    width: '16.6%', 
    flexDirection: 'row', 
    gap: 20, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  listItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 50,
    marginBottom: 8
  },
  content: {
    padding: 20,
    backgroundColor: 'white'
  }
});