import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image } from "expo-image";

import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { DECK_BACKGROUNDS_70x70 } from "@/shared/definitions/utils/constants";
import { AvatarIcon } from "@/shared/definitions/interfaces/global.interfaces";
import { splashStyles } from "@/components/ui/SplashScreen";
import { AppContext } from "@/app/_layout";

export default function PickBackgroundMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const [selected, setSelected] = useState<AvatarIcon>();

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(value = false): Promise<void> {
    await playSound();
    onClose(value ? selected : null);
  }

  async function handleClick(value: AvatarIcon): Promise<void> {
    await SoundService.play('POP_PICK');
    setSelected(value);
  }

  function handleSave(): void {
    closeMenu(true);
  }

  const renderItem = ({ item } : {item: AvatarIcon}) => (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <ThemedView style={[
         pickBackgroundStyles.coinCircle, 
         selected?.value === item.value && {backgroundColor: 'slategray'}
        ]}>
        <Image source={item.icon} style={pickBackgroundStyles.coin}/>
        {
          selected?.value === item.value && 
          <MaterialIcons name="check" 
                         size={16} 
                         color={'white'} 
                         style={pickBackgroundStyles.selectedIcon}/>
        }
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 605}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_background')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', marginTop: 12}}>
            <FlatList data={DECK_BACKGROUNDS_70x70}
                      renderItem={renderItem}
                      numColumns={3}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={(item, index) => index + ''}
                      ListFooterComponent={<ThemedView style={{height: 110}}></ThemedView>}
                    />
            <ThemedView style={{alignItems: 'center', position: 'absolute', bottom: 30}}>
              <TouchableOpacity onPress={() => handleSave()}
                                disabled={!selected}  
                                style={[
                                  splashStyles.button,
                                  !selected && {backgroundColor: 'lightgray'}
                                ]} >
                <ThemedText style={[
                  {color: 'white', fontWeight: 600, fontSize: 15},
                ]}>{i18n.t('ok')}</ThemedText>
              </TouchableOpacity>
            </ThemedView>
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

const pickBackgroundStyles = StyleSheet.create({
  coin: {
    width: 70, 
    height: 70, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 22
  },
  coinCircle: {
    margin: 10,
    marginInline: 14,
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 22,
    boxShadow: 'rgba(0, 0, 0, 0.5) 4px 8px 12px'
  },
  selectedIcon: {
    position: 'absolute', 
    right: -4, 
    top: -4, 
    backgroundColor: 'slategray', 
    borderRadius: 50, 
    padding: 2, 
    fontSize: 17,
    zIndex: 100
  }
})