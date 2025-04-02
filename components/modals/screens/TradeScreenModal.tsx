import { ScrollView } from "react-native";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { Image } from 'expo-image';

import { sharedModalStyles } from "@/shared/styles/component.styles";
import { useI18n } from "@/core/providers/LanguageProvider";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";
import { 
  TRADE_ADD_NEW, 
  TRADE_CREATE_NEW, 
  TRADE_OFFER_NEXT, 
  TRADE_LOOK_FOR, 
  TRADE_SEARCH_SELECTED, 
  TRADE_OFFERING, 
  TRADE_SAVE, 
  TRADE_LIST, 
  TRADE_DELETE
} from "@/shared/definitions/sentences/path.sentences";

export function TradeScreenModal() {
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

        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('trade_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('trade_next_intro')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('trade_deck_management')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('trade_deck_management_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_ADD_NEW} style={{width: '100%', height: 282}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('trade_add_new')}</ThemedText>
        <ThemedText style={styles.text}>1. {i18n.t('trade_add_new_name')}</ThemedText>
        <ThemedText style={styles.text}>2. {i18n.t('trade_add_new_discord')}</ThemedText>
        <ThemedText style={styles.text}>3. {i18n.t('trade_add_new_id')}</ThemedText>
        <ThemedText style={styles.text}>4. {i18n.t('trade_add_new_search')}</ThemedText>
        <ThemedText style={styles.text}>5. {i18n.t('trade_add_new_offer')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_CREATE_NEW} style={{width: '100%', height: 554}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('trade_selection_search')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('trade_selection_search_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_LOOK_FOR} style={{width: '100%', height: 572}}></Image>
        </ThemedView> 

        <ThemedText style={styles.text}>{i18n.t('trade_search_selected')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_SEARCH_SELECTED} style={{width: '100%', height: 534}}></Image>
        </ThemedView> 

        <ThemedText style={styles.text}>{i18n.t('trade_selection_lower')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_OFFER_NEXT} style={{width: '100%', height: 542}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('trade_offer_menu')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_OFFERING} style={{width: '100%', height: 484}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('trade_offer_selected')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('create_deck_save')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('trade_offer_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_SAVE} style={{width: '100%', height: 541}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('trade_create_requisites')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('trade_existent')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('trade_existent_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_LIST} style={{width: '100%', height: 317}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('trade_list_intro_enter')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={TRADE_DELETE} style={{width: '100%', height: 540}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('create_share')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('trade_share')}</ThemedText>
        
      </ScrollView>
    </ThemedView>
  )
}