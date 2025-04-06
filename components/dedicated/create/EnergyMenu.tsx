import { BlurView } from "expo-blur";
import { Image } from 'expo-image';
import React from "react";
import { Platform, Pressable, View, TouchableOpacity, StyleSheet } from "react-native";
import Animated from 'react-native-reanimated';

import { useI18n } from "@/core/providers/LanguageProvider";

import { useBottomSlideAnimation } from "@/hooks/modalBottomAnimation";
import { SELECT_ENERGY_HEIGHT, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";

import { 
  LayoutStyles,
  sortStyles,
  ModalStyles,
  filterStyles,
  ScreenStyles, 
  ButtonStyles
} from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

interface EnergyMenuProps {
  element: any,
  isVisible: boolean,
  onClose: () => void,
  handleEnergy: (value: string) => void,
}

export default function EnergyMenu({
  element, 
  isVisible, 
  onClose, 
  handleEnergy
}: EnergyMenuProps) {
  if (!isVisible) {return; }
  const {i18n} = useI18n();
  const animatedStyle = useBottomSlideAnimation(isVisible, SELECT_ENERGY_HEIGHT as number);

  const isElementWith3MoreEnergy = (element: any): boolean => {
    return Object.keys(element).filter(k => !!(element as any)[k]).length >= 3;
  }

  const isEnergyDisabled = (key: string): boolean => {
    return (isElementWith3MoreEnergy(element) && !(element as any)[key]) || 
    key === String(PokemonTypeENUM.NORMAL) ||
    key === String(PokemonTypeENUM.DRAGON);
  }
  
  return (
    <>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                  onPress={onClose}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: SELECT_ENERGY_HEIGHT}]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedView style={{top: -4}}>
            <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('energy')}</ThemedText>
            <ThemedText style={{textAlign: 'center', marginTop: 4, fontSize: 12}}>{i18n.t('select_energy')}</ThemedText>
          </ThemedView>
        </View>
        <ThemedView style={[
          filterStyles.flexContainer,
          { justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48, padding: 16 },
        ]}>
          {
            Object.keys(element).map((key, i) => {
              const image = (TYPE_MAP as any)[key]?.image;
              const label = (TYPE_MAP as any)[key]?.label;

              return (
                <TouchableOpacity onPress={() => handleEnergy(key)}
                                  disabled={isEnergyDisabled(key)}
                                  key={i}
                                  style={[
                                    filterStyles.button,
                                    {
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: '48%',
                                    }, 
                                    (element as any)[key] && {backgroundColor: '#444444'},
                                    isEnergyDisabled(key) && { opacity: 0.5 }
                ]}>
                  <Image
                    source={image}
                    style={{
                      width: 21,
                      height: 21,
                      position: 'absolute',
                      left: 20,
                      marginRight: 8,
                    }}
                  />
                  <ThemedText style={[
                      filterStyles.buttonText, 
                      {left: 18}, 
                      (element as any)[key] && {color: 'white'},]}>
                    {i18n.t(label)}
                  </ThemedText>
                </TouchableOpacity>
              );
            })
          }

          <ThemedView style={{marginBlock: 20, width: '100%', paddingHorizontal: 16}}>
            <ThemedText>- {i18n.t('energy_game')}</ThemedText>
            <ThemedText>- {i18n.t('energy_types')}</ThemedText>
          </ThemedView>

        </ThemedView>
        <View style={ScreenStyles.bottomContent}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={onClose} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  )
}