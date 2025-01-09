import { useState } from "react";
import { Image } from 'expo-image';
import { useSharedValue } from "react-native-reanimated";
import { Platform, ScrollView } from "react-native";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";
import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";

import { 
  CREATE_ADD_NEW, 
  CREATE_CARD_SELECTION,
  CREATE_DECK_LIST,
  CREATE_DECK_READY,
  CREATE_DELETE,
  CREATE_ENERGY_SHOW,
  CREATE_HOME_NEW,
  CREATE_PREVIEW,
  CREATE_SELECT_ENERGY
} from "@/shared/definitions/sentences/path.sentences";

export function CreateScreenModal() {
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);
  const {i18n} = useI18n();

  const styles = sharedModalStyles;

  const handleContentSizeChange = (width: number, height: number) => {
    setContentHeight(height);
  };

  const handleScroll = (event: any) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const handleLayout = (event: any) => {
    setScrollViewHeight(event.nativeEvent.layout.height);
  };

  return (
    <ThemedView style={{flex: 1}}>
      <ScrollIndicator contentHeight={contentHeight} 
                        scrollViewHeight={scrollViewHeight} 
                        scrollY={scrollY}>
      </ScrollIndicator>
      <ScrollView style={{flex: 1}} 
                  showsVerticalScrollIndicator={false} 
                  onScroll={handleScroll} 
                  scrollEventThrottle={16}
                  onContentSizeChange={handleContentSizeChange}
                  onLayout={handleLayout}>
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('create_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_next_intro')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('create_deck_management')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_deck_management_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_ADD_NEW} style={{width: '100%', height: 228}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('create_add_new')}</ThemedText>
        <ThemedText style={styles.text}>1. {i18n.t('create_add_new_name')}</ThemedText>
        <ThemedText style={styles.text}>2. {i18n.t('create_add_new_reset')}</ThemedText>
        <ThemedText style={styles.text}>3. {i18n.t('create_add_new_energy')}</ThemedText>
        <ThemedText style={styles.text}>4. {i18n.t('create_add_new_amount')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_HOME_NEW} style={{width: '100%', height: 436}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('create_add_new_energy_menu')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_SELECT_ENERGY} style={{width: '100%', height: 450}}></Image>
        </ThemedView> 

        <ThemedText style={styles.text}>{i18n.t('create_add_new_energy_menu_after')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_ENERGY_SHOW} style={{width: '100%', height: 142}}></Image>
        </ThemedView> 

        <ThemedText style={styles.title}>{i18n.t('create_selection')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_selection_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_CARD_SELECTION} style={{width: '100%', height: 426}}></Image>
        </ThemedView> 

        <ThemedText style={styles.text}>{i18n.t('create_selection_upper')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_PREVIEW} style={{width: '100%', height: 195}}></Image>
        </ThemedView> 

        <ThemedText style={styles.text}>{i18n.t('create_selection_lower')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_add_card')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('create_deck_save')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_deck_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_DECK_READY} style={{width: '100%', height: 446}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('create_deck_requisites')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('create_deck_list')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_deck_list_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_DECK_LIST} style={{width: '100%', height: 299}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('create_deck_list_intro_enter')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={CREATE_DELETE} style={{width: '100%', height: 266}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('create_share')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('create_share_intro')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}