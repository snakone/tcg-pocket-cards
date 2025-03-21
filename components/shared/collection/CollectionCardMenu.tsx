import { BlurView } from "expo-blur";
import { Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useState, useContext, useEffect } from "react";
import { Switch } from "react-native-paper";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { COLLECTION_LANGUAGE_MAP, CollectionLanguageList, LANGUAGE_COLLECTION_MAP } from "@/shared/definitions/utils/constants";
import { TabMenuCollection } from "@/shared/definitions/interfaces/layout.interfaces";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "../../../core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import SoundService from "@/core/services/sounds.service";
import { Colors } from "@/shared/definitions/utils/colors";
import { settingsStyles } from "@/app/screens/settings";
import SelectInput from "@/components/ui/SelectInput";
import { CardLanguageENUM } from "@/shared/definitions/enums/card.enums";

import { 
  ButtonStyles,
  CardGridStyles, 
  homeScreenStyles, 
  LayoutStyles, 
  ModalStyles, 
  offersStyles, 
  sortStyles 
} from "@/shared/styles/component.styles";

export default function CollectionCardMenu({
  isVisible,
  onClose,
  animatedStyle,
  selectedLanguage
}: TabMenuCollection) {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const [markAll, setMarkAll] = useState<boolean>(false);
  const [unmark, setUnmark] = useState<boolean>(false);
  const [language, setLanguage] = useState<CardLanguageENUM>(selectedLanguage);
  const router = useRouter();

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE')
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose({markAll, unmark, language});
  }

  function handleLanguage(value: CardLanguageENUM): void {
    SoundService.play('POP_PICK')
    setLanguage(value);
    dispatch({type: 'SET_COLLECTION_LANGUAGE', value});
  }

  function handleMark(value: boolean): void {
    SoundService.play('POP_PICK'); 
    setMarkAll(value);
    if (value) {
      setUnmark(false);
    }
  }

  function goToStats(): void {
    SoundService.play('CHANGE_VIEW'); 
    router.push('/screens/collection_stats');
  }

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 540}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('menu')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1}]}>
          <ThemedView style={{flex: 1, marginTop: 6}}>
            <ThemedView style={[settingsStyles.container, {marginBottom: 16, paddingVertical: 10}]}>
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('language')}</ThemedText>
                  <ThemedView style={{marginLeft: 'auto'}}>
                    <SelectInput options={CollectionLanguageList.map(item => COLLECTION_LANGUAGE_MAP[item])} 
                                 label={COLLECTION_LANGUAGE_MAP[language]}
                                 onSelect={(opt) => handleLanguage(LANGUAGE_COLLECTION_MAP[opt])}
                                 width={120}
                                 height={167}
                                 shadow={false}
                                 translate={false}
                                 textStyle={{left: 6}}
                                 iconStyle={{right: -2}}
                                 itemStyle={{paddingBlock: 6}}
                                 autoScroll={true}
                                 >
                  </SelectInput>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedView style={[settingsStyles.container, {marginBottom: 16}]}>
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('mark_all_collection') + ' *'}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                  <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                      color={'white'}
                                      onValueChange={(value) => handleMark(value)}
                                      style={CardGridStyles.switch}
                                      value={markAll}/>
                </ThemedView>
              </ThemedView>
            </ThemedView>
            <ThemedView style={[settingsStyles.container, {marginBottom: 16}]}>
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('unmark_collection') + ' *'}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                  <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                      color={'white'}
                                      onValueChange={(value) => (SoundService.play('POP_PICK'), setUnmark(value))}
                                      style={CardGridStyles.switch}
                                      disabled={markAll}
                                      value={unmark}/>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedText style={{paddingInline: 12, marginTop: 6, fontSize: 13}}>{'* ' + i18n.t('apply_to_language')}</ThemedText>

            <TouchableOpacity style={[
              homeScreenStyles.ctaButton,
              offersStyles.statsBtn,
              Platform.OS !== 'web' && {marginBottom: 16}
            ]} 
                              onPress={() => goToStats()}>
              <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
                {i18n.t('view_stats')}
              </ThemedText>
              <MaterialIcons name={'bar-chart'} size={21} style={{color: 'white'}}></MaterialIcons>
            </TouchableOpacity>

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

