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
  PROMO_A_ICON, PSYCHIC_ICON, SMACK_DOWN, 
  SMACK_DOWN_DIALGA_ICON, 
  SMACK_DOWN_PALKIA_ICON,
  STAR_RARITY,
  STEEL_ICON,
  WATER_ICON
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

  const getCards = useCallback((pack: EXPANSION) => {
    return state.cardState.cards.filter(
      card => card.found && card.found.includes(pack))
                                      .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getPromo = useCallback(() => {
    return state.cardState.cards.filter(
      card => card.expansion && card.expansion === CardExpansionENUM.PROMO_A)
                                .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getWithAbility = useCallback(() => {
    return state.cardState.cards.filter(
      card => Boolean(card.ability) && Boolean(card.ability?.name))
                                .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getStage = useCallback((stage: CardStageENUM) => {
    return state.cardState.cards.filter((card) => card.stage && card.stage === stage)
                                .sort((b, a) => b.id > a.id ? 1 : -1)
                                .filter((card, index, self) => card.stage !== CardStageENUM.FOSSIL || 
                                  index === self.findIndex((t) => t.name.en === card.name.en));
  }, [state.cardState.cards]);

  const getCondition = useCallback((condition: CardSpecialConditionENUM) => {
    return state.cardState.cards.filter(
      card => card.condition && card.condition.some(c => c === condition))
                                .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getCardByType = useCallback((type: PokemonTypeENUM) => {
    return state.cardState.cards.filter(
      card => card.element !== undefined && card.element === type)
                                .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getCardWeak = useCallback((type: PokemonTypeENUM) => {
    return state.cardState.cards.filter(
      card => card.weak !== undefined && card.weak === type)
                                .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getSharedCards = useCallback((expansion: CardExpansionENUM) => {
    const filtered = state.cardState.cards.filter(card => card.expansion === expansion);
    const amount = PACK_PER_EXPANSION_MAP[expansion];
    return filtered.filter(
      card => card.found && card.found.length === amount)
                   .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getCardsExpansion = useCallback((expansion: CardExpansionENUM) => {
    const filtered = state.cardState.cards.filter(card => card.expansion === expansion);
    return filtered.sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

  const getCardRarity = useCallback((rarity: CardRarityENUM) => {
    return state.cardState.cards.filter(
      card => card.rarity && card.rarity === rarity)
                                .sort((b, a) => b.id > a.id ? 1 : -1);
  }, [state.cardState.cards]);

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

    const filtered = cards.sort((b, a) => b.id > a.id ? 1 : -1)
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
  
  return (
    <ThemedView>
      <ThemedText style={styles.mainTitle}>{i18n.t('graphic_title')}</ThemedText>
      <ThemedView style={{marginBottom: 20}}>
        <ThemedText style={styles.text}>{i18n.t('infographics_intro')}</ThemedText>
      </ThemedView>
      <ThemedText style={styles.subTitlte}>{i18n.t('summary')}</ThemedText>
      <ThemedView>
        <ThemedText style={styles.text}>{i18n.t('infographics_summary')}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.summary}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 36}}>
          <ThemedView style={{width: '23%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX} style={[styles.summaryImage, {width: 68, height: 30}]}></Image>
              <ThemedText style={[styles.summaryText, {width: 90, textOverflow: 'ellipsis', overflow: 'hidden'}]} 
                          numberOfLines={1} 
                          ellipsizeMode="tail">{i18n.t('genetic_apex')}
              </ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {getCardsExpansion(CardExpansionENUM.GENETIC_APEX).length}
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
                {getCardsExpansion(CardExpansionENUM.MYTHICAL_ISLAND).length}
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
                {getCardsExpansion(CardExpansionENUM.SPACE_TIME_SMACKDOWN).length}
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
                {getCardsExpansion(CardExpansionENUM.PROMO_A).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', justifyContent: 'center'}}>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX_PIKACHU_ICON} style={[styles.summaryImage]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('pikachu')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {getCards(EXPANSION.PIKACHU).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX_MEWTWO_ICON} style={[styles.summaryImage]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('mewtwo')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {getCards(EXPANSION.MEWTWO).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={GENETIC_APEX_CHARIZARD_ICON} style={[styles.summaryImage]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('charizard')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {getCards(EXPANSION.CHARIZARD).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={SMACK_DOWN_DIALGA_ICON} style={[styles.summaryImage, {width: 68, height: 34}]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('dialga')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {getCards(EXPANSION.DIALGA).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{width: '20%'}}>
            <ThemedView style={styles.summaryRow}>
              <Image source={SMACK_DOWN_PALKIA_ICON} style={[styles.summaryImage, {width: 68, height: 34}]}></Image>
              <ThemedText style={styles.summaryText}>{i18n.t('palkia')}</ThemedText>
              <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                {getCards(EXPANSION.PALKIA).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 14}}>
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
              {getCardRarity(CardRarityENUM.RARE).length}
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
              {getCardRarity(CardRarityENUM.DOUBLE).length}
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
              {getCardRarity(CardRarityENUM.ART).length}
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
              {getCardRarity(CardRarityENUM.SUPER).length}
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
              {getCardRarity(CardRarityENUM.INMERSIVE).length}
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
              {getCardRarity(CardRarityENUM.CROWN).length}
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
                {getCardByType(PokemonTypeENUM.GRASS).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIRE_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fire')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.FIRE).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={WATER_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('water')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.WATER).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={ELECTRIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('electric')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.ELECTRIC).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={PSYCHIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('psychic')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.PSYCHIC).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIGHT_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fight')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.FIGHT).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center', gap: 40}}>
          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DARK_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dark')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.DARK).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={STEEL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('steel')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.STEEL).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DRAGON_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dragon')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.DRAGON).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={NORMAL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('normal')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardByType(PokemonTypeENUM.NORMAL).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 10}}>
          <RainbowDivider height={2}></RainbowDivider>
        </ThemedView>

        <ThemedView style={{flexDirection: 'row', marginTop: 8, justifyContent: 'center'}}>
          <ThemedView style={[styles.energyRow, {width: '21%'}]}>
            <ThemedView>
              <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold'}]}>
                {i18n.t('miscellania')}
              </ThemedText>
              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('abilities')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {getWithAbility().length}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('items')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {getStage(CardStageENUM.ITEM).length}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('tools')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {getStage(CardStageENUM.TOOL).length}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('fossils')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {getStage(CardStageENUM.FOSSIL).length}
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.listItem}>
                <ThemedText style={styles.summaryText}>-  {i18n.t('supporter')}</ThemedText>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {getStage(CardStageENUM.SUPPORTER).length}
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
                      {getCondition(CardSpecialConditionENUM.ATTACK_BENCH).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_recoil')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.RECOIL).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_extra_damage')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.EXTRA_DAMAGE).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_resist')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.RESIST).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_heal')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.HEAL).length}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_poison')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.POISON).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_paralyze')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                     {getCondition(CardSpecialConditionENUM.PARALYZE).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_sleep')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.SLEEP).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_confusion')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.CONFUSION).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_burned')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.BURNED).length}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_flip')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.FLIP).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_nothing')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.NOTHING).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_discard')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.DISCARD).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_add')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.ADD).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_corner')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {getCondition(CardSpecialConditionENUM.CORNER).length}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView>
                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_withdraw')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {getCondition(CardSpecialConditionENUM.WITHDRAW_CARD).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_retire')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {getCondition(CardSpecialConditionENUM.RETIRE).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('status_call')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {getCondition(CardSpecialConditionENUM.CALL).length}
                    </ThemedText>
                  </ThemedView>

                  <ThemedView style={styles.listItem}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t('condition_inactive')}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {getCondition(CardSpecialConditionENUM.INACTIVE).length}
                    </ThemedText>
                  </ThemedView>

                </ThemedView>
              </ThemedView>
              
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{marginTop: 10}}>
          <RainbowDivider height={2}></RainbowDivider>
        </ThemedView>

        <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 8}]}>
          {i18n.t('weakness')}
        </ThemedText>

        <ThemedView style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center', gap: 40}}>
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={GRASS_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('grass')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.GRASS).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIRE_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fire')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.FIRE).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={WATER_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('water')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.WATER).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={ELECTRIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('electric')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.ELECTRIC).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={PSYCHIC_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('psychic')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.PSYCHIC).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.energyRow}>
            <ThemedView style={styles.flexRow}>
              <Image source={FIGHT_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('fight')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.FIGHT).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center', gap: 40, marginBottom: 14}}>
          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DARK_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dark')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.DARK).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={STEEL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('steel')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.STEEL).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={DRAGON_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('dragon')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.DRAGON).length}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.energyRow, {width: '16.6%'}]}>
            <ThemedView style={styles.flexRow}>
              <Image source={NORMAL_ICON} style={[styles.energy, styles.summaryEnergy]}/>
              <ThemedText style={[styles.summaryText]}>{i18n.t('normal')}</ThemedText>
              <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                {getCardWeak(PokemonTypeENUM.NORMAL).length}
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
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('genetic_apex')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardsExpansion(CardExpansionENUM.GENETIC_APEX).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 36}]}>{i18n.t('genetic_apex_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX_PIKACHU_ICON} style={[styles.expansionImage, { width: 92, height: 64}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('pikachu')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.PIKACHU).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCards(EXPANSION.PIKACHU)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX_MEWTWO_ICON} style={[styles.expansionImage, { width: 92, height: 64}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('mewtwo')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.MEWTWO).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCards(EXPANSION.MEWTWO)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX_CHARIZARD_ICON} style={[styles.expansionImage, { width: 92, height: 64}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('charizard')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.CHARIZARD).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCards(EXPANSION.CHARIZARD)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={GENETIC_APEX} style={styles.expansionImage}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('shareds')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getSharedCards(CardExpansionENUM.GENETIC_APEX).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('shareds_description')}</ThemedText>

          <FlatList data={getSharedCards(CardExpansionENUM.GENETIC_APEX)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={MYTHICAL_ISLAND_MEW_ICON} style={[styles.expansionImage, {height: 48}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('mythical_island')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardsExpansion(CardExpansionENUM.MYTHICAL_ISLAND).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('mythical_island_description')}</ThemedText>

          <FlatList data={getCards(EXPANSION.MYTHICAL_ISLAND)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN} style={[styles.expansionImage, {height: 44}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('smack_down')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardsExpansion(CardExpansionENUM.SPACE_TIME_SMACKDOWN).length}</ThemedText>
          </ThemedView>
          <ThemedText style={styles.textMargin}>{i18n.t('smack_down_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN_DIALGA_ICON} style={[styles.expansionImage, { width: 92, height: 46}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('dialga')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.DIALGA).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCards(EXPANSION.DIALGA)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN_PALKIA_ICON} style={[styles.expansionImage, { width: 92, height: 46}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('palkia')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.PALKIA).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCards(EXPANSION.PALKIA)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={SMACK_DOWN} style={styles.expansionImage}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('shareds')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getSharedCards(CardExpansionENUM.SPACE_TIME_SMACKDOWN).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('shareds_description')}</ThemedText>

          <FlatList data={getSharedCards(CardExpansionENUM.SPACE_TIME_SMACKDOWN)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('promo_a')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardsExpansion(CardExpansionENUM.PROMO_A).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('promo_description')}</ThemedText>

          <FlatList data={getPromo()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('series')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.text, {marginBottom: 10}]}>{i18n.t('series_description')}</ThemedText>

          <ThemedView style={{flexDirection: "row", gap: 20}}>
            <ThemedView>
              <ThemedText style={styles.subTitlte}>A1</ThemedText>
              <FlatList data={getCards(EXPANSION.PROMO_A1)}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
            <ThemedView>
              <ThemedText style={styles.subTitlte}>A2</ThemedText>
              <FlatList data={getCards(EXPANSION.PROMO_A2)}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
            <ThemedView>
              <ThemedText style={styles.subTitlte}>A3</ThemedText>
              <FlatList data={getCards(EXPANSION.PROMO_A3)}
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
              <ThemedText style={[styles.subTitlte, {marginTop: 10}]}>A4</ThemedText>
              <FlatList data={getCards(EXPANSION.PROMO_A4)}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {width: 'auto'}]}
                        style={{borderRadius: 8}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
          </ThemedView>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('premium')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.PREMIUM).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('premium_description')}</ThemedText>
          
          <FlatList data={getCards(EXPANSION.PREMIUM)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {width: 'auto'}]}
                    style={{borderRadius: 8, width: getItemWidth(getCards(EXPANSION.PREMIUM).length)}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('mission')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCards(EXPANSION.SPECIAL_MISSION).length}</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('mission_description')}</ThemedText>

          <FlatList data={getCards(EXPANSION.SPECIAL_MISSION)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(getCards(EXPANSION.SPECIAL_MISSION).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider> 
        </>
      }

      {
        showGrades && 
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('grade')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('grade_description')}</ThemedText>

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
            <ThemedText style={styles.subTitlte}>{getCardRarity(CardRarityENUM.RARE).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCardRarity(CardRarityENUM.RARE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
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
            <ThemedText style={styles.subTitlte}>{getCardRarity(CardRarityENUM.DOUBLE).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCardRarity(CardRarityENUM.DOUBLE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
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
            <ThemedText style={styles.subTitlte}>{getCardRarity(CardRarityENUM.ART).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCardRarity(CardRarityENUM.ART)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
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
            <ThemedText style={styles.subTitlte}>{getCardRarity(CardRarityENUM.SUPER).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCardRarity(CardRarityENUM.SUPER)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
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
            <ThemedText style={styles.subTitlte}>{getCardRarity(CardRarityENUM.INMERSIVE).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCardRarity(CardRarityENUM.INMERSIVE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(getCardRarity(CardRarityENUM.INMERSIVE).length), borderRadius: 8}}
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
            <ThemedText style={styles.subTitlte}>{getCardRarity(CardRarityENUM.CROWN).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCardRarity(CardRarityENUM.CROWN)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(getCardRarity(CardRarityENUM.CROWN).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>        
        </>
      }

      {
        showTypes && 
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('types')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('types_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={GRASS_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('grass')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.GRASS).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.GRASS)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/> 

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIRE_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('fire')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.FIRE).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.FIRE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={WATER_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('water')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.WATER).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.WATER)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={ELECTRIC_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('electric')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.ELECTRIC).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.ELECTRIC)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={PSYCHIC_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('psychic')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.PSYCHIC).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.PSYCHIC)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIGHT_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('fight')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.FIGHT).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.FIGHT)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={DARK_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('dark')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.DARK).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.DARK)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={STEEL_ICON} style={[styles.energy, {top: -4}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('steel')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.STEEL).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.STEEL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={DRAGON_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('dragon')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.DRAGON).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.DRAGON)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCardByType(PokemonTypeENUM.DRAGON).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={NORMAL_ICON} style={[styles.energy, {top: -4}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('normal')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardByType(PokemonTypeENUM.NORMAL).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardByType(PokemonTypeENUM.NORMAL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>      
        </>
      }

      {
        showMiscellania &&
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('miscellania')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 30}]}>{i18n.t('miscellania_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('abilities')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getWithAbility().length}</ThemedText>
          </ThemedView>

          <FlatList data={getWithAbility()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>
          
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('items')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getStage(CardStageENUM.ITEM).length}</ThemedText>
          </ThemedView>

          <FlatList data={getStage(CardStageENUM.ITEM)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(getStage(CardStageENUM.ITEM).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('tools')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getStage(CardStageENUM.TOOL).length}</ThemedText>
          </ThemedView>

          <FlatList data={getStage(CardStageENUM.TOOL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(getStage(CardStageENUM.TOOL).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('fossils')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getStage(CardStageENUM.FOSSIL).length}</ThemedText>
          </ThemedView>

          <FlatList data={getStage(CardStageENUM.FOSSIL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: getItemWidth(getStage(CardStageENUM.FOSSIL).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('supporter')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getStage(CardStageENUM.SUPPORTER).length}</ThemedText>
          </ThemedView>

          <FlatList data={getStage(CardStageENUM.SUPPORTER)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.list}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>        
        </>
      }

      {
        showWeak && 
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('weakness')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('weakness_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={GRASS_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('grass')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.GRASS).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.GRASS)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
              <Image source={FIRE_ICON} style={styles.energy}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('fire')}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.FIRE).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.FIRE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('water')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.WATER).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.WATER)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('electric')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.ELECTRIC).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.ELECTRIC)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('psychic')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.PSYCHIC).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.PSYCHIC)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>
                    
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('fight')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.FIGHT).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.FIGHT)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('dark')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.DARK).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.DARK)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('steel')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCardWeak(PokemonTypeENUM.STEEL).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCardWeak(PokemonTypeENUM.STEEL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>        
        </>
      }

      {
        showTop &&
        <>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginTop: 4, marginLeft: 9}}>
              <Image source={CHAMPION_ICON} style={[styles.expansionImage, {width: 58, height: 46, top: -6, marginRight: 24}]}></Image>
              <ThemedText style={[styles.subTitlte, {marginBottom: 36}]}>{i18n.t('top_20')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.textMargin, {marginBottom: 28}]}>{i18n.t('top_20_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="diamond" style={[styles.stageIcon, {color: 'skyblue'}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('rarity')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('rarity')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>
            
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="grass" style={[styles.stageIcon, {top: -5}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('retire_cost')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getRetreatTop20()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="favorite-outline" style={[styles.stageIcon, {color: 'skyblue'}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('health_points')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('health')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="height" style={[styles.stageIcon]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('height')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('height')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="scale" style={[styles.stageIcon, {color: 'skyblue'}]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('weight')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getTop20('weight')}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="bolt" style={[styles.stageIcon]}/>
              <ThemedText style={[styles.subTitlte, {marginBottom: 40}]}>{i18n.t('attack')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={getAttackTop20()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>       
        </>
      }
      {
        showConditions &&
        <>
          <ThemedText style={styles.subTitlte}>{i18n.t('conditions')}</ThemedText>
          <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('conditions_description')}</ThemedText>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_attack_bench')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.ATTACK_BENCH).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.ATTACK_BENCH)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_recoil')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.RECOIL).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.RECOIL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.RECOIL).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>                

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_extra_damage')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.EXTRA_DAMAGE).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCondition(CardSpecialConditionENUM.EXTRA_DAMAGE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ThemedText style={styles.subTitlte}>{i18n.t('condition_resist')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.RESIST).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.RESIST)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_heal')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.HEAL).length}</ThemedText>
          </ThemedView>
    
          <FlatList data={getCondition(CardSpecialConditionENUM.HEAL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_poison')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.POISON).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCondition(CardSpecialConditionENUM.POISON)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.POISON).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_paralyze')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.PARALYZE).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.PARALYZE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.PARALYZE).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_sleep')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.SLEEP).length}</ThemedText>
          </ThemedView>

          <FlatList data={getCondition(CardSpecialConditionENUM.SLEEP)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.SLEEP).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_confusion')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.CONFUSION).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.CONFUSION)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.CONFUSION).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_burned')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.BURNED).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.BURNED)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.BURNED).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_flip')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.FLIP).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.FLIP)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_nothing')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.NOTHING).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.NOTHING)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.NOTHING).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_discard')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.DISCARD).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.DISCARD)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_add')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.ADD).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.ADD)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: collageWith, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_corner')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.CORNER).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.CORNER)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.CORNER).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_withdraw')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.WITHDRAW_CARD).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.WITHDRAW_CARD)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.WITHDRAW_CARD).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_retire')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.RETIRE).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.RETIRE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.RETIRE).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_call')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.CALL).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.CALL)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.CALL).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText style={styles.subTitlte}>{i18n.t('condition_inactive')}</ThemedText>
            <ThemedText style={styles.subTitlte}>{getCondition(CardSpecialConditionENUM.INACTIVE).length}</ThemedText>
          </ThemedView>
          
          <FlatList data={getCondition(CardSpecialConditionENUM.INACTIVE)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={[styles.list, {marginTop: 0}]}
                    style={{width: getItemWidth(getCondition(CardSpecialConditionENUM.INACTIVE).length), borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <RainbowDivider></RainbowDivider>       
        </>
      }

      <ThemedView style={{height: 20}}></ThemedView>
      <ThemedView style={[styles.summary, {marginHorizontal: 0, marginTop: 0, padding: 16}]}>
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
    marginBottom: 40,
    color: 'black',
    paddingHorizontal: 20
  },
  subTitlte: {
    fontSize: 28,
    fontWeight: 'semibold',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 20
  },
  list: {
    width: 'auto', 
    marginTop: 12, 
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
    left: 20,
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
    width: 94,
    height: 50,
    fontSize: 44,
    top: -3,
    left: 32,
    color: 'mediumaquamarine'
  },
  energy: {
    width: 36,
    height: 36,
    marginRight: 12,
    top: -3
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