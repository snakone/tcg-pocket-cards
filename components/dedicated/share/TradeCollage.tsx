import { useCallback, useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { FlatList, View } from "react-native";
import React from "react";
import { Image, ImageBackground } from 'expo-image';
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CardGridStyles, TabsMenuStyles } from "@/shared/styles/component.styles";
import { COIN_MAP, DECK_BACKGROUND_MAP, FRONTEND_URL, TRADE_COST_MAP } from "@/shared/definitions/utils/constants";
import { AvatarIcon, TradeItem, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { DISCORD_LOGO, SALE_CARD, TRADE_POINTS } from "@/shared/definitions/sentences/path.sentences";
import { CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { MaterialIcons } from "@expo/vector-icons";
import { useI18n } from "@/core/providers/LanguageProvider";
import { Colors } from "@/shared/definitions/utils/colors";
import { AppState } from "@/hooks/root.reducer";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { getImageLanguage } from "@/shared/definitions/utils/functions";

const COLLAGE_WIDTH = 1920;

interface TradeCollageProps {
  trade: TradeItem | undefined,
  profile: UserProfile,
  background: AvatarIcon | undefined,
  rarity?: CardRarityENUM | undefined,
  state: AppState
}

export default function TradeCollage({
  trade,
  profile, 
  background,
  rarity,
  state
}: TradeCollageProps) {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [data, setData] = useState<TradeItem | undefined>(trade);
  const {i18n} = useI18n();
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  if (status === null) {
    requestPermission();
  }

  useEffect(() => {
    setData(trade);
  }, [trade]);

  const renderOffer = useCallback(({item, index}: {item: any, index: number}) => (
    item && <View style={[CardGridStyles.imageContainer, {overflow: 'visible', marginHorizontal: 12}]}>
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 20, boxShadow: 'rgba(0, 0, 0, 0.5) 14px 6px 20px'}}>
        <View>
          { item && 
          <>
            <Image accessibilityLabel={item} 
                  style={[
                CardGridStyles.image, 
                {width: 354}
              ]} 
            source={getImageLanguage(lang, item)}/>        
          </>
          }
          <ThemedView style={{position: 'absolute', top: -24, right: -24}}>
            <Image source={SALE_CARD} style={{width: 96, height: 96}}/>
          </ThemedView>
        </View>
      </View>
    </View>
  ), []);

  const renderDesired = useCallback(({item, index}: {item: any, index: number}) => (
    item && <View style={[CardGridStyles.imageContainer, {overflow: 'visible', marginHorizontal: 12}]}>
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 20, boxShadow: 'rgba(0, 0, 0, 0.5) 14px 6px 20px'}}>
        <View>
          { item && 
          <>
            <Image accessibilityLabel={'desired'} 
                  style={[
                CardGridStyles.image, 
                {width: 354}
              ]} 
            source={getImageLanguage(lang, item)}/>        
          </>
          }
          <ThemedView style={tradeCollageStyles.like}>
            <MaterialIcons name={"favorite-outline"} style={{color: 'white', fontSize: 45, top: 1}}></MaterialIcons>
          </ThemedView>
        </View>
      </View>
    </View>
  ), []);

  return (
    <>
      <View style={{width: COLLAGE_WIDTH}}>
        <ImageBackground source={background && DECK_BACKGROUND_MAP[background.value]} 
                         contentFit="cover" 
                         style={{padding: 20}}>
          {/* DISCORD */}
          <ThemedView style={[tradeCollageStyles.footerContent, {position: 'absolute', left: 20, top: 20, height: 50}]}>
            <Image source={DISCORD_LOGO} style={{width: 50, height: 28, left: -5, top: 1}}/>
            <ThemedText style={[tradeCollageStyles.text, tradeCollageStyles.discordText]}>{trade?.discord}</ThemedText>
          </ThemedView>
          {/* FRIEND ID */}
          <ThemedView style={[tradeCollageStyles.container, {marginTop: 0, marginBottom: 40, width: '25%', marginInline: 'auto', height: 50}]}>
            <ThemedText style={[tradeCollageStyles.text, {fontWeight: 'bold', top: -2}]}>{trade?.tcg.join(' - ')}</ThemedText>
          </ThemedView>
          {/* LEYEND */}
          <ThemedView style={[tradeCollageStyles.container, tradeCollageStyles.leyend]}>
            <ThemedView style={[tradeCollageStyles.like, {position: 'relative', top: 0, left: -4, width: 25, height: 25, marginRight: 6}]}>
              <MaterialIcons name={"favorite-outline"} style={{color: 'white', fontSize: 19, top: 0}}></MaterialIcons>
            </ThemedView>
            <ThemedText style={[tradeCollageStyles.text, {marginLeft: 2, top: -3, fontSize: 18, width: 75, textAlign: 'center'}]}>
              {i18n.t('i_search')}
            </ThemedText>

            <ThemedView style={tradeCollageStyles.separator}></ThemedView>

            <ThemedView style={{position: 'relative', top: 0, right: 0}}>
              <Image source={SALE_CARD} style={{width: 32, height: 32}}/>
            </ThemedView>
            <ThemedText style={[tradeCollageStyles.text, {marginLeft: 6, top: -2, fontSize: 18, width: 106, textAlign: 'center'}]}>
              {i18n.t('i_offer')}
            </ThemedText>
          </ThemedView>
          {/* TRADE POINTS */}
          <ThemedView style={[tradeCollageStyles.container, tradeCollageStyles.tradePoints]}>
            <Image source={TRADE_POINTS} 
                   style={[TabsMenuStyles.avatar, {width: 28, height: 28, marginRight: 16}]}>
            </Image>
            <ThemedText style={[tradeCollageStyles.text, {marginLeft: 0, top: -2, fontSize: 22}]}>
              {rarity !== undefined && (TRADE_COST_MAP as any)[rarity] || 0}
            </ThemedText>
          </ThemedView>
          <FlatList data={data?.desired}
                    renderItem={renderDesired}
                    numColumns={5}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}
                    style={{borderRadius: 8, overflow: 'visible'}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>

          <FlatList data={data?.offers}
                    renderItem={renderOffer}
                    numColumns={5}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    style={{borderRadius: 8, overflow: 'visible'}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}
                    ListFooterComponent={
                      <ThemedView style={tradeCollageStyles.container}>
                        <Image source={COIN_MAP[profile.coin]} 
                               style={[TabsMenuStyles.avatar, {width: 40, height: 40, marginRight: 20, top: 1}]}>
                        </Image>
                        <ThemedText style={[tradeCollageStyles.text, {top: -2}]}>
                          {profile.name || 'Username'} - TCG Pocket Cards - {FRONTEND_URL}
                        </ThemedText>
                      </ThemedView>
                  }/>
        </ImageBackground>
      </View>
    </>
  );
}

export const tradeCollageStyles = StyleSheet.create({
  title: {
    fontSize: 54, 
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'black'
  },
  container: {
    marginTop: 20,
    width: 1920 - 40,
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 15,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  footerContent: {
    top: -1,
    marginRight: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(114 137 218)',
    paddingHorizontal: 16,
    borderRadius: 12
  },
  text: {
    textAlign: 'right', 
    fontSize: 32, 
    color: 'black',
    top: -1
  },
  like: {
    backgroundColor: 'rgb(255 81 111)',
    padding: 6,
    borderRadius: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center', 
    width: 60,
    height: 60,
    display: 'flex',
    top: -8,
    right: -8,
  },
  discordText: {
    fontWeight: 'bold',
    marginLeft: 0,
    padding: 6,
    color: 'white',
    top: -4
  },
  tradePoints: {
    marginTop: 0,
    marginBottom: 20, 
    width: 108, 
    position: 'absolute', 
    right: 20, 
    height: 50
  },
  leyend: {
    marginTop: 0,
    marginBottom: 20, 
    width: 240, 
    position: 'absolute', 
    right: 152, 
    height: 50
  },
  separator: {
    width: 2, 
    height: 25, 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)', 
    backgroundColor: Colors.light.skeleton, 
    marginLeft: 12, 
    marginRight: 10
  }
});