import { BlurView } from "expo-blur";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useEffect, useCallback, useState, useContext } from "react";
import { Switch } from "react-native-paper";
import React from "react";

import { TabMenuCollection } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, CardGridStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "../../../core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import { COLLECTION_LANGUAGE_MAP, CollectionLanguageList, INITIAL_SORT_DATA, LANGUAGE_COLLECTION_MAP } from "@/shared/definitions/utils/constants";
import SoundService from "@/core/services/sounds.service";
import { Colors } from "@/shared/definitions/utils/colors";
import { settingsStyles } from "@/app/screens/settings";
import SelectInput from "@/components/ui/SelectInput";
import { CardLanguageENUM } from "@/shared/definitions/enums/card.enums";

export default function CollectionCardMenu({
  isVisible,
  onClose,
  animatedStyle,
  selectedLanguage
}: TabMenuCollection) {
  const [data, setData] = useState(INITIAL_SORT_DATA);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const [markAll, setMarkAll] = useState<boolean>(false);
  const [unmark, setUnmark] = useState<boolean>(false);
  const [language, setLanguage] = useState<CardLanguageENUM>(selectedLanguage);

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
  }

  function handleMark(value: boolean): void {
    SoundService.play('POP_PICK'); 
    setMarkAll(value);
    if (value) {
      setUnmark(false);
    }
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
      <Animated.View style={[animatedStyle, sortStyles.container]}>
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
                                 itemStyle={{paddingBlock: 6}}>
                    </SelectInput>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, {marginBottom: 16}]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('mark_all_collection')}</ThemedText>
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
                  <ThemedText>{i18n.t('unmark_collection')}</ThemedText>
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

