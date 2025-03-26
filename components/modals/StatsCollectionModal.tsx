import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Image } from 'expo-image';

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";

import { 
  STATS_ACTION_BAR, 
  STATS_EXPANSION_MENU, 
  STATS_LIST, 
  STATS_MAIN, 
  STATS_SELECT_EXPANSION
} from "@/shared/definitions/sentences/path.sentences";

export function StatsCollectionModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('stats_intro')}</ThemedText>
        <ThemedText style={styles.title}>{i18n.t('intro')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('stats_action_bar')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={STATS_ACTION_BAR} style={{width: '100%', height: 155}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('stats_select_expansion')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={STATS_SELECT_EXPANSION} style={{width: '100%', height: 48}}></Image>
        </ThemedView>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={STATS_EXPANSION_MENU} style={{width: '100%', height: 464}}></Image>
        </ThemedView>


        <ThemedText style={styles.text}>{i18n.t('stats_button_list')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={STATS_LIST} style={{width: '100%', height: 470}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('detail')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('stats_main_info')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={STATS_MAIN} style={{width: '100%', height: 364}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('stats_end_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('stats_end_finish')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}