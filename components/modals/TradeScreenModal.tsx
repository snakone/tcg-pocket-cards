import { ScrollView } from "react-native";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { useI18n } from "@/core/providers/LanguageProvider";

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
        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('terms_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_intro_sentence')}</ThemedText>
        
      </ScrollView>
    </ThemedView>
  )
}