import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image } from "expo-image";

import { ExpansionMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { EXPANSION_EMBLEM_LIST } from "@/shared/definitions/utils/constants";
import { ExpansionEmblem } from "@/shared/definitions/interfaces/global.interfaces";
import { splashStyles } from "@/components/ui/SplashScreen";
import { AppContext } from "@/app/_layout";

export default function SelectExpansionMenu({
  isVisible,
  onClose,
  animatedStyle,
  current
}: ExpansionMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [selected, setSelected] = useState<ExpansionEmblem | null>();
  const [original, setOriginal] = useState<ExpansionEmblem>();

  useEffect(() => {
    if (current && current.value !== undefined) {
      setOriginal(current);
      setSelected(current);
    }
  }, [current]);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose(selected);
  }

  const handleClick = useCallback((value: ExpansionEmblem) => {
    SoundService.play('POP_PICK');
    setSelected(value);
    if (value.label === selected?.label) {
      setSelected(null);
    }
  }, [selected]);

  const renderItem = ({ item } : {item: ExpansionEmblem}) => (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <ThemedView style={[selectExpansionStyles.coinCircle, selected?.value === item.value && {backgroundColor: 'slategray'}]}>
        <Image source={item.icon} style={[selectExpansionStyles.coin, {backgroundColor: 'transparent', width: 80, height: 80}]}/>
        {
          selected?.value === item.value && 
          <MaterialIcons name="check" 
                         size={16} 
                         color={'white'} 
                         style={selectExpansionStyles.selectedIcon}/>
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
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 590}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_expansion')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', marginTop: 12}}>
            <FlatList data={EXPANSION_EMBLEM_LIST}
                      renderItem={renderItem}
                      numColumns={3}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={(item, index) => index + ''}
                      contentContainerStyle={{paddingBottom: 96}}
                    />
            <ThemedView style={{alignItems: 'center', position: 'absolute', bottom: 30}}>
              <TouchableOpacity onPress={() => closeMenu()}
                                disabled={selected?.value === original?.value}  
                                style={[
                                  splashStyles.button,
                                  selected?.value === original?.value && {backgroundColor: 'lightgray'}
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

const selectExpansionStyles = StyleSheet.create({
  coin: {
    width: 70, 
    height: 70, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 100
  },
  coinCircle: {
    margin: 10,
    marginInline: 14,
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 100,
    boxShadow: 'rgba(0, 0, 0, 0.5) 4px 8px 12px'
  },
  selectedIcon: {
    position: 'absolute', 
    right: 0, 
    top: 0, 
    backgroundColor: 'slategray', 
    borderRadius: 50, 
    padding: 2, 
    fontSize: 17,
    zIndex: 100
  }
})