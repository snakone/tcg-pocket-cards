import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { ScrollView } from "react-native";
import { Image } from 'expo-image';

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";
import { COLLECTION_MENU, COLLECTION_MENU_BUTTON, COLLECTION_PICK, COLLECTION_SEARCH } from "@/shared/definitions/sentences/path.sentences";

export function CollectionScreenModal() {
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
        
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('collection_intro')}</ThemedText>
        <ThemedText style={[styles.title]}>{i18n.t('intro')}</ThemedText>

        <ThemedText style={[styles.text]}>{i18n.t('collection_design')}</ThemedText>
        <ThemedText style={[styles.text]}>{i18n.t('collection_search')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={COLLECTION_SEARCH} style={{width: '100%', height: 46}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('collection_add_cards')}</ThemedText>

        <ThemedText style={[styles.text]}>{i18n.t('collection_add_cards_intro')}</ThemedText>
        <ThemedText style={[styles.text]}>{i18n.t('collection_delete')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={COLLECTION_PICK} style={{width: '100%', height: 358}}></Image>
        </ThemedView>

        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('languages')}</ThemedText>
        <ThemedText style={[styles.text]}>{i18n.t('collection_language')}</ThemedText>

        <ThemedText style={[styles.text]}>{i18n.t('collection_filter')}</ThemedText>
        <ThemedText style={[styles.text]}>{i18n.t('collection_menu')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={COLLECTION_MENU_BUTTON} style={{width: '100%', height: 213}}></Image>
        </ThemedView>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={COLLECTION_MENU} style={{width: '100%', height: 466}}></Image>
        </ThemedView>
        
        <ThemedText style={[styles.text]}>{i18n.t('collection_stats')}</ThemedText>
        <ThemedText style={[styles.text]}>{i18n.t('collection_definitive')}</ThemedText>
        
      </ScrollView>
    </ThemedView>
  )
}