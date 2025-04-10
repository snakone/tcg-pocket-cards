import { BlurView } from "expo-blur";
import { Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import React, { useState } from "react";
import { Image } from 'expo-image';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { useI18n } from "@/core/providers/LanguageProvider";

import { settingsStyles } from "../../settings";
import { TabMenuGames } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, filterStyles, homeScreenStyles, LayoutStyles, ModalStyles, offersStyles, sortStyles } from "@/shared/styles/component.styles";
import { CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { RARITY_MAP, ICON_WIDTH, MODE_MAP } from "@/shared/definitions/utils/constants";
import { MemoryGameMenuData } from "@/shared/definitions/interfaces/global.interfaces";
import { useBottomSlideAnimation } from "@/hooks/modalBottomAnimation";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import SelectInput from "@/components/ui/SelectInput";
import SoundService from "@/core/services/sounds.service";
import StateButton from "@/components/ui/StateButton";

const MODAL_HEIGHT = 470;

const MAP_MODE: any = {
  ["4x4"]: 4,
  ["6x6"]: 6,
  ["8x8"]: 8,
}

export default function MemoryGameMenu({
  onClose,
  selectedMode,
  isVisible,
  filterObj
}: TabMenuGames) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  const router = useRouter();
  const animatedStyle = useBottomSlideAnimation(isVisible, MODAL_HEIGHT);

  const [data, setData] = useState<MemoryGameMenuData>({
    mode: selectedMode,
    filter: filterObj
  });
  
  const rarities = [
    CardRarityENUM.RARE,
    CardRarityENUM.DOUBLE,
    CardRarityENUM.ART,
    CardRarityENUM.SUPER,
  ];

  function handleModeSelect(opt: string): void {
    SoundService.play('POP_PICK'); 
    setData(prev => ({...prev, mode: MAP_MODE[opt]}))
  }

  function openRanking(): void {
    SoundService.play('AUDIO_MENU_OPEN'); 
    router.push('/screens/games/ranking/memory_ranking');
  }

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => onClose?.()}>
      </Pressable>
      <Animated.View style={[
        animatedStyle, 
        sortStyles.container, 
        {height: MODAL_HEIGHT}, 
        i18n.locale === 'ja' && {height: MODAL_HEIGHT + 4}
      ]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('order')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1}]}>
          <ThemedView style={settingsStyles.container}>
            <ThemedView style={settingsStyles.row}>
              <ThemedText>{i18n.t('grid_mode')}</ThemedText>
              <ThemedView style={{marginLeft: 'auto'}}>
                  <SelectInput options={['4x4', '6x6', '8x8']} 
                              label={MODE_MAP[data.mode]}
                              onSelect={handleModeSelect}
                              width={100}
                              height={128}
                              shadow={false}
                              textStyle={{left: 6}}
                              iconStyle={{right: -2}}
                              itemStyle={{paddingBlock: 6}}
                              translate={false}>
                </SelectInput>
              </ThemedView>
            </ThemedView>
          </ThemedView>
          <ThemedView style={[settingsStyles.container, {top: 8}]}>
            <ThemedView style={[settingsStyles.row, {flexDirection: 'column', alignItems: 'flex-start'}]}>
              <ThemedText>{i18n.t('rarity')}</ThemedText>
              <ThemedView style={{flexDirection: 'row', marginTop: 20, marginBottom: 10, gap: 4}}>
                {rarities.map((key, index) => {
                  const image = (RARITY_MAP as any)[key]?.image;
                  const amount = (RARITY_MAP as any)[key]?.amount;

                  return image && (
                    <StateButton
                      propFilter="rarity"
                      keyFilter={key}
                      filterObj={data.filter}
                      key={index}
                      style={[
                        { overflow: 'hidden' },
                        filterStyles.button,
                        filterStyles.imageContainer,
                        { width: ICON_WIDTH + (amount - 1) * 25 },
                      ]}
                    >
                      {Array.from({ length: amount }).map((_, i) => (
                        <Image
                          key={index + (i + 1)}
                          source={image}
                          style={filterStyles.image}
                        />
                      ))}
                    </StateButton>
                  )
                })}
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <TouchableOpacity onPress={openRanking}
                            style={[
                              homeScreenStyles.ctaButton,
                              offersStyles.statsBtn,
                              {marginTop: 29, width: 343.6, backgroundColor: 'skyblue'},
                            ]}>
            <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
              {i18n.t('view_ranking')}
            </ThemedText>
            <MaterialIcons name={'stars'} size={21} style={{color: 'white', top: 1}}></MaterialIcons>
          </TouchableOpacity>

        </ThemedView>
        <View style={styles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => onClose?.(data)} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}

