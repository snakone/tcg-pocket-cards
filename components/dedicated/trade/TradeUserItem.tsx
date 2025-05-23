import { Platform, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TradeItem } from '@/shared/definitions/interfaces/global.interfaces';
import { CardGridStyles, CreateScreenStyles } from '@/shared/styles/component.styles';
import { SvgTradePassSymbol } from '@/components/ui/IconSymbol';
import { BACKWARD_CARD, TRADE_POINTS } from '@/shared/definitions/sentences/path.sentences';
import { TRADE_COST_MAP } from '@/shared/definitions/utils/constants';
import { useI18n } from '@/core/providers/LanguageProvider';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { LanguageType } from '@/shared/definitions/types/global.types';

interface TradeUserItemProps {
  item: TradeItem,
  styles?: any,
  language: LanguageType,
  share?: boolean
}

export default function TradeUserItem({item, styles, language, share}: TradeUserItemProps) {
  const {i18n} = useI18n();

  if (!item) { return; }
  
  return (
    <ThemedView style={[tradeItemStyles.item, styles, {
        borderColor: !item?.valid ? 'goldenrod' : 'transparent', 
        borderWidth: !item.valid  ? 1 : 0}, 
        {minHeight: 60, marginBottom: 16, paddingVertical: 0, paddingHorizontal: 0},
        Platform.OS !== 'web' && {height: share ? 148 : 97, overflow: 'hidden'}
      ]}>
      <ThemedView style={{overflow: 'hidden', padding: 0}}>
        <ThemedText style={[
          tradeItemStyles.title, 
          share && {marginBottom: 16, paddingHorizontal: 8}
        ]}>{item?.title || i18n.t('trade') + ' ' + (item.id)}
        </ThemedText>
        <ThemedView style={[
          tradeItemStyles.container, 
          {height: share ? 101 : 46, paddingHorizontal: share ? 16 : 22},
          !share && { paddingRight: 25}
        ]}>
          <ThemedView style={{width: '38%'}}>
            {
              item.desired.map((item, i) => (
                <Image style={[
                  CardGridStyles.image,
                  CreateScreenStyles.popularImage, {
                    left: i * 16,
                    width: 50,
                    opacity: 1 - 0.10 * i,
                    zIndex: Math.round((1 / (i + 1) * 100)),
                    transform: [
                      { rotate: `${(i - 2) * 8}deg` },
                    ],
                    top: Math.abs(i - 2) * 4
                  }
                ]} 
                source={item ? {uri: getImageLanguage116x162(language, item)} : BACKWARD_CARD}
                placeholder={BACKWARD_CARD}
                key={i}/>
              ))
            }
          </ThemedView>
          <ThemedView style={[{
            width: '25%', top: 0, left: -3}, 
            Platform.OS !== 'web' && {left: 13}, 
            share && {top: 10}
          ]}>
            {
              SvgTradePassSymbol(
                Platform.OS !== 'web' ?
                {width: 45, height: 52, transform: [{scale: 0.7}], top: 4} :
                share ? {transform: [{scale: 0.8}]} : null
              )
            }
          </ThemedView>
          <ThemedView style={{width: share ? '35%' : '36%', borderBottomLeftRadius: 4}}>
            {
              item.offers.map((offer, i) => (
                <Image style={[
                  CardGridStyles.image,
                  CreateScreenStyles.popularImage, {
                    left: i * 16,
                    width: 50,
                    opacity: 1 - 0.10 * i,
                    zIndex: Math.round((1 / (i + 1) * 100)),
                    transform: [
                      { rotate: `${(i - 2) * 8}deg` },
                    ],
                    top: Math.abs(i - 2) * 4
                  }
                ]} 
                source={offer ? {uri: getImageLanguage116x162(language, offer)} : BACKWARD_CARD}
                placeholder={BACKWARD_CARD}
                key={i}/>
              ))
            }
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={[tradeItemStyles.token, {right: share ? 6 : 10}]}>
        <Image source={TRADE_POINTS} style={{width: 20, height: 20, left: 0, position: 'absolute', top: 2}}/>
        <ThemedText style={{top: -1, left: 12, fontSize: 13}}>{item.rarity && (TRADE_COST_MAP as any)[item.rarity] || 0}</ThemedText>
      </ThemedView>
    </ThemedView> 
  )
}

const tradeItemStyles = StyleSheet.create({
  item: {
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    paddingBottom: 20,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 6px', 
    borderRadius: 8,
    marginBottom: 40,
    minHeight: 152,
    width: '100%',
    backgroundColor: 'white'
  },
  token: {
    position: 'absolute',
    width: 50,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
    opacity: 0.9,
    top: 10,
    right: 10
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    height: 96, 
    overflow: 'hidden', 
    borderBottomLeftRadius: 4
  },
  title: {
    marginBottom: 8, 
    color: 'black', 
    paddingHorizontal: 16, 
    paddingVertical: 12, 
  }
});