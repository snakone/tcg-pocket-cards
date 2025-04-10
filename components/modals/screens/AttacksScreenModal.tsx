import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Image } from 'expo-image';

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";

import { 
  ATTACK_SEARCH, 
  ATTACK_FILTER, 
  ATTACK_SORT_ICON, 
  ATTACK_SORT, 
  ATTACK_OPTION
} from "@/shared/definitions/sentences/path.sentences";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export function AttacksScreenModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('attack_intro')}</ThemedText>
        
        <ThemedText style={styles.text}>{i18n.t('attack_udpdate')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={ATTACK_SEARCH} style={{width: '100%', height: 36}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('attack_search')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('attack_filter')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('attack_filter_icon')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={ATTACK_FILTER} style={{width: '100%', height: 283}}></Image>
        </ThemedView>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={ATTACK_OPTION} style={{width: '100%', height: 524}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('attack_option')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('attack_reset')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('attack_filter_check')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('attack_sort')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('attack_sort_icon')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={ATTACK_SORT_ICON} style={{width: '100%', height: 281}}></Image>
        </ThemedView>
        
        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={ATTACK_SORT} style={{width: '100%', height: 365}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('attack_sort_start')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('attack_sort_order')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}