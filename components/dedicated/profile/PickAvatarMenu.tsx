import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";

import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import SoundService from "@/core/services/sounds.service";
import { AVATAR_LIST } from "@/shared/definitions/utils/constants";
import { AvatarIcon } from "@/shared/definitions/interfaces/global.interfaces";
import Storage from "@/core/storage/storage.service";
import { splashStyles } from "@/components/ui/SplashScreen";

export default function PickAvatarMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const [selected, setSelected] = useState('');
  const [original, setOriginal] = useState('');

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

  const handleClick = useCallback((value: string) => {
    SoundService.play('POP_PICK');
    setSelected(value);
    if (value === selected) {
      setSelected('');
    }
  }, [selected]);

  function handleSave(): void {
    Storage.set('avatar', selected);
    const settings = {...state.settingsState, avatar: selected};
    dispatch({type: 'SET_SETTINGS', value: settings});
    closeMenu();
  }

  useEffect(() => {
    const getAvatar = async () => {
      const avatar = await Storage.get('avatar');
      setSelected(avatar);
      setOriginal(avatar);
    };

    getAvatar();
  }, []);

  const renderItem = ({ item } : {item: AvatarIcon}) => (
    <TouchableOpacity onPress={() => handleClick(item.value)}>
      <ThemedView style={[pickAvatarStyles.avatarCircle, selected === item.value && {backgroundColor: 'slategray'}]}>
        <Image source={item.icon} style={pickAvatarStyles.avatar}/>
        {
          selected === item.value && 
          <MaterialIcons name="check" 
                         size={16} 
                         color={'white'} 
                         style={pickAvatarStyles.selectedIcon}/>
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
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 706}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_avatar')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', marginTop: 12}}>
            <FlatList data={AVATAR_LIST}
                      renderItem={renderItem}
                      numColumns={3}
                      keyExtractor={(item, index) => index + ''}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{paddingBottom: 96}}
                    />
            <ThemedView style={{alignItems: 'center', position: 'absolute', bottom: 30}}>
              <TouchableOpacity onPress={() => handleSave()}
                                disabled={selected === original}  
                                style={[
                                  splashStyles.button,
                                  selected === original && {backgroundColor: 'lightgray'}
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

const pickAvatarStyles = StyleSheet.create({
  avatar: {
    width: 80, 
    height: 80, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 100
  },
  avatarCircle: {
    margin: 10,
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