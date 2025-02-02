import { useCallback, useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { FlatList, View } from "react-native";
import React from "react";
import { Image, ImageBackground } from 'expo-image';
import { StyleSheet } from "react-native";
import Svg, { Polygon, Text } from "react-native-svg";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CardGridStyles, TabsMenuStyles } from "@/shared/styles/component.styles";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { COIN_MAP, DECK_BACKGROUND_MAP, FRONTEND_URL, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { AvatarIcon, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { filterUniqueItems } from "@/shared/definitions/utils/functions";

const COLLAGE_WIDTH = 1920;

interface DeckCollageProps {
  deck: Card[],
  name: string,
  element: {[key: string]: boolean | null},
  profile: UserProfile,
  background: AvatarIcon | undefined,
  duplicated: boolean
}

export default function DeckCollage({
  deck, 
  name, 
  element, 
  profile, 
  background,
  duplicated
}: DeckCollageProps) {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [data, setData] = useState<Card[]>(deck);
  const [ids, setIds] = useState<number[]>([]);

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

  const HexagonView = () => {
    return (
      <View>
        <Svg width="60" height="60" viewBox="0 0 120 120">
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
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          { item && 
          <>
            <Image accessibilityLabel={item?.name} 
                  style={[
                CardGridStyles.image, 
                {width: 356}
              ]} 
            source={CARD_IMAGE_MAP[String(item?.id)]}/>        
          </>
          }
          {ids.includes(item?.id) && 
            <ThemedView style={{position: 'absolute', bottom: 30, right: 30}}>
              {HexagonView()}
            </ThemedView>
          }
        </View>
      </View>
    </View>
  ), [ids]);

  return (
    <>
      <View style={{width: COLLAGE_WIDTH}}>
        <ImageBackground source={background && DECK_BACKGROUND_MAP[background.value]} 
                         contentFit="cover" 
                         style={{padding: 60, paddingBottom: 20}}>
          <FlatList data={data}
            renderItem={renderItem}
            numColumns={5}
            contentContainerStyle={{width: COLLAGE_WIDTH}}
            style={{width: COLLAGE_WIDTH, borderRadius: 8}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index + ''}
            ListFooterComponent={
              <ThemedView style={styles.footer}>
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
                                width: 40,
                                height: 40,
                                position: 'relative',
                                top: 1
                              }}
                            />
                        );
                      })
                    }
                  </ThemedView>
                  <ThemedText style={[styles.footerText, {fontWeight: 'bold'}]}>{name}</ThemedText>
                </ThemedView>
                <Image source={COIN_MAP[profile.coin]} 
                      style={[TabsMenuStyles.avatar, {width: 40, height: 40, marginRight: 20, top: 1}]}>
                </Image>
                <ThemedText style={styles.footerText}>
                  {profile.name || 'Username'} - TCG Pocket Cards - {FRONTEND_URL}
                </ThemedText>
              </ThemedView>
          }/>
        </ImageBackground>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  header: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    padding: 20,
    paddingInline: 50,
    paddingBottom: 26,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 25,
    marginHorizontal: 'auto'
  },
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
    marginRight: 20, 
    padding: 0, 
    backgroundColor: 'transparent', 
    top: 2
  },
  footer: {
    marginTop: 20,
    width: 1800,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 15,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 24,
    flexDirection: 'row',
    borderWidth: 2
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