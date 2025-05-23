import { useCallback, useContext, useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { FlatList, View } from "react-native";
import React from "react";
import { Image, ImageBackground } from 'expo-image';
import { StyleSheet } from "react-native";
import Svg, { Polygon, Text } from "react-native-svg";

import { AppContext } from "@/app/_layout";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CardGridStyles, TabsMenuStyles } from "@/shared/styles/component.styles";
import { AvatarIcon, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { COIN_MAP, DECK_BACKGROUND_MAP, FRONTEND_URL, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { filterUniqueItems, getImageLanguage, getImageLanguageForGraphic } from "@/shared/definitions/utils/functions";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

const COLLAGE_WIDTH = 1920;

interface DeckCollageProps {
  deck: Card[],
  name: string,
  element: {[key: string]: boolean | null},
  profile: UserProfile,
  background: AvatarIcon | undefined,
  duplicated: boolean,
  horizontal: boolean
}

export default function DeckCollage({
  deck, 
  name, 
  element, 
  profile, 
  background,
  duplicated,
  horizontal
}: DeckCollageProps) {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [data, setData] = useState<Card[]>(deck);
  const [ids, setIds] = useState<number[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  if (status === null) {
    requestPermission();
  }

  useEffect(() => {
    setData(deck);
  }, [deck]);

  useEffect(() => {
    if (!duplicated) {
      const {items, ids} = filterUniqueItems(deck);
      setData(items);
      setIds(ids);
    } else {
      setData(deck);
      setIds([]);
    }
  }, [duplicated]);

  const HexagonView = (styles: any) => {
    return (
      <View>
        <Svg width={styles.width} height={styles.height} viewBox="0 0 120 120">
          <Polygon
            points="60,0 120,30 120,90 60,120 0,90 0,30"
            fill="crimson"
            stroke="white"
            strokeWidth="6"
          />
          <Text
            x="50%" 
            y="54%" 
            textAnchor="middle" 
            alignmentBaseline="middle" 
            fontSize="50" 
            fill="white"
            fontWeight={'bold'}
            fontFamily={'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'}
          >
            x2
          </Text>
        </Svg>
      </View>
    );
  };

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={[CardGridStyles.imageContainer]}>
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 12, overflow: 'hidden'}}>
        <View>
          { item && 
          <>
            <Image accessibilityLabel={item?.name[lang]} 
                  style={[
                CardGridStyles.image, 
                {width: horizontal ? 184.1 : 372.3}
              ]} 
            source={getImageLanguageForGraphic(item?.id)}
            placeholder={BACKWARD_CARD}/>        
          </>
          }
          {ids.includes(item?.id) && 
            <ThemedView style={[{position: 'absolute', bottom: 30, right: 30}, horizontal && {bottom: 20, right: 20}]}>
              {HexagonView(horizontal ? {width: 40, height: 40} : {width: 60, height: 60})}
            </ThemedView>
          }
        </View>
      </View>
    </View>
  ), [ids, horizontal]);

  return (
    <>
      <View style={{width: COLLAGE_WIDTH}}>
        <ImageBackground source={background && DECK_BACKGROUND_MAP[background.value]} 
                         contentFit={horizontal ? 'none' : 'cover'}
                         style={{padding: 20}}>
          <FlatList data={data}
            renderItem={renderItem}
            key={horizontal ? 'horizontal' : 'vertical'}
            numColumns={horizontal ? 10 : 5}
            contentContainerStyle={{width: COLLAGE_WIDTH}}
            style={{width: COLLAGE_WIDTH, borderRadius: 8}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index + ''}
            ListFooterComponent={
              <ThemedView style={[styles.footer, horizontal && {height: 48}]}>
                <ThemedView style={styles.footerContent}>
                  <ThemedView style={styles.energies}>
                    {
                      Object.keys(element).map((key, i) => {
                        const image = (TYPE_MAP as any)[key]?.image;
                        return (
                            (element as any)[key] &&
                            <Image
                              key={key}
                              source={image}
                              style={{
                                width: horizontal ? 26 : 40,
                                height: horizontal ? 26 : 40,
                                position: 'relative',
                                top: 1
                              }}
                            />
                        );
                      })
                    }
                  </ThemedView>
                  <ThemedText style={[styles.footerText, {fontWeight: 'bold'}, horizontal && {fontSize: 20}]}>{name}</ThemedText>
                </ThemedView>
                <Image source={COIN_MAP[profile.coin]} 
                       style={[TabsMenuStyles.avatar, {width: horizontal ? 28 : 40, height: horizontal ? 28 : 40, marginRight: 16, top: 1}]}>
                </Image>
                <ThemedText style={[styles.footerText, horizontal && {fontSize: 20}]}>
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
  energies: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 40,
    marginRight: 16, 
    padding: 0, 
    backgroundColor: 'transparent', 
    top: 1
  },
  footer: {
    marginTop: 20,
    width: 1920 - 40,
    backgroundColor: 'white',
    opacity: 0.8,
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
    alignItems: 'center'
  },
  footerText: {
    textAlign: 'right', 
    fontSize: 32, 
    color: 'black',
    marginLeft: 20,
    top: -1
  }
});