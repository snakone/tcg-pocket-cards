import React, { useContext } from "react";
import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useRef, useState,  } from "react";
import { Provider, Switch } from "react-native-paper";
import { Subject } from "rxjs";

import { 
  ButtonStyles,
  CardGridStyles,
  filterStyles,
  LayoutStyles,  
  ModalStyles, 
} from "@/shared/styles/component.styles";

import { getFilterAttackSearch } from "@/shared/definitions/utils/constants";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import SoundService from "@/core/services/sounds.service";
import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";
import { EnergyItem } from "./components/EnergyItem";
import { DamageItem } from "./components/DamageItem";
import { Colors } from "@/shared/definitions/utils/colors";

export default function FilterAttackMenu({isVisible, onClose, animatedStyle}: TabMenu) {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { dispatch } = context;
  const [isExclusive, setIsExclusive] = useState(false);
  
  const {i18n} = useI18n();
  const filterObj = useRef<FilterAttackSearch>(getFilterAttackSearch());

  if (!isVisible) return null;

  const nextValues: {[key: string] : Subject<boolean>} = {
    energy$: new Subject<boolean>(),
  }

  const playSound = async (value: string) => {
    await SoundService.play(value);
  }

  async function closeMenu(): Promise<void> {
    await playSound('AUDIO_MENU_CLOSE');
    onClose();
    dispatch({type: 'SET_ATTACK_FILTER', value: filterObj.current});
  }

  async function handleChange(value: boolean): Promise<void> {
    setIsExclusive(value);
    filterObj.current.exclusive = value;
    await SoundService.play('POP_PICK');
  }

  return (
    <Provider>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={[StyleSheet.absoluteFill]} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={[LayoutStyles.overlay]} onPress={() => closeMenu()}></Pressable>
      <Animated.View style={[animatedStyle, filterStyles.container, {height: 647}, i18n.locale === 'ja' && {height: 655}]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={[ModalStyles.modalHeaderTitle, i18n.locale === 'ja' && {fontSize: 20}]}>{i18n.t('filter')}</ThemedText>
        </View>
        <SafeAreaView style={[ModalStyles.modalScrollView, {paddingHorizontal: 20, paddingVertical: 0}]}>
          <ScrollView showsVerticalScrollIndicator={false} style={filterStyles.list}>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('damage')}</ThemedText>
              </ThemedView>
              <DamageItem filterObj={filterObj} playSound={playSound}></DamageItem>
            </>
            <>
              <ThemedView style={[filterStyles.row, {marginTop: 4}]}>
                <ThemedText style={filterStyles.header}>{i18n.t('energy')}</ThemedText>
                <ThemedView style={{flexDirection: 'row', gap: 24, top: 7, left: -8}}>
                  <ThemedText>{i18n.t('exclusive')}</ThemedText>
                  <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                      color={'white'}
                                      onValueChange={(value) => handleChange(value)}
                                      style={CardGridStyles.switch}
                                      value={isExclusive}/>
                </ThemedView>
              </ThemedView>
              <EnergyItem energy={filterObj.current.energy} 
                          filterObj={filterObj} 
                          typeSelectAll$={nextValues.energy$}>
              </EnergyItem>
            </>
          </ScrollView>

        </SafeAreaView>
        <View style={[ModalStyles.modalFooter, i18n.locale === 'ja' && {top: -2}]}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </Provider>
  );
}
