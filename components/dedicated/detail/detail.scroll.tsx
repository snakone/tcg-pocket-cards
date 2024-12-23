import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { Colors } from "@/shared/definitions/utils/colors";
import { cardDetailStyles } from "@/shared/styles/component.styles";
import { RARITY_MAP, TYPE_MAP, STAGE_MAP, EXPANSION_MAP, PACK_AMOUNT_MAP } from "@/shared/definitions/utils/contants";
import { getCardPackFrom, isCardPromo, isCardPromoAndBattle, isCardPromoAndNoBattle, isNotBattleCard } from '@/shared/definitions/utils/functions';
import DetailRelatedCards from './detail.related.cards';
import { AppState } from '@/hooks/root.reducer';
import ScrollService from '@/core/services/scroll.service';
import React from 'react';

export default function DetailCardScroll({card, state, scrollService}: {card: Card, state: AppState, scrollService?: ScrollService}) {
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
      <ThemedText style={styles.name}>{card.name}</ThemedText>
      
        {
          RARITY_MAP[card.rarity]?.amount !== 0 ?
            <ThemedView style={styles.rarityContainer}>
              { Array.from({ length: RARITY_MAP[card.rarity]?.amount }).map((_, i) => (
                <Image
                  key={i}
                  source={RARITY_MAP[card.rarity]?.image}
                  style={[styles.rarityItem, card.rarity === 7 && {width: 38}]}
                />
            ))}
            </ThemedView> :
            <ThemedView style={{height: 20}}></ThemedView>
        }
      
      { !!card.flavor && 
        <ThemedView style={cardDetailStyles.itemInfo}>
          <ThemedText style={styles.text}>{card.flavor}</ThemedText>
        </ThemedView>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, styles.artistContainer]}>
        <ThemedView style={cardDetailStyles.expansionContainer}>
          {expansionImage(card)}
        </ThemedView>
        <ThemedView style={[styles.infoValue, {alignItems: 'center', justifyContent: 'center'}]}>
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
                  isCardPromo(card) ? EXPANSION_MAP[card.expansion].amount : PACK_AMOUNT_MAP[card.expansion]
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
          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
            <ThemedView style={styles.infoTitle}>
              <ThemedText style={styles.text}>{i18n.t('promo')}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.infoValue}>
              <ThemedText style={styles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
            </ThemedView>
          </ThemedView>
        }
        {
          (Boolean(card.extra) || card.name === 'Mew') &&
          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
            <ThemedView style={styles.infoTitle}>
              <ThemedText style={styles.text}>{i18n.t('how_to_obtain')}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.infoValue}>
              <ThemedText style={styles.text}>{card.extra}</ThemedText>
            </ThemedView>
          </ThemedView> 
        }
        </>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, styles.artistContainer]}>
        <ThemedView style={styles.infoTitle}>
          <ThemedText style={styles.text}>{i18n.t('illustration')}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoValue}>
          <ThemedText style={styles.text}>{card.artist}</ThemedText>
        </ThemedView>
      </ThemedView>

      { card.ability && 
        <ThemedView style={[cardDetailStyles.itemInfo, styles.artistContainer, {flexWrap: 'wrap'}]}>
          <ThemedView style={styles.infoTitle}>
            <ThemedText style={styles.text}>{i18n.t('ability')}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.infoValue}>
            <ThemedText style={[styles.attackName, styles.abilityName]}>{card.ability.name}</ThemedText>
          </ThemedView>
          <ThemedView style={[styles.attackContainer, {width: '100%', padding: 16, justifyContent: 'center'}]}>
            <ThemedText style={styles.text}>{card.ability.description}</ThemedText>
          </ThemedView>
        </ThemedView>
      }

      { card.attacks && card.attacks?.length > 0 && 
        <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
            <ThemedText style={styles.textWhite}>{i18n.t('attacks')}</ThemedText>
          </ThemedView>

          <ThemedView style={{padding: 16}}>
            {
              card.attacks?.map((att, i) => (
                <ThemedView key={i} style={[
                  styles.attackContainer, 
                  i !== (card.attacks!.length - 1) && {marginBottom: 20}
                ]}>
                  <ThemedView style={styles.attackItem}>
                    <ThemedView style={styles.attackEnergy}>
                      {
                        att.energy.map((energy, j) => (
                          <Image key={j} source={TYPE_MAP[energy].image} style={styles.energy}></Image>
                        ))
                      }
                    </ThemedView>
                    <ThemedText style={styles.attackName}>{att.name}</ThemedText>
                  </ThemedView>

                  { att.damage > 0 && <ThemedText style={styles.attackDamage}>{att.damage}</ThemedText>}

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
          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
                <ThemedView style={styles.infoTitle}>
                  <ThemedText style={styles.text}>{i18n.t('pokemon')}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.infoValue}>
                  <ThemedText style={styles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
            <ThemedView style={styles.infoTitle}>
              <ThemedText style={styles.text}>{i18n.t('type')}</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.infoValue, {justifyContent: 'center', alignItems: 'center'}]}>
              <Image source={TYPE_MAP[card.element].image} style={styles.element}></Image>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
            <ThemedView style={styles.infoTitle}>
              <ThemedText style={styles.text}>{i18n.t('PS')}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.infoValue}>
              <ThemedText style={styles.text}>{card.health}</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
            <ThemedView style={styles.infoTitle}>
              <ThemedText style={styles.text}>{i18n.t('weak')}</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.infoValue, {justifyContent: 'center', alignItems: 'center'}]}>
              <ThemedView style={{flexDirection: 'row', gap: 2, position: 'relative'}}>
                <Image source={card.weak !== null && card.weak !== undefined && TYPE_MAP[card.weak].image} style={styles.element}></Image>
                <ThemedText style={[styles.text, {top: 1, position: 'absolute', left: 25}]}>+20</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
            <ThemedView style={styles.infoTitle}>
              <ThemedText style={styles.text}>{i18n.t('cost_of_retire')}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.retireContainer}>
              {Array.from({ length: card.retreat }).map((_, i) => (
                <Image key={i} source={TYPE_MAP[9].image} style={styles.element}></Image>
              ))}
            </ThemedView>
          </ThemedView>
        </> :
        <>
          { 
            isCardPromoAndNoBattle(card) && 
            <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
              <ThemedView style={styles.infoTitle}>
                <ThemedText style={styles.text}>{i18n.t('promo')}</ThemedText>
              </ThemedView>
              <ThemedView style={styles.infoValue}>
                <ThemedText style={styles.text}>{EXPANSION_MAP[card.expansion].tag}</ThemedText>
              </ThemedView>
            </ThemedView>
          }
          {
            (Boolean(card.extra) || card.name === 'Mew') &&
            <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
              <ThemedView style={styles.infoTitle}>
                <ThemedText style={styles.text}>{i18n.t('how_to_obtain')}</ThemedText>
              </ThemedView>
              <ThemedView style={styles.infoValue}>
                <ThemedText style={styles.text}>{card.extra}</ThemedText>
              </ThemedView>
            </ThemedView> 
          }
          <ThemedView style={[cardDetailStyles.itemInfo, styles.info]}>
                <ThemedView style={styles.infoTitle}>
                  <ThemedText style={styles.text}>{i18n.t('sub_type')}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.infoValue}>
                  <ThemedText style={styles.text}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
          </ThemedView>
        </>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, styles.info, {marginBottom: 30}]}>
        <ThemedView style={styles.infoTitle}>
          <ThemedText style={styles.text}>{i18n.t('serie')}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoValue}>
          <ThemedText style={styles.text}>
            {card.series !== undefined && EXPANSION_MAP[card.series].label}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      { card.related && card.related?.length > 0 &&
        <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
            <ThemedText style={styles.textWhite}>{i18n.t('related_cards')}</ThemedText>
          </ThemedView>

          <ThemedView style={{padding: 16, paddingRight: 0}}>
            <DetailRelatedCards card={card} state={state} scrollService={scrollService}></DetailRelatedCards>
          </ThemedView>
        </ThemedView>
      }

    </ThemedView>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 24,
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
    fontWeight: '600'
  }
});