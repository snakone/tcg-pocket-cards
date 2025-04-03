import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import { Image } from "expo-image";

import { ModalRxjs } from "@/core/rxjs/ModalRxjs";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import Storage from "@/core/storage/storage.service";

import { TabWithCards } from "@/shared/definitions/interfaces/layout.interfaces";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { Colors } from "@/shared/definitions/utils/colors";
import { getImageLanguage69x96 } from "@/shared/definitions/utils/functions";

import { 
  ButtonStyles, 
  CardGridStyles, 
  gridHeightMap, 
  LayoutStyles, 
  ModalStyles, 
  offersStyles, 
  sortStyles 
} from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

const numColumns = 6;

export default function PickBestMenu({
  cards,
  language,
  isVisible
}: TabWithCards) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  const [selected, setSelected] = useState(-1);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    ModalRxjs.setModalVisibility({key: 'best', value: false});
  }

  useEffect(() => {
    const getBest = async () => {
      const best = await Storage.get('best');
      setSelected(_ => best);
    };

    getBest();
  }, []);

  const handleClick = useCallback((value: number) => {
    Storage.set('best', value);
    closeMenu();
  }, []);

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => handleClick(item.id)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          { selected === item.id &&
            <ThemedView style={[
              CardGridStyles.image, 
              offersStyles.included, 
              {width: Platform.OS === 'web' ? 57.6 : 58}]}>
            </ThemedView>
          }
          <Image accessibilityLabel={item.name[language]}
                  source={getImageLanguage69x96(language, item.id)}
                  placeholder={BACKWARD_CARD}
                  style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  ), [selected]);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: gridHeightMap[numColumns],
    offset: gridHeightMap[numColumns] * index,
    index, 
  }), []);

  if (!isVisible) { return null; }

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={closeMenu}>
      </Pressable>
      <View style={[sortStyles.container, {height: 605}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_a_card')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', marginTop: 12}}>
            <FlatList data={cards}
                      renderItem={renderCard}
                      numColumns={numColumns}
                      getItemLayout={getItemLayout}
                      showsVerticalScrollIndicator={false}
                      maxToRenderPerBatch={28}
                      initialNumToRender={20}
                      windowSize={13}
                      keyExtractor={(item, index) => index + ''}
                      ListFooterComponent={<ThemedView style={{height: 12}}/>}
                    />
          </ThemedView>
        </ThemedView>
        <View style={styles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={closeMenu} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}