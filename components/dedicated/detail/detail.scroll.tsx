import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { useI18n } from "@/core/providers/LanguageProvider";

import { 
  fillWithZeros, 
  getCardPackFrom, 
  getMetrics, 
  isCardPromo, 
  isCardPromoAndBattle, 
  isCardPromoAndNoBattle, 
  isNotBattleCard
} from '@/shared/definitions/utils/functions';

import { AppState } from '@/hooks/root.reducer';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { CardRarityENUM } from '@/shared/definitions/enums/card.enums';
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { cardDetailStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { RARITY_MAP, TYPE_MAP, STAGE_MAP, EXPANSION_MAP, PACK_AMOUNT_MAP } from "@/shared/definitions/utils/constants";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DetailRelatedCards from './detail.related.cards';

interface CardDetailScroll {
  card: Card,
  state: AppState,
  index: number
}

export default function DetailCardScroll({card, state, index}: CardDetailScroll) {
  const {i18n} = useI18n();
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    if (index === 0 && scrollRef.current) {
      scrollRef.current.scrollTo({y: 0, animated: true});
    }
  }, [index]);

  const expansionImage = (card: Card) => {
    const data = getCardPackFrom(card);
    if (data) {
      const {width, height, image} = data;

      return (
        <Image source={image} style={{
          width, 
          height,
          overflow: 'visible'
        }}></Image>
      )
    }
  }

  return (
    <>
      {
        Platform.OS === 'web' ?
        <ScrollView scrollEnabled={index === 1} 
                    ref={scrollRef}
                    style={detailScrollStyles.sheet} 
                    showsVerticalScrollIndicator={false}>
          <ThemedText style={detailScrollStyles.name}>{card.name[lang]}</ThemedText>
          {
            RARITY_MAP[card.rarity]?.amount !== 0 ?
              <ThemedView style={detailScrollStyles.rarityContainer}>
                { Array.from({ length: RARITY_MAP[card.rarity]?.amount as number }).map((_, i) => (
                  <Image
                    key={i}
                    source={RARITY_MAP[card.rarity]?.image}
                    style={[detailScrollStyles.rarityItem, card.rarity === CardRarityENUM.CROWN && {width: 38}]}
                  />
              ))}
              </ThemedView> :
              <ThemedView style={{height: 20}}></ThemedView>
          }
          { !!card.info && 
            <ThemedView style={[
                cardDetailStyles.itemInfo, 
                { marginBottom: 4, 
                  paddingVertical: 8, 
                  flexDirection: 'row', 
                  gap: 12, 
                  justifyContent: 'center', 
                  marginInline: 'auto',
                  borderRadius: 12
                }
              ]}>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {i18n.t('number')} {fillWithZeros(card.pokedex)}
              </ThemedText>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {card.info.type[lang]}
              </ThemedText>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {i18n.t('height')}: {card.info.height[lang]} {getMetrics('height', lang)}
              </ThemedText>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {i18n.t('weight')}: {card.info.weight[lang]} {getMetrics('weight', lang)}
              </ThemedText>
            </ThemedView>
          }
          
          { !!card.flavor && 
            <ThemedView style={cardDetailStyles.itemInfo}>
              <ThemedText style={detailScrollStyles.text}>{card.flavor[lang]}</ThemedText>
            </ThemedView>
          }

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer, {backgroundColor: 'white'}]}>
            <ThemedView style={cardDetailStyles.expansionContainer}>
              {expansionImage(card)}
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'center', justifyContent: 'center'}]}>
              <ThemedView style={{flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
                {
                  card.expansion !== undefined &&
                  <>
                    <ThemedView style={[
                      {backgroundColor: EXPANSION_MAP[card.expansion].background}, 
                      cardDetailStyles.expansionTag
                    ]}>
                      <ThemedText style={{color: EXPANSION_MAP[card.expansion].color, fontWeight: 'bold', top: -1}}>
                        { card.series !== undefined && EXPANSION_MAP[card.expansion].tag}
                      </ThemedText>
                    </ThemedView> 
                    <ThemedText style={{fontWeight: 600}}>{card.number} / {
                      isCardPromo(card) ? EXPANSION_MAP[card.expansion].promo_amount : PACK_AMOUNT_MAP[card.expansion]
                    }</ThemedText>            
                  </>
                }
              </ThemedView>
            </ThemedView>
          </ThemedView>

          {
            <>
            { 
              isCardPromoAndBattle(card) && 
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('promo')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
                </ThemedView>
              </ThemedView>
            }
            {
              (Boolean(card.extra) || (card.name.en === 'Mew' && card.id === 283)) &&
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('how_to_obtain')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{card.extra && card.extra[lang]}</ThemedText>
                </ThemedView>
              </ThemedView> 
            }
            </>
          }

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('illustration')}</ThemedText>
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
              <ThemedText style={detailScrollStyles.text}>{card.artist}</ThemedText>
            </ThemedView>
          </ThemedView>

          { card.ability && 
            <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer, {flexWrap: 'wrap'}]}>
              <ThemedView style={[detailScrollStyles.infoTitle, {width: '39.9%'}]}>
                <ThemedText style={detailScrollStyles.text}>{i18n.t('ability')}</ThemedText>
              </ThemedView>
              <ThemedView style={[detailScrollStyles.infoValue, {boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}]}>
                <ThemedText style={[detailScrollStyles.attackName, detailScrollStyles.abilityName]}>{card.ability.name[lang]}</ThemedText>
              </ThemedView>
              <ThemedView style={[detailScrollStyles.attackContainer, {width: '100%', padding: 16, justifyContent: 'center'}]}>
                <ThemedText style={[detailScrollStyles.text, {textAlign: 'left'}]}>{card.ability.description[lang]}</ThemedText>
              </ThemedView>
            </ThemedView>
          }

          { card.attacks && card.attacks?.length > 0 && 
            <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
              <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
                <ThemedText style={detailScrollStyles.textWhite}>{i18n.t('attacks')}</ThemedText>
              </ThemedView>

              <ThemedView style={{padding: 16}}>
                {
                  card.attacks?.map((att, i) => (
                    <ThemedView key={i} style={[
                      detailScrollStyles.attackContainer, 
                      i !== (card.attacks!.length - 1) && {marginBottom: 20}
                    ]}>
                      <ThemedView style={detailScrollStyles.attackItem}>
                        <ThemedView style={detailScrollStyles.attackEnergy}>
                          {
                            att.energy.map((energy, j) => (
                              <Image key={j} source={TYPE_MAP[energy].image} style={detailScrollStyles.energy}></Image>
                            ))
                          }
                        </ThemedView>
                        <ThemedText style={detailScrollStyles.attackName}>{att.name[lang]}</ThemedText>
                      </ThemedView>

                      { att.damage > 0 && <ThemedText style={detailScrollStyles.attackDamage}>{att.damage}</ThemedText>}

                      { att.description && 
                        <ThemedView style={{width: '100%', marginTop: 16}}>
                          <ThemedText style={{fontSize: 12}}>{att.description[lang]}</ThemedText>
                        </ThemedView>
                      }
                    </ThemedView>
                  ))
                }
              </ThemedView>
            </ThemedView>
          }

          { !isNotBattleCard(card) ? 
            <> 
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('pokemon')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('type')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'flex-start'}]}>
                  <Image source={TYPE_MAP[card.element].image} style={detailScrollStyles.element}></Image>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('PS')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{card.health}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('weak')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'flex-start'}]}>
                  <ThemedView style={{flexDirection: 'row', gap: 2, position: 'relative'}}>
                    <Image source={card.weak && TYPE_MAP[card.weak].image} style={detailScrollStyles.element}></Image>
                    <ThemedText style={[detailScrollStyles.text, {top: 1, position: 'absolute', left: 25}]}>+20</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('cost_of_retire')}</ThemedText>
                </ThemedView>
                <ThemedView style={detailScrollStyles.retireContainer}>
                  {Array.from({ length: card.retreat }).map((_, i) => (
                    <Image key={i} source={TYPE_MAP[9].image} style={detailScrollStyles.element}></Image>
                  ))}
                </ThemedView>
              </ThemedView>
            </> :
            <>
              { 
                isCardPromoAndNoBattle(card) && 
                <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                  <ThemedView style={detailScrollStyles.infoTitle}>
                    <ThemedText style={detailScrollStyles.text}>{i18n.t('promo')}</ThemedText>
                  </ThemedView>
                  <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                    <ThemedText style={detailScrollStyles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
                  </ThemedView>
                </ThemedView>
              }
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('sub_type')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
              </ThemedView>
            </>
          }

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info, {marginBottom: 30}]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('serie')}</ThemedText>
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
              <ThemedText style={detailScrollStyles.text}>
                {card.series !== undefined && EXPANSION_MAP[card.series].label}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          { card.related && card.related?.length > 0 &&
            <>
              <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
                <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
                  <ThemedText style={[detailScrollStyles.textWhite, {paddingVertical: 8}]}>{i18n.t('related_cards')}</ThemedText>
                </ThemedView>

                <ThemedView style={{padding: 0}}>
                  <DetailRelatedCards card={card} 
                                      state={state}/>
                </ThemedView>
              </ThemedView>
              <ThemedText style={{fontSize: 11, textAlign: 'right', top: -18}}>{i18n.t('press_to_click')}</ThemedText>           
            </>
          }

        </ScrollView> :
        <BottomSheetScrollView scrollEnabled={index === 1} 
                               style={detailScrollStyles.sheet} 
                               showsVerticalScrollIndicator={false}
                               ref={scrollRef}>
          <ThemedText style={detailScrollStyles.name}>{card.name[lang]}</ThemedText>
          
            {
              RARITY_MAP[card.rarity]?.amount !== 0 ?
                <ThemedView style={detailScrollStyles.rarityContainer}>
                  { Array.from({ length: RARITY_MAP[card.rarity]?.amount as number }).map((_, i) => (
                    <Image
                      key={i}
                      source={RARITY_MAP[card.rarity]?.image}
                      style={[detailScrollStyles.rarityItem, card.rarity === CardRarityENUM.CROWN && {width: 38}]}
                    />
                ))}
                </ThemedView> :
                <ThemedView style={{height: 20}}></ThemedView>
            }

          { !!card.info && 
            <ThemedView style={[
                cardDetailStyles.itemInfo, 
                { marginBottom: 4, 
                  paddingVertical: 8, 
                  flexDirection: 'row', 
                  gap: 12, 
                  justifyContent: 'center', 
                  marginInline: 'auto',
                  borderRadius: 12
                }
              ]}>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {i18n.t('number')} {fillWithZeros(card.pokedex)}
              </ThemedText>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {card.info.type[lang]}
              </ThemedText>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {i18n.t('height')}: {card.info.height[lang]} {getMetrics('height', lang)}
              </ThemedText>
              <ThemedText style={[detailScrollStyles.text, {fontSize: 10}]}>
                {i18n.t('weight')}: {card.info.weight[lang]} {getMetrics('weight', lang)}
              </ThemedText>
            </ThemedView>
          }
          
          { !!card.flavor && 
            <ThemedView style={cardDetailStyles.itemInfo}>
              <ThemedText style={detailScrollStyles.text}>{card.flavor[lang]}</ThemedText>
            </ThemedView>
          }

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer, {backgroundColor: 'white'}]}>
            <ThemedView style={cardDetailStyles.expansionContainer}>
              {expansionImage(card)}
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'center', justifyContent: 'center'}]}>
              <ThemedView style={{flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
                {
                  card.expansion !== undefined &&
                  <>
                    <ThemedView style={[
                      {backgroundColor: EXPANSION_MAP[card.expansion].background}, 
                      cardDetailStyles.expansionTag
                    ]}>
                      <ThemedText style={{color: EXPANSION_MAP[card.expansion].color, fontWeight: 'bold', top: -1}}>
                        { card.series !== undefined && EXPANSION_MAP[card.expansion].tag}
                      </ThemedText>
                    </ThemedView> 
                    <ThemedText style={{fontWeight: 600}}>{card.number} / {
                      isCardPromo(card) ? EXPANSION_MAP[card.expansion].promo_amount : PACK_AMOUNT_MAP[card.expansion]
                    }</ThemedText>            
                  </>
                }
              </ThemedView>
            </ThemedView>
          </ThemedView>

          {
            <>
            { 
              isCardPromoAndBattle(card) && 
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('promo')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
                </ThemedView>
              </ThemedView>
            }
            {
              (Boolean(card.extra) || (card.name.en === 'Mew' && card.id === 283)) &&
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('how_to_obtain')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{card.extra && card.extra[lang]}</ThemedText>
                </ThemedView>
              </ThemedView> 
            }
            </>
          }

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('illustration')}</ThemedText>
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
              <ThemedText style={detailScrollStyles.text}>{card.artist}</ThemedText>
            </ThemedView>
          </ThemedView>

          { card.ability && 
            <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer, {flexWrap: 'wrap'}]}>
              <ThemedView style={[detailScrollStyles.infoTitle, {width: '39.9%'}]}>
                <ThemedText style={detailScrollStyles.text}>{i18n.t('ability')}</ThemedText>
              </ThemedView>
              <ThemedView style={[detailScrollStyles.infoValue, {boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}]}>
                <ThemedText style={[detailScrollStyles.attackName, detailScrollStyles.abilityName]}>{card.ability.name[lang]}</ThemedText>
              </ThemedView>
              <ThemedView style={[detailScrollStyles.attackContainer, {width: '100%', padding: 16, justifyContent: 'center'}]}>
                <ThemedText style={[detailScrollStyles.text, {textAlign: 'left'}]}>{card.ability.description[lang]}</ThemedText>
              </ThemedView>
            </ThemedView>
          }

          { card.attacks && card.attacks?.length > 0 && 
            <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
              <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
                <ThemedText style={detailScrollStyles.textWhite}>{i18n.t('attacks')}</ThemedText>
              </ThemedView>

              <ThemedView style={{padding: 16}}>
                {
                  card.attacks?.map((att, i) => (
                    <ThemedView key={i} style={[
                      detailScrollStyles.attackContainer, 
                      i !== (card.attacks!.length - 1) && {marginBottom: 20}
                    ]}>
                      <ThemedView style={detailScrollStyles.attackItem}>
                        <ThemedView style={detailScrollStyles.attackEnergy}>
                          {
                            att.energy.map((energy, j) => (
                              <Image key={j} source={TYPE_MAP[energy].image} style={detailScrollStyles.energy}></Image>
                            ))
                          }
                        </ThemedView>
                        <ThemedText style={detailScrollStyles.attackName}>{att.name[lang]}</ThemedText>
                      </ThemedView>

                      { att.damage > 0 && <ThemedText style={detailScrollStyles.attackDamage}>{att.damage}</ThemedText>}

                      { att.description && 
                        <ThemedView style={{width: '100%', marginTop: 16}}>
                          <ThemedText style={{fontSize: 12}}>{att.description[lang]}</ThemedText>
                        </ThemedView>
                      }
                    </ThemedView>
                  ))
                }
              </ThemedView>
            </ThemedView>
          }

          { !isNotBattleCard(card) ? 
            <> 
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('pokemon')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('type')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'flex-start'}]}>
                  <Image source={TYPE_MAP[card.element].image} style={detailScrollStyles.element}></Image>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('PS')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{card.health}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('weak')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'flex-start'}]}>
                  <ThemedView style={{flexDirection: 'row', gap: 2, position: 'relative'}}>
                    <Image source={card.weak && TYPE_MAP[card.weak].image} style={detailScrollStyles.element}></Image>
                    <ThemedText style={[detailScrollStyles.text, {top: 1, position: 'absolute', left: 25}]}>+20</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('cost_of_retire')}</ThemedText>
                </ThemedView>
                <ThemedView style={detailScrollStyles.retireContainer}>
                  {Array.from({ length: card.retreat }).map((_, i) => (
                    <Image key={i} source={TYPE_MAP[9].image} style={detailScrollStyles.element}></Image>
                  ))}
                </ThemedView>
              </ThemedView>
            </> :
            <>
              { 
                isCardPromoAndNoBattle(card) && 
                <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                  <ThemedView style={detailScrollStyles.infoTitle}>
                    <ThemedText style={detailScrollStyles.text}>{i18n.t('promo')}</ThemedText>
                  </ThemedView>
                  <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                    <ThemedText style={detailScrollStyles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
                  </ThemedView>
                </ThemedView>
              }
              <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
                <ThemedView style={detailScrollStyles.infoTitle}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t('sub_type')}</ThemedText>
                </ThemedView>
                <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
              </ThemedView>
            </>
          }

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info, {marginBottom: 30}]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('serie')}</ThemedText>
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'flex-start'}]}>
              <ThemedText style={detailScrollStyles.text}>
                {card.series !== undefined && EXPANSION_MAP[card.series].label}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          { card.related && card.related?.length > 0 &&
          <>
            <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden', marginBottom: Platform.OS === 'android' ? 100 : 96}]}>
              <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
                <ThemedText style={[detailScrollStyles.textWhite]}>{i18n.t('related_cards')}</ThemedText>
              </ThemedView>

              <ThemedView style={{padding: 0}}>
                <DetailRelatedCards card={card} 
                                    state={state}/>
              </ThemedView>
            </ThemedView>
            <ThemedText style={{fontSize: 11, textAlign: 'right', top: Platform.OS === 'android' ? -88 : -18}}>
              {i18n.t('press_to_click')}
            </ThemedText>          
          </>
          }

        </BottomSheetScrollView>
      }
    </>
  )
}

export const detailScrollStyles = StyleSheet.create({
  name: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 16,
    color: Colors.light.bold
  },
  rarityContainer: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 26
  },
  rarityItem: { 
    width: 25,
    height: 25
  },
  artistContainer: {
    overflow: 'hidden',
    padding: 0,
    flexDirection: 'row',
    borderRadius: 12
  },
  artistLeft: {
    width: '35%', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
    zIndex: 100
  },
  artistRight: {
    backgroundColor: 'white', 
    width: '65%',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  text: {
    textAlign: 'center', 
    fontSize: 13
  },
  textWhite: {
    textAlign: 'center', 
    fontSize: 13,
    backgroundColor: 'white',
    paddingVertical: 5,
    color: Colors.light.bold
  },
  attackContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexWrap: 'wrap'
  },
  attackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  attackEnergy: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 114
  },
  energy: {
    width: 18, 
    height: 18, 
    top: 1, 
    marginRight: 5
  },
  attackName: {
    fontSize: 16,
    marginLeft: 16,
    color: Colors.light.bold,
    fontWeight: 'bold'
  },
  attackDamage: {
    fontSize: 16,
    color: Colors.light.bold,
    textAlign: 'right'
  },
  info: {
    overflow: 'hidden',
    padding: 0, 
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 10
  },
  infoTitle: {
    width: '40%',
    paddingVertical: 6,
    paddingHorizontal: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    zIndex: 100,
    justifyContent: 'center',
  },
  infoValue: {
    backgroundColor: 'white',
    width: '60%',
    paddingVertical: 6,
    paddingHorizontal: 20
  },
  element: {
    width: 18,
    height: 18,
    top: 1
  },
  retireContainer: {
    backgroundColor: 'white', 
    width: '60%', 
    paddingVertical: 6, 
    paddingHorizontal: 20, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flexDirection: 'row', 
    gap: 6
  },
  abilityName: {
    textAlign: 'center',
    color: 'rgb(165, 7, 17)',
    fontWeight: '600',
    top: -1,
    fontSize: 15
  },
  points: {
    width: 14,
    height: 20,
    top: -1,
    left: -22,
    position: 'absolute'
  },
  sheet: {
    padding: 20,
    marginBottom: 16,
    width: '100%',
    paddingBottom: 64,
    paddingTop: 0
  }
});