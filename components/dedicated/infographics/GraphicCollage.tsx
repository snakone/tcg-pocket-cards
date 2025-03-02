import { StyleSheet, FlatList, DimensionValue } from "react-native";
import { Image } from 'expo-image';
import { useCallback, useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { CardExpansionENUM, CardRarityENUM, CardSpecialConditionENUM, CardStageENUM } from "@/shared/definitions/enums/card.enums";
import { Colors } from "@/shared/definitions/utils/colors";
import { getImageLanguage116x162, sortCards } from "@/shared/definitions/utils/functions";
import { CardGridStyles } from "@/shared/styles/component.styles";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { EXPANSION } from "@/shared/definitions/enums/packs.enums";
import { PACK_PER_EXPANSION_MAP } from "@/shared/definitions/utils/constants";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import RainbowDivider from "./RainbowDivider";

import { 
  CHAMPION_ICON, 
  CROWN_RARITY, 
  DARK_ICON, 
  DRAGON_ICON, 
  ELECTRIC_ICON, 
  FIGHT_ICON, 
  FIRE_ICON, 
  GENETIC_APEX, 
  GENETIC_APEX_CHARIZARD_ICON, 
  GENETIC_APEX_MEWTWO_ICON, 
  GENETIC_APEX_PIKACHU_ICON, 
  GRASS_ICON, 
  MYTHICAL_ISLAND_MEW_ICON, 
  NORMAL_ICON, 
  NORMAL_RARITY, 
  PROMO_A_ICON, 
  PSYCHIC_ICON, 
  SMACK_DOWN, 
  SMACK_DOWN_DIALGA_ICON, 
  SMACK_DOWN_PALKIA_ICON,
  STAR_RARITY,
  STEEL_ICON,
  WATER_ICON,
  TRIUMPH_LIGHT_ARCEUS_ICON
} from "@/shared/definitions/sentences/path.sentences";

const numColumns = 20;
const collageWith = 1240;

interface GraphicCollageProps {
  showExpansion: boolean,
  showGrades: boolean,
  showTypes: boolean,
  showMiscellania: boolean,
  showWeak: boolean,
  showTop: boolean,
  showConditions: boolean
}

export function GraphicCollage({
  showExpansion,
  showGrades,
  showTypes,
  showMiscellania,
  showWeak,
  showTop,
  showConditions,
}: GraphicCollageProps) {
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;
  const [lang] = useState<LanguageType>(state.settingsState.language);

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

  function getItemWidth(length: number): DimensionValue {
    if (length >= 20) { return '100%'}
    return (length * 60) + 40;
  }

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => {
    return (
      <ThemedView style={
          [{backgroundColor: Colors.light.background, height: 48}, 
          index > 19 && {boxShadow: '0px -2px 12px rgba(0, 0, 0, 0.7)'}
        ]}>
        <Image accessibilityLabel={item?.name[lang]} 
                style={[
          CardGridStyles.image, 
          {width: 60, borderRadius: 4, height: 82}
        ]} 
        source={getImageLanguage116x162(lang, item?.id)}/>
      </ThemedView>
    )
  }, []);

  const { data: pikachuCards, length: pikachuCardsLength } = getCards(EXPANSION.PIKACHU);
  const { data: mewtwoCards, length: mewtwoCardsLength } = getCards(EXPANSION.MEWTWO);
  const { data: charizardCards, length: charizardCardsLength } = getCards(EXPANSION.CHARIZARD);
  const { data: islandCards } = getCards(EXPANSION.MYTHICAL_ISLAND);
  const { data: dialgaCards, length: dialgaCardsLength } = getCards(EXPANSION.DIALGA);
  const { data: palkiaCards, length: palkiaCardsLength } = getCards(EXPANSION.PALKIA);
  const { data: premiumCards, length: premiumCardsLength } = getCards(EXPANSION.PREMIUM);
  const { data: promo1Cards } = getCards(EXPANSION.PROMO_A1);
  const { data: promo2Cards } = getCards(EXPANSION.PROMO_A2);
  const { data: promo3Cards } = getCards(EXPANSION.PROMO_A3);
  const { data: promo4Cards } = getCards(EXPANSION.PROMO_A4);
  const { data: specialCards, length: specialCardsLength } = getCards(EXPANSION.SPECIAL_MISSION);
  const { data: triumphCards } = getCards(EXPANSION.ARCEUS);

  const { length: geneticPackCardsLength } = getCardsExpansion(CardExpansionENUM.GENETIC_APEX);
  const { length: islandPackCardsLength } = getCardsExpansion(CardExpansionENUM.MYTHICAL_ISLAND);
  const { length: spacePackCardsLength } = getCardsExpansion(CardExpansionENUM.SPACE_TIME_SMACKDOWN);
  const { length: triumphPackCardsLength } = getCardsExpansion(CardExpansionENUM.TRIUMPH_LIGHT);
  const { data: promoAPackCards, length: promoAPackCardsLength } = getCardsExpansion(CardExpansionENUM.PROMO_A);

  const { data: rareCards, length: rareCardsLength } = getCardRarity(CardRarityENUM.RARE);
  const { data: doubleCards, length: doubleCardsLength } = getCardRarity(CardRarityENUM.DOUBLE);
  const { data: artCards, length: artCardsLength } = getCardRarity(CardRarityENUM.ART);
  const { data: superCards, length: superCardsLength } = getCardRarity(CardRarityENUM.SUPER);
  const { data: inmersiveCards, length: inmersiveCardsLength } = getCardRarity(CardRarityENUM.INMERSIVE);
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
  const { data: addCondition, length: addConditionLength } = getCondition(CardSpecialConditionENUM.ADD);
  const { data: burnedCondition, length: burnedConditionLength } = getCondition(CardSpecialConditionENUM.BURNED);
  const { data: callCondition, length: callConditionLength } = getCondition(CardSpecialConditionENUM.CALL);
  const { data: confusionCondition, length: confusionConditionLength } = getCondition(CardSpecialConditionENUM.CONFUSION);
  const { data: cornerCondition, length: cornerConditionLength } = getCondition(CardSpecialConditionENUM.CORNER);
  const { data: discardCondition, length: discardConditionLength } = getCondition(CardSpecialConditionENUM.DISCARD);
  const { data: extraCondition, length: extraConditionLength } = getCondition(CardSpecialConditionENUM.EXTRA_DAMAGE);
  const { data: flipCondition, length: flipConditionLength } = getCondition(CardSpecialConditionENUM.FLIP);
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

  return (
    <ThemedView>
      <ThemedText style={styles.mainTitle}>{i18n.t('graphic_title')}</ThemedText>
      <ThemedView style={{marginBottom: 10}}>
        <ThemedText style={styles.text}>{i18n.t('infographics_intro')}</ThemedText>
      </ThemedView>
      <ThemedText style={styles.subTitlte}>{i18n.t('summary')}</ThemedText>
      <ThemedView>
        <ThemedText style={styles.text}>{i18n.t('infographics_summary')}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.summary}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
          <ThemedView style={{width: '23%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX} style={[styles.summaryImage, {width: 68, height: 30}]}></Image>
              <ThemedText style={[styles.summaryText, {width: 90, textOverflow: 'ellipsis', overflow: 'hidden'}]} 
                          numberOfLines={1} 
                          ellipsizeMode="tail">{i18n.t('genetic_apex')}
              </ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {geneticPackCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '23%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={MYTHICAL_ISLAND_MEW_ICON} style={[styles.summaryImage, {width: 68, height: 34}]}></Image>
              <ThemedText style={[styles.summaryText, {width: 90, textOverflow: 'ellipsis', overflow: 'hidden'}]} 
                          numberOfLines={1} 
                          ellipsizeMode="tail">{i18n.t('mythical_island')}
              </ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {islandPackCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '23%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={SMACK_DOWN} style={[styles.summaryImage, {width: 70, height: 33}]}></Image>
              <ThemedText style={[styles.summaryText, {width: 90, textOverflow: 'ellipsis', overflow: 'hidden'}]} 
                          numberOfLines={1} 
                          ellipsizeMode="tail">{i18n.t('smack_down')}
              </ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {spacePackCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '23%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={PROMO_A_ICON} style={[styles.summaryImage, {width: 69, height: 34, top: -1}]}></Image>
              <ThemedText style={[styles.summaryText, {width: 90, textOverflow: 'ellipsis', overflow: 'hidden'}]} 
                          numberOfLines={1} 
                          ellipsizeMode="tail">{i18n.t('promo_a')}
              </ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {promoAPackCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 22}}>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX_PIKACHU_ICON} style={[styles.summaryImage]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('pikachu')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {pikachuCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX_MEWTWO_ICON} style={[styles.summaryImage]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('mewtwo')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {mewtwoCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX_CHARIZARD_ICON} style={[styles.summaryImage]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('charizard')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {charizardCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={SMACK_DOWN_DIALGA_ICON} style={[styles.summaryImage, {width: 68, height: 34}]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('dialga')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {dialgaCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={SMACK_DOWN_PALKIA_ICON} style={[styles.summaryImage, {width: 68, height: 34}]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('palkia')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {palkiaCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', justifyContent: 'center'}}>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={TRIUMPH_LIGHT_ARCEUS_ICON} style={[styles.summaryImage, {width: 80, height: 34}]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('triumphal_light')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {triumphPackCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 10}}>
          <RainbowDivider height={2}></RainbowDivider>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', marginTop: 6, justifyContent: 'center'}}>
          <ThemedView style={styles.rowGap}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={NORMAL_RARITY}
                  style={{
                    width: 22,
                    height: 23,
                    top: 1
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
              {rareCardsLength}
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.rowGap}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={NORMAL_RARITY}
                  style={{
                    width: 22,
                    height: 23,
                    top: 1
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
              {doubleCardsLength}
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.rowGap}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 1 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={STAR_RARITY}
                  style={{
                    width: 22,
                    height: 23,
                    top: 1
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
              {artCardsLength}
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.rowGap}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 2 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={STAR_RARITY}
                  style={{
                    width: 22,
                    height: 23,
                    top: 1
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
              {superCardsLength}
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.rowGap}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={STAR_RARITY}
                  style={{
                    width: 22,
                    height: 23,
                    top: 1
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
              {inmersiveCardsLength}
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.rowGap}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 1 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={CROWN_RARITY}
                  style={{
                    width: 34,
                    height: 23,
                    top: 1
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
              {crownCardsLength}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 6}}>
          <RainbowDivider height={2}></RainbowDivider>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', marginTop: 8, justifyContent: 'center', gap: 40}}>
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={GRASS_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('grass')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {grassCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIRE_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fire')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {fireCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={WATER_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('water')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {waterCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={ELECTRIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('electric')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {electricCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={PSYCHIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('psychic')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {psychicCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIGHT_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fight')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {fightCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 40}}>
          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DARK_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dark')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {darkCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={STEEL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('steel')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {steelCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DRAGON_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dragon')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {dragonCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={NORMAL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('normal')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {normalCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 8}}>
          <RainbowDivider height={2}></RainbowDivider>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', marginTop: 2, justifyContent: 'center'}}>
          <ThemedView style={[styles.energyRow, {width: '21%'}]}>
            <ThemedView>
              <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold'}]}>
                {i18n.t('miscellania')}
              </ThemedText>
              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('abilities')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {withAbilityCardsLength}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('items')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {itemCardsLength}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('tools')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {toolCardsLength}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('fossils')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {fossilCardsLength}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('supporter')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {supporterCardsLength}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '78%'}]}>
            <ThemedView>
              <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold'}]}>
                {i18n.t('conditions')}
              </ThemedText>
              <ThemedView style={{flexDirection: 'row', gap: 45}}>
                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_attack_bench')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {benchConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_recoil')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {recoilConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_extra_damage')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {extraConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_resist')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {resistConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_heal')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {healConditionLength}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_poison')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {poisonConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_paralyze')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                     {paralizeConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_sleep')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {sleepConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_confusion')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {confusionConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_burned')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {burnedConditionLength}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_flip')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {flipConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_nothing')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {nothingConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_discard')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {discardConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_add')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {addConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_corner')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {cornerConditionLength}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_withdraw')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {withdrawConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_retire')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {retireConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_call')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {callConditionLength}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_inactive')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {inactiveConditionLength}
                    </ThemedText>
                  </ThemedView>

                </ThemedView>
              </ThemedView>
              
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 0}}>
          <RainbowDivider height={2}></RainbowDivider>
        </ThemedView>

        <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 2}]}>
          {i18n.t('weakness')}
        </ThemedText>

        <ThemedView style={{flexDirection: 'row', marginTop: 4, justifyContent: 'center', gap: 40}}>
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={GRASS_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('grass')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakGrassCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIRE_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fire')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakFireCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={WATER_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('water')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakWaterCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={ELECTRIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('electric')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakElectricCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={PSYCHIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('psychic')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakPsychicCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIGHT_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fight')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakFightCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 40, marginBottom: 8}}>
          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DARK_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dark')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakDarkCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={STEEL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('steel')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {weakSteelCardsLength}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DRAGON_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dragon')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {0}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={NORMAL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('normal')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {0}
              </ThemedText>
            </ThemedView>
          </ThemedView>

        </ThemedView>
      </ThemedView>

      {
        showExpansion &&
        <>
          <ThemedText style={styles.subTitlte}>{i18n.t('expansions')}</ThemedText>
          
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX} style={styles.expansionImage}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('genetic_apex')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{geneticPackCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('genetic_apex_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX_PIKACHU_ICON} style={[styles.expansionImage, { width: 92, height: 64}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('pikachu')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{pikachuCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={pikachuCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX_MEWTWO_ICON} style={[styles.expansionImage, { width: 92, height: 64}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('mewtwo')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{mewtwoCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={mewtwoCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX_CHARIZARD_ICON} style={[styles.expansionImage, { width: 92, height: 64}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('charizard')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{charizardCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={charizardCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX} style={styles.expansionImage}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('shareds')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{sharedGeneticLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('shareds_description')}</ThemedText>

          <FlatList data={sharedGenetic}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={MYTHICAL_ISLAND_MEW_ICON} style={[styles.expansionImage, {height: 48}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('mythical_island')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{islandPackCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('mythical_island_description')}</ThemedText>

          <FlatList data={islandCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN} style={[styles.expansionImage, {height: 44}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('smack_down')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{spacePackCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 16}]}>{i18n.t('smack_down_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN_DIALGA_ICON} style={[styles.expansionImage, { width: 92, height: 46}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('dialga')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{dialgaCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={dialgaCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN_PALKIA_ICON} style={[styles.expansionImage, { width: 92, height: 46}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('palkia')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{palkiaCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={palkiaCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN} style={styles.expansionImage}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('shareds')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{sharedSmackLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('shareds_description')}</ThemedText>

          <FlatList data={sharedSmack}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={TRIUMPH_LIGHT_ARCEUS_ICON} style={[styles.expansionImage, { width: 92, height: 39}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('arceus')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{triumphPackCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('triumph_description')}</ThemedText>

          <FlatList data={triumphCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('promo_a')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{promoAPackCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('promo_description')}</ThemedText>

          <FlatList data={promoAPackCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('series')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.text, {marginBottom: 10}]}>{i18n.t('series_description')}</ThemedText>

          <ThemedView style={{flexDirection: "row", gap: 20}}>
            <ThemedView>
              <ThemedText style={[styles.subTitlte, {marginTop: 10, color: Colors.light.text}]}>A1</ThemedText>
              <FlatList data={promo1Cards}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
            <ThemedView>
              <ThemedText style={[styles.subTitlte, {marginTop: 10, color: Colors.light.text}]}>A2</ThemedText>
              <FlatList data={promo2Cards}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
            <ThemedView>
              <ThemedText style={[styles.subTitlte, {marginTop: 10, color: Colors.light.text}]}>A3</ThemedText>
              <FlatList data={promo3Cards}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
          </ThemedView>

          <ThemedView style={{flexDirection: "row", gap: 20, width: '32.4%'}}>
            <ThemedView>
              <ThemedText style={[styles.subTitlte, {marginTop: 0, color: Colors.light.text}]}>A4</ThemedText>
              <FlatList data={promo4Cards}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
          </ThemedView>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('premium')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{premiumCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('premium_description')}</ThemedText>
          
          <FlatList data={premiumCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {width: 'auto'}]}
                    style={{borderRadius: 8, width: getItemWidth(premiumCardsLength)}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('mission')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{specialCardsLength}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('mission_description')}</ThemedText>

          <FlatList data={specialCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(specialCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider> 
        </>
      }

      {
        showGrades && 
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('grade')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('grade_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={NORMAL_RARITY}
                  style={{
                    width: 26,
                    height: 27,
                    top: 2
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{rareCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={rareCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Image
                  key={(i + 1)}
                  source={NORMAL_RARITY}
                  style={{
                    width: 26,
                    height: 27,
                    top: 2
                  }}
                />
              ))}
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{doubleCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={doubleCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 8}}>
                {Array.from({ length: 1 }).map((_, i) => (
                  <Image
                    key={(i + 1)}
                    source={STAR_RARITY}
                    style={{
                      width: 28,
                      height: 29,
                      top: 2
                    }}
                  />
                ))}
              </ThemedView>
            <ThemedText style={styles.subTitlte}>{artCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={artCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 12, marginLeft: 8}}>
                {Array.from({ length: 2 }).map((_, i) => (
                  <Image
                    key={(i + 1)}
                    source={STAR_RARITY}
                    style={{
                      width: 28,
                      height: 29,
                      top: 2
                    }}
                  />
                ))}
              </ThemedView>
            <ThemedText style={styles.subTitlte}>{superCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={superCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 12, marginLeft: 8}}>
                {Array.from({ length: 3}).map((_, i) => (
                  <Image
                    key={(i + 1)}
                    source={STAR_RARITY}
                    style={{
                      width: 28,
                      height: 29,
                      top: 2
                    }}
                  />
                ))}
              </ThemedView>
            <ThemedText style={styles.subTitlte}>{inmersiveCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={inmersiveCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: getItemWidth(inmersiveCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 12, marginLeft: 8}}>
                {Array.from({ length: 1}).map((_, i) => (
                  <Image
                    key={(i + 1)}
                    source={CROWN_RARITY}
                    style={{
                      width: 49,
                      height: 32,
                      top: 2
                    }}
                  />
                ))}
              </ThemedView>
            <ThemedText style={styles.subTitlte}>{crownCardsLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={crownCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: getItemWidth(crownCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>        
        </>
      }

      {
        showTypes && 
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('types')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('types_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={GRASS_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('grass')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{grassCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={grassCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/> 

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIRE_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('fire')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{fireCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={fireCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={WATER_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('water')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{waterCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={waterCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={ELECTRIC_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('electric')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{electricCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={electricCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={PSYCHIC_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('psychic')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{psychicCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={psychicCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIGHT_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('fight')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{fightCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={fightCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={DARK_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('dark')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{darkCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={darkCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={STEEL_ICON} style={[styles.energy]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('steel')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{steelCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={steelCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={DRAGON_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('dragon')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{dragonCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={dragonCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(dragonCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={NORMAL_ICON} style={[styles.energy]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('normal')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{normalCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={normalCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>      
        </>
      }

      {
        showMiscellania &&
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('miscellania')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('miscellania_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('abilities')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{withAbilityCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={withAbilityCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>
          
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('items')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{itemCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={itemCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: getItemWidth(itemCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('tools')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{toolCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={toolCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: getItemWidth(toolCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('fossils')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{fossilCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={fossilCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: getItemWidth(fossilCardsLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('supporter')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{supporterCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={supporterCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>        
        </>
      }

      {
        showWeak && 
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('weakness')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('weakness_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={GRASS_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('grass')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakGrassCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakGrassCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIRE_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('fire')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakFireCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakFireCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={WATER_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('water')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakWaterCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakWaterCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={ELECTRIC_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('electric')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakElectricCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakElectricCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={PSYCHIC_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('psychic')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakPsychicCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakPsychicCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIGHT_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('fight')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakFightCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakFightCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={DARK_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('dark')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakDarkCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakDarkCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={STEEL_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('steel')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{weakSteelCardsLength}</ThemedText>
          </ThemedView>

          <FlatList data={weakSteelCards}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>        
        </>
      }

      {
        showTop &&
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
              <Image source={CHAMPION_ICON} style={[styles.expansionImage, {width: 58, height: 46, top: -4, marginRight: 0}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 30}]}>{i18n.t('top_20')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 14}]}>{i18n.t('top_20_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="diamond" style={[styles.stageIcon, {color: 'skyblue'}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('rarity')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('rarity')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>
            
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="grass" style={[styles.stageIcon, {top: 3}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('retire_cost')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getRetreatTop20()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="favorite-outline" style={[styles.stageIcon, {color: 'skyblue', top: 6}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('health_points')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('health')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="height" style={[styles.stageIcon, {top: 6}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('height')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('height')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="scale" style={[styles.stageIcon, {color: 'skyblue', fontSize: 34, left: 13, top: 11}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('weight')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('weight')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="bolt" style={[styles.stageIcon]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t('attack')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getAttackTop20()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>       
        </>
      }
      {
        showConditions &&
        <>
          <ThemedText style={styles.subTitlte}>{i18n.t('conditions')}</ThemedText>
          <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('conditions_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_attack_bench')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{benchConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={benchCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_recoil')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{recoilConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={recoilCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(recoilConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_extra_damage')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{extraConditionLength}</ThemedText>
          </ThemedView>

          <FlatList data={extraCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_resist')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{resistConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={resistCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_heal')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{healConditionLength}</ThemedText>
          </ThemedView>
    
          <FlatList data={healCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_poison')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{poisonConditionLength}</ThemedText>
          </ThemedView>

          <FlatList data={poisonCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(poisonConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_paralyze')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{paralizeConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={paralizeCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(paralizeConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_sleep')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{sleepConditionLength}</ThemedText>
          </ThemedView>

          <FlatList data={sleepCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(sleepConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_confusion')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{confusionConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={confusionCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(confusionConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_burned')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{burnedConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={burnedCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(burnedConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_flip')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{flipConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={flipCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_nothing')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{nothingConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={nothingCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(nothingConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_discard')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{discardConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={discardCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_add')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{addConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={addCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_corner')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{cornerConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={cornerCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(cornerConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_withdraw')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{withdrawConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={withdrawCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(withdrawConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_retire')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{retireConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={retireCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(retireConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_call')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{callConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={callCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(callConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('condition_inactive')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{inactiveConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={inactiveCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(inactiveConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t('arceus_link')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{arceusConditionLength}</ThemedText>
          </ThemedView>
          
          <FlatList data={arceusCondition}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                    style={{width: getItemWidth(arceusConditionLength), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>                    

          <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>       
        </>
      }

      <ThemedView style={{height: 16}}></ThemedView>
      <ThemedView style={[styles.summary, {marginHorizontal: 16, marginTop: 0, padding: 16, marginBottom: 0}]}>
        <ThemedText style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>
          {i18n.t('infographics_footer')}
        </ThemedText>
      </ThemedView>
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
    marginBlock: 30,
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
  }
});