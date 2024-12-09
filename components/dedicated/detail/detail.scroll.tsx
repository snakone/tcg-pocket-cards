import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { Colors } from "@/shared/definitions/utils/colors";
import { cardDetailStyles } from "@/shared/styles/component.styles";
import { RARITY_MAP, TYPE_MAP, STAGE_MAP, SERIES_MAP } from "@/shared/definitions/utils/contants";

export default function DetailCardScroll({card}: {card: Card}) {
  const {i18n} = useI18n();

  return (
    <ThemedView style={{padding: 20, marginBottom: 65}}>
      <ThemedText style={styles.name}>{card.name}</ThemedText>
      <ThemedView style={styles.rarityContainer}>
        {Array.from({ length: RARITY_MAP[card.rarity]?.amount }).map((_, i) => (
        <Image
          key={i}
          source={RARITY_MAP[card.rarity]?.image}
          style={[styles.rarityItem, card.rarity === 7 && {width: 38}]}
        />
      ))}
      </ThemedView>

      { !!card.flavor && 
        <ThemedView style={cardDetailStyles.itemInfo}>
          <ThemedText style={styles.text}>{card.flavor}</ThemedText>
        </ThemedView>
      }

      <ThemedView style={[cardDetailStyles.itemInfo, styles.artistContainer]}>
        <ThemedView style={styles.artistLeft}>
          <ThemedText style={styles.text}>{i18n.t('illustration')}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.artistRight}>
          <ThemedText style={styles.text}>{card.artist}</ThemedText>
        </ThemedView>
      </ThemedView>

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
            <Image source={card.weak && TYPE_MAP[card.weak].image} style={styles.element}></Image>
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

      <ThemedView style={[cardDetailStyles.itemInfo, styles.info, {marginBottom: 30}]}>
        <ThemedView style={styles.infoTitle}>
          <ThemedText style={styles.text}>{i18n.t('serie')}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoValue}>
          <ThemedText style={styles.text}>
            {card.series !== undefined && SERIES_MAP[card.series].label}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={[cardDetailStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
        <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
          <ThemedText style={styles.textWhite}>{i18n.t('related_cards')}</ThemedText>
        </ThemedView>

        <ThemedView style={{padding: 16}}>
          <ThemedText>CARDS</ThemedText>
        </ThemedView>
      </ThemedView>

    </ThemedView>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 4,
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
    zIndex: 100
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
  }
});