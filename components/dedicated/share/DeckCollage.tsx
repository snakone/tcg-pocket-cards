import { ThemedText } from "@/components/ThemedText";
import { useCallback } from "react";
import * as MediaLibrary from 'expo-media-library';
import { FlatList, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { CardGridStyles, TabsMenuStyles } from "@/shared/styles/component.styles";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { Image, ImageBackground } from 'expo-image';
import { COIN_MAP, DECK_BACKGROUND_MAP, FRONTEND_URL, TYPE_MAP } from "@/shared/definitions/utils/contants";
import { StyleSheet } from "react-native";
import { DECK_BG_TREES } from "@/shared/definitions/sentences/path.sentences";
import { AvatarIcon, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { Colors } from "@/shared/definitions/utils/colors";

const COLLAGE_WIDTH = 1920;

interface DeckCollageProps {
  deck: Card[],
  name: string,
  element: {[key: string]: boolean | null},
  profile: UserProfile,
  background: AvatarIcon | undefined
}

export default function DeckCollage({deck, name, element, profile, background}: DeckCollageProps) {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

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
          </View>
      </View>
    </View>
  ), []);

  return (
    <>
      <View style={{width: COLLAGE_WIDTH}}>
        <ImageBackground source={background && DECK_BACKGROUND_MAP[background.value]} 
                         contentFit="cover" 
                         style={{padding: 60, paddingBottom: 20}}>
          <ThemedView style={styles.header}>
            <ThemedText style={styles.title}>{name}</ThemedText>
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
                          width: 75,
                          height: 75,
                          position: 'relative'
                        }}
                      />
                  );
                })
              }
            </ThemedView>
          </ThemedView>
          <FlatList data={deck}
                    renderItem={renderItem}
                    numColumns={5}
                    contentContainerStyle={{width: COLLAGE_WIDTH}}
                    style={{width: COLLAGE_WIDTH, borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}
                    ListFooterComponent={
                      <ThemedView style={styles.author}>
                        <Image source={COIN_MAP[profile.coin]} 
                              style={[TabsMenuStyles.avatar, {width: 40, height: 40, marginRight: 14}]}>
                        </Image>
                        <ThemedText style={{textAlign: 'right', fontSize: 24, color: 'black'}}>
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
    marginHorizontal: 'auto',
    borderWidth: 1
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
    gap: 16,
    backgroundColor: Colors.light.background, 
    padding: 4, 
    borderRadius: 40,
  },
  author: {
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
  }
});