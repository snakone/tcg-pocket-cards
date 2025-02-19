import { Platform, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TradeItem } from '@/shared/definitions/interfaces/global.interfaces';
import { CardGridStyles, CreateScreenStyles } from '@/shared/styles/component.styles';
import { SvgTradePassSymbol } from '@/components/ui/IconSymbol';
import { TRADE_POINTS } from '@/shared/definitions/sentences/path.sentences';
import { TRADE_COST_MAP } from '@/shared/definitions/utils/constants';
import { CardRarityENUM } from '@/shared/definitions/enums/card.enums';
import { useI18n } from '@/core/providers/LanguageProvider';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { AppState } from '@/hooks/root.reducer';

interface TradeUserItemProps {
  item: TradeItem,
  rarity: CardRarityENUM | undefined,
  styles?: any,
  state: AppState
}

export default function TradeUserItem({item, rarity, styles, state}: TradeUserItemProps) {
  const {i18n} = useI18n();

  if (!item) { return; }
  
  return (
    <ThemedView style={[tradeItemStyles.item, styles]}>
      <ThemedView style={{flex: 1}}>
        <ThemedText style={{marginBottom: 12, color: 'none'}}>{item?.title || i18n.t('trade') + ' ' + (item.id)}</ThemedText>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <ThemedView style={{width: '38%'}}>
            {
              item.desired.map((item, i) => (
                item ? <Image style={[
                  CardGridStyles.image,
                  CreateScreenStyles.popularImage, {
                    left: i * 16,
                    width: 55,
                    opacity: 1 - 0.10 * i,
                    zIndex: Math.round((1 / (i + 1) * 100)),
                  }
                ]} 
                source={getImageLanguage116x162(state?.settingsState.language, item)}
                key={i}/> : <ThemedView style={[
                  CardGridStyles.image,
                  CreateScreenStyles.popularImage, {
                    left: i * 16,
                    width: 55,
                    opacity: 1 - 0.10 * i,
                    zIndex: Math.round((1 / (i + 1) * 100)),
                  }
                ]} key={i}/>
              ))
            }
          </ThemedView>
          <ThemedView style={[{width: '24%', top: 4}, Platform.OS !== 'web' && {left: 15}]}>
            {
              SvgTradePassSymbol(Platform.OS !== 'web' ? {width: 45} : {})
            }
          </ThemedView>
          <ThemedView style={{width: '38%'}}>
            {
              item.offers.map((offer, i) => (
                offer ? <Image style={[
                  CardGridStyles.image,
                  CreateScreenStyles.popularImage, {
                    left: i * 16,
                    width: 55,
                    opacity: 1 - 0.10 * i,
                    zIndex: Math.round((1 / (i + 1) * 100)),
                  }
                ]} 
                source={getImageLanguage116x162(state?.settingsState.language, offer)}
                key={i}/> : <ThemedView style={[
                  CardGridStyles.image,
                  CreateScreenStyles.popularImage, {
                    left: i * 16,
                    width: 55,
                    opacity: 1 - 0.10 * i,
                    zIndex: Math.round((1 / (i + 1) * 100)),
                  }
                ]} key={i}/>
              ))
            }
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={[tradeItemStyles.token, {
          borderColor: !item?.valid ? 'goldenrod' : 'transparent', 
          borderWidth: !item.valid  ? 1 : 0, 
        }]}>
        <Image source={TRADE_POINTS} style={{width: 24, height: 24, left: 8, position: 'absolute', top: 2}}/>
        <ThemedText style={{top: -1, left: 12}}>{rarity !== undefined && (TRADE_COST_MAP as any)[rarity] || 0}</ThemedText>
      </ThemedView>
    </ThemedView> 
  )
}

const tradeItemStyles = StyleSheet.create({
  item: {
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    paddingBottom: 20,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px', 
    borderRadius: 8,
    marginBottom: 45,
    minHeight: 166,
    width: '100%',
    backgroundColor: 'white'
  },
  token: {
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 16px',
    position: 'absolute',
    width: 80,
    height: 30,
    borderRadius: 20,
    bottom: -15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(241 241 241)',
    left: Platform.OS !== 'web' ? '41.5%' : '39%',
    flexDirection: 'row',
    gap: 6
  }
});