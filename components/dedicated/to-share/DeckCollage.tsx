import { ThemedText } from "@/components/ThemedText";
import { useRef, useCallback } from "react";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { CardGridStyles } from "@/shared/styles/component.styles";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { Image } from 'expo-image';
import { TYPE_MAP } from "@/shared/definitions/utils/contants";
import { StyleSheet } from "react-native";

interface DeckCollageProps {
  deck: any[],
  name: string,
  element: {[key: string]: boolean | null}
}

export default function ExampleCaptureOnMountManually({deck, name, element}: DeckCollageProps) {
  const ref = useRef<any>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(ref, {
        quality: 1,
        format: 'png',
        fileName: name || 'deck',
        width: 1920,
        height: 2420,
      });

      if (Platform.OS === 'web') {
        const link = document.createElement('a');
        link.href = localUri;
        link.download = name || 'deck';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      } else {
        await MediaLibrary.saveToLibraryAsync(localUri);
      }

      if (localUri) {
        alert('Saved!');
      }

    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={[CardGridStyles.imageContainer]}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => null}
              style={[{justifyContent: 'center', alignItems: 'center'}]}>
          <View>
            { item && 
            <>
              <Image accessibilityLabel={item?.name} 
                    style={[
                  CardGridStyles.image, 
                  {width: 380}
                ]} 
              source={CARD_IMAGE_MAP[String(item?.id)]}/>        
            </>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), []);

  return (
    <>
      <View ref={ref} style={{width: 1920}}>
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
                  contentContainerStyle={{width: 1920, marginBottom: 62}}
                  style={{width: 1920, borderRadius: 8}}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index + ''}
                  ListFooterComponent={
                    <ThemedView style={styles.author}>
                      <ThemedText style={{textAlign: 'right', fontSize: 24, color: 'black'}}>
                        Alejandra3412 - TCG Pocket Cards
                      </ThemedText>
                    </ThemedView>
                  }/>
    </View>
    <TouchableOpacity onPress={onSaveImageAsync}>
      <ThemedText>Save</ThemedText>
    </TouchableOpacity>
    </>
  );
}

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBlock: 20
  },
  title: {
    fontSize: 54, 
    fontWeight: 'bold',
    marginBlock: 14,
    color: 'black'
  },
  energies: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 12,
    marginBottom: 22
  },
  author: {
    position: 'absolute',
    bottom: -43,
    right: 20,
    width: '100%'
  }
});