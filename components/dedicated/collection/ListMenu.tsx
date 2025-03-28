import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext } from "react";
import React from "react";
import { Image } from "expo-image";

import { CollectionListMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { CollectionStat } from "@/shared/definitions/interfaces/global.interfaces";
import { AppContext } from "@/app/_layout";
import { CROWN_RARITY, STAR_RARITY } from "@/shared/definitions/sentences/path.sentences";
import { roundPercentage } from "@/shared/definitions/utils/functions";

export default function ListMenu({
  isVisible,
  onClose,
  animatedStyle,
  stats
}: CollectionListMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

  const renderItem = useCallback(({item}: {item: CollectionStat}) => {
    const isPromo = item.label === 'expansion_promo_a';
    return (
      <>
        {
          item && 
          <ThemedView style={{width: '100%', marginBottom: 18}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', }}>
              {
                item.emblem && 
                <Image source={item.emblem} 
                  style={[
                  {backgroundColor: 'transparent', height: 50, width: 50, marginRight: 13, top: 2},
                  isPromo && { width: 44, height: 44, marginRight: 19, left: 2}
                ]}/>
              }

              <ThemedView style={{gap: 4}}>
                {item.name && <ThemedText style={{fontWeight: 'bold'}}>{i18n.t(item.label)}</ThemedText>}
                <ThemedView style={{flexDirection: 'row', gap: 8}}>
                  <ThemedView style={listStyles.chip}>
                    <ThemedText style={listStyles.chipText}>{item.owned}/{item.length}</ThemedText>
                  </ThemedView>
                  {
                    !isPromo && 
                    <ThemedView style={listStyles.chip}>
                      <Image source={CROWN_RARITY} style={{width: 20, height: 13, marginRight: 6}}/>
                      <ThemedText style={listStyles.chipText}>{item.crown}</ThemedText>
                    </ThemedView>
                  }
                  {
                    !isPromo &&
                    <ThemedView style={listStyles.chip}>
                      <Image source={STAR_RARITY} style={{width: 16, height: 15, marginRight: 6}}/>
                      <ThemedText style={listStyles.chipText}>{item.art}</ThemedText>
                    </ThemedView>
                  }
                  <ThemedText style={[listStyles.chipText, {left: 2, top: 4}]}>{roundPercentage(item.perct_owned)}</ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        }
      </>
    )
  }, []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 68,
    offset: 68 * index,
    index, 
  }), []);

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 590}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('expansions')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, paddingHorizontal: 16, paddingVertical: 10}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', marginTop: 12}}>
            {
              stats.every(stat => stat !== undefined) &&
              <FlatList data={stats}
                        numColumns={1}
                        contentContainerStyle={{width: '100%'}}
                        renderItem={renderItem}
                        style={{width: '100%'}}
                        keyExtractor={(item, index) => index + 1 + ''}
                        showsVerticalScrollIndicator={false}
                        getItemLayout={getItemLayout}/>
            }
          </ThemedView>
        </ThemedView>
        <View style={styles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}

const listStyles = StyleSheet.create({
  lang: {
   fontWeight: 'bold',
   fontSize: 12,
   paddingVertical: 12,
   paddingHorizontal: 7,
   textAlign: 'center',
   borderRadius: 2
  },
  chip: {
   backgroundColor: 'white',
   boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
   paddingVertical: 4,
   paddingHorizontal: 6,
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'row',
   borderRadius: 6,
  },
  chipText: {
   fontSize: 12
  },
  energy: {
   width: 16, 
   height: 16, 
   marginRight: 8
  }
 });