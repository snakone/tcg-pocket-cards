import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { Colors } from "@/shared/definitions/utils/colors";
import { cardDetailStyles } from "@/shared/styles/component.styles";
import { RARITY_MAP, TYPE_MAP, STAGE_MAP, EXPANSION_MAP, PACK_AMOUNT_MAP, EXPANSION_POINTS_RARITY } from "@/shared/definitions/utils/constants";
import { getCardPackFrom, isCardPromo, isCardPromoAndBattle, isCardPromoAndNoBattle, isNotBattleCard } from '@/shared/definitions/utils/functions';
import DetailRelatedCards from './detail.related.cards';
import { AppState } from '@/hooks/root.reducer';
import ScrollService from '@/core/services/scroll.service';
import { PACK_POINTS } from '@/shared/definitions/sentences/path.sentences';

interface CardDetailScroll {
  card: Card,
  state: AppState,
  scrollService?: ScrollService
}

export default function DetailCardScroll({card, state, scrollService}: CardDetailScroll) {
  const {i18n} = useI18n();

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
    <ThemedView style={{padding: 20, marginBottom: 65, width: '100%'}}>
      <ThemedText style={detailScrollStyles.name}>{card.name}</ThemedText>
      
        {
          RARITY_MAP[card.rarity]?.amount !== 0 ?
            <ThemedView style={detailScrollStyles.rarityContainer}>
              { Array.from({ length: RARITY_MAP[card.rarity]?.amount }).map((_, i) => (
                <Image
                  key={i}
                  source={RARITY_MAP[card.rarity]?.image}
                  style={[detailScrollStyles.rarityItem, card.rarity === 9 && {width: 38}]}
                />
            ))}
            </ThemedView> :
            <ThemedView style={{height: 20}}></ThemedView>
        }
      
      { !!card.flavor && 
        <ThemedView style={cardDetailStyles.itemInfo}>
          <ThemedText style={detailScrollStyles.text}>{card.flavor}</ThemedText>
        </ThemedView>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer]}>
        <ThemedView style={cardDetailStyles.expansionContainer}>
          {expansionImage(card)}
        </ThemedView>
        <ThemedView style={[detailScrollStyles.infoValue, {alignItems: 'center', justifyContent: 'center'}]}>
          <ThemedView style={{flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
            {
              card.expansion !== undefined &&
              <>
                <ThemedView style={[{backgroundColor: EXPANSION_MAP[card.expansion].background}, cardDetailStyles.expansionTag]}>
                  <ThemedText style={{color: EXPANSION_MAP[card.expansion].color, fontWeight: 'bold'}}>
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
            <ThemedView style={detailScrollStyles.infoValue}>
              <ThemedText style={detailScrollStyles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
            </ThemedView>
          </ThemedView>
        }
        {
          (Boolean(card.extra) || (card.name === 'Mew' && card.id === 283)) &&
          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('how_to_obtain')}</ThemedText>
            </ThemedView>
            <ThemedView style={detailScrollStyles.infoValue}>
              <ThemedText style={detailScrollStyles.text}>{card.extra}</ThemedText>
            </ThemedView>
          </ThemedView> 
        }
        </>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer]}>
        <ThemedView style={detailScrollStyles.infoTitle}>
          <ThemedText style={detailScrollStyles.text}>{i18n.t('illustration')}</ThemedText>
        </ThemedView>
        <ThemedView style={detailScrollStyles.infoValue}>
          <ThemedText style={detailScrollStyles.text}>{card.artist}</ThemedText>
        </ThemedView>
      </ThemedView>

      { card.ability && 
        <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.artistContainer, {flexWrap: 'wrap'}]}>
          <ThemedView style={[detailScrollStyles.infoTitle, {width: '39.9%'}]}>
            <ThemedText style={detailScrollStyles.text}>{i18n.t('ability')}</ThemedText>
          </ThemedView>
          <ThemedView style={[detailScrollStyles.infoValue, {boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}]}>
            <ThemedText style={[detailScrollStyles.attackName, detailScrollStyles.abilityName]}>{card.ability.name}</ThemedText>
          </ThemedView>
          <ThemedView style={[detailScrollStyles.attackContainer, {width: '100%', padding: 16, justifyContent: 'center'}]}>
            <ThemedText style={detailScrollStyles.text}>{card.ability.description}</ThemedText>
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
                    <ThemedText style={detailScrollStyles.attackName}>{att.name}</ThemedText>
                  </ThemedView>

                  { att.damage > 0 && <ThemedText style={detailScrollStyles.attackDamage}>{att.damage}</ThemedText>}

                  { att.description && 
                    <ThemedView style={{width: '100%', marginTop: 16}}>
                      <ThemedText style={{fontSize: 12}}>{att.description}</ThemedText>
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
                <ThemedView style={detailScrollStyles.infoValue}>
                  <ThemedText style={detailScrollStyles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('type')}</ThemedText>
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'center'}]}>
              <Image source={TYPE_MAP[card.element].image} style={detailScrollStyles.element}></Image>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('PS')}</ThemedText>
            </ThemedView>
            <ThemedView style={detailScrollStyles.infoValue}>
              <ThemedText style={detailScrollStyles.text}>{card.health}</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('weak')}</ThemedText>
            </ThemedView>
            <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'center'}]}>
              <ThemedView style={{flexDirection: 'row', gap: 2, position: 'relative'}}>
                <Image source={card.weak !== null && card.weak !== undefined && TYPE_MAP[card.weak].image} style={detailScrollStyles.element}></Image>
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
              <ThemedView style={detailScrollStyles.infoValue}>
                <ThemedText style={detailScrollStyles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
              </ThemedView>
            </ThemedView>
          }
          <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
            <ThemedView style={detailScrollStyles.infoTitle}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t('sub_type')}</ThemedText>
            </ThemedView>
            <ThemedView style={detailScrollStyles.infoValue}>
              <ThemedText style={detailScrollStyles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
            </ThemedView>
          </ThemedView>
        </>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info]}>
        <ThemedView style={detailScrollStyles.infoTitle}>
          <ThemedText style={detailScrollStyles.text}>{i18n.t('serie')}</ThemedText>
        </ThemedView>
        <ThemedView style={detailScrollStyles.infoValue}>
          <ThemedText style={detailScrollStyles.text}>
            {card.series !== undefined && EXPANSION_MAP[card.series].label}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {
        EXPANSION_POINTS_RARITY[card.rarity] > 0 && 
        <ThemedView style={[cardDetailStyles.itemInfo, detailScrollStyles.info, {marginBottom: 30}]}>
          <ThemedView style={detailScrollStyles.infoTitle}>
            <ThemedText style={detailScrollStyles.text}>{i18n.t('points')}</ThemedText>
          </ThemedView>
          <ThemedView style={[detailScrollStyles.infoValue, {justifyContent: 'center', alignItems: 'center'}]}>
            <ThemedView style={{flexDirection: 'row', gap: 2, position: 'relative'}}>
              <Image source={PACK_POINTS} style={[detailScrollStyles.element, detailScrollStyles.points]}></Image>
              <ThemedText style={detailScrollStyles.text}>
                {EXPANSION_POINTS_RARITY[card.rarity]}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      }

      { card.related && card.related?.length > 0 &&
        <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
            <ThemedText style={detailScrollStyles.textWhite}>{i18n.t('related_cards')}</ThemedText>
          </ThemedView>

          <ThemedView style={{padding: 16, paddingRight: 0}}>
            <DetailRelatedCards card={card} state={state} scrollService={scrollService}></DetailRelatedCards>
          </ThemedView>
        </ThemedView>
      }

    </ThemedView>
  )
}

export const detailScrollStyles = StyleSheet.create({
  name: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: Colors.light.bold
  },
  rarityContainer: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 30
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
    paddingTop: 4,
    paddingBottom: 5
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
    minWidth: 94
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
    color: Colors.light.bold
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
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row', 
    gap: 6
  },
  abilityName: {
    textAlign: 'center',
    color: 'rgb(165, 7, 17)',
    fontWeight: '600',
    top: -1
  },
  points: {
    width: 14,
    height: 20,
    top: -1,
    left: -22,
    position: 'absolute'
  }
});