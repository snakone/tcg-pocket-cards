import { useCallback, useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { FlatList, View } from "react-native";
import React from "react";
import { Image, ImageBackground } from 'expo-image';
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CardGridStyles, TabsMenuStyles } from "@/shared/styles/component.styles";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { COIN_MAP, DECK_BACKGROUND_MAP, FRONTEND_URL, TRADE_COST_MAP } from "@/shared/definitions/utils/constants";
import { AvatarIcon, TradeItem, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { DISCORD_LOGO, SALE_CARD, TRADE_POINTS } from "@/shared/definitions/sentences/path.sentences";
import { CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { MaterialIcons } from "@expo/vector-icons";

const COLLAGE_WIDTH = 1920;

interface TradeCollageProps {
  trade: TradeItem | undefined,
  profile: UserProfile,
  background: AvatarIcon | undefined,
  rarity?: CardRarityENUM | undefined
}

export default function TradeCollage({
  trade,
  profile, 
  background,
  rarity
}: TradeCollageProps) {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [data, setData] = useState<TradeItem | undefined>(trade);

  if (status === null) {
    requestPermission();
  }

  useEffect(() => {
    setData(trade);
  }, [trade]);

  const renderItem = useCallback(({item, index}: {item: any, index: number}) => (
    item && <View style={[CardGridStyles.imageContainer, {overflow: 'visible', marginHorizontal: 12}]}>
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 8}}>
        <View>
          { item && 
          <>
            <Image accessibilityLabel={item} 
                  style={[
                CardGridStyles.image, 
                {width: 354}
              ]} 
            source={CARD_IMAGE_MAP[String(item)]}/>        
          </>
          }
          <ThemedView style={{position: 'absolute', top: -24, right: -24, opacity: 0.8}}>
            <Image source={SALE_CARD} style={{width: 96, height: 96}}/>
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
          <ThemedView style={[styles.footer, {marginTop: 0, marginBottom: 20, width: '25%', marginInline: 'auto', height: 50}]}>
            <ThemedText style={[styles.footerText, {fontWeight: 'bold'}]}>{trade?.tcg.join(' - ')}</ThemedText>
          </ThemedView>
          <ThemedView style={[styles.footer, {marginTop: 0, marginBottom: 20, width: 140, position: 'absolute', right: 20, height: 50}]}>
            <Image source={TRADE_POINTS} 
                   style={[TabsMenuStyles.avatar, {width: 36, height: 36, marginRight: 16}]}>
            </Image>
            <ThemedText style={[styles.footerText, {marginLeft: 0, top: -3}]}>
              {rarity !== undefined && (TRADE_COST_MAP as any)[rarity] || 0}
            </ThemedText>
          </ThemedView>
          <ThemedView style={[styles.footerContent, {position: 'absolute', left: 20, top: 20, height: 50}]}>
            <Image source={DISCORD_LOGO} style={{width: 50, height: 28, left: -5, top: 1}}/>
            <ThemedText style={[styles.footerText, styles.discordText]}>{trade?.discord}</ThemedText>
          </ThemedView>
          <View style={[
            CardGridStyles.imageContainer, 
              {
                backgroundColor: 'transparent', 
                marginBottom: 40,
                overflow: 'visible',
                width: 1916 - 40
              }
            ]}>
            <View style={{flex: 1, backgroundColor: 'white', borderRadius: 8}}>
              <View>
                { trade?.desired && 
                <>
                  <Image accessibilityLabel={'desired'} 
                        style={[
                      CardGridStyles.image, 
                      {width: 354}
                    ]} 
                  source={CARD_IMAGE_MAP[String(trade?.desired)]}/>        
                </>
                }
                <ThemedView style={styles.like}>
                  <MaterialIcons name={"favorite-outline"} style={{color: 'white', fontSize: 45, top: 1}}></MaterialIcons>
                </ThemedView>
              </View>
            </View>
          </View>
          <FlatList data={trade?.offers}
                    renderItem={renderItem}
                    numColumns={5}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    style={{borderRadius: 8, overflow: 'visible'}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}
                    ListFooterComponent={
                      <ThemedView style={styles.footer}>
                        <Image source={COIN_MAP[profile.coin]} 
                              style={[TabsMenuStyles.avatar, {width: 40, height: 40, marginRight: 20, top: 1}]}>
                        </Image>
                        <ThemedText style={[styles.footerText, {top: -2}]}>
                          {profile.name || 'Username'} - TCG Pocket Cards - {FRONTEND_URL}
                        </ThemedText>
                      </ThemedView>
                  }/>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 54, 
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'black'
  },
  footer: {
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
  footerText: {
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
    opacity: 0.8
  },
  discordText: {
    fontWeight: 'bold',
    marginLeft: 0,
    padding: 6,
    color: 'white',
    top: -4
  }
});