import { Platform, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TradeItem } from '@/shared/definitions/interfaces/global.interfaces';
import { CardGridStyles, CreateScreenStyles } from '@/shared/styles/component.styles';
import { SvgTradePassSymbol } from '@/components/ui/IconSymbol';
import { BACKWARD_CARD, TRADE_POINTS } from '@/shared/definitions/sentences/path.sentences';
import { TRADE_COST_MAP } from '@/shared/definitions/utils/constants';
import { CardRarityENUM } from '@/shared/definitions/enums/card.enums';
import { useI18n } from '@/core/providers/LanguageProvider';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { AppState } from '@/hooks/root.reducer';

interface TradeUserItemProps {
  item: TradeItem,
  rarity: CardRarityENUM | undefined,
  styles?: any,
  state: AppState,
  share?: boolean
}

export default function TradeUserItem({item, rarity, styles, state, share}: TradeUserItemProps) {
  const {i18n} = useI18n();

  if (!item) { return; }
  
  return (
    <ThemedView style={[tradeItemStyles.item, styles, {
        borderColor: !item?.valid ? 'goldenrod' : 'transparent', 
        borderWidth: !item.valid  ? 1 : 0}, 
        {minHeight: 60, marginBottom: 16, paddingVertical: 0, paddingHorizontal: 0},
        Platform.OS !== 'web' && {height: share ? 148 : 101, overflow: 'hidden'}
      ]}>
      <ThemedView style={{overflow: 'hidden', padding: 0}}>
        <ThemedText style={[tradeItemStyles.title, share && {marginBottom: 14}, 
          Platform.OS !== 'web' && {marginBottom: 12}]}>{item?.title || i18n.t('trade') + ' ' + (item.id)}
        </ThemedText>
        <ThemedView style={[tradeItemStyles.container, {height: share ? 101 : 46, paddingHorizontal: 22}]}>
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
                source={item ? getImageLanguage116x162(state?.settingsState.language, item) : BACKWARD_CARD}
                placeholder={BACKWARD_CARD}
                key={i}/>
              ))
            }
          </ThemedView>
          <ThemedView style={[{
            width: '25%', top: 4, left: -2}, 
            Platform.OS !== 'web' && {left: 15}, 
            share && {top: 10}
          ]}>
            {
              SvgTradePassSymbol(
                Platform.OS !== 'web' &&
                {width: 45, height: 52, transform: [{scale: 0.6}], top: -4}
              )
            }
          </ThemedView>
          <ThemedView style={{width: '38%', borderBottomLeftRadius: 4}}>
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
                source={offer ? getImageLanguage116x162(state?.settingsState.language, offer) : BACKWARD_CARD}
                placeholder={BACKWARD_CARD}
                key={i}/>
              ))
            }
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={[tradeItemStyles.token]}>
        <Image source={TRADE_POINTS} style={{width: 20, height: 20, left: 0, position: 'absolute', top: 2}}/>
        <ThemedText style={{top: -1, left: 12, fontSize: 13}}>{rarity !== undefined && (TRADE_COST_MAP as any)[rarity] || 0}</ThemedText>
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
    right: 12
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