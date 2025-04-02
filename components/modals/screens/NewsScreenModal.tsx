import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";

export function NewsScreenModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('news_intro')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('news_title')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('news_app')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('news_official')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('news_care')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('news_help')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}