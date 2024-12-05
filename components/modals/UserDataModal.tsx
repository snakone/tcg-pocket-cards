import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";

export function UserDataModal() {
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);
  const {i18n} = useI18n();

  const styles = sharedModalStyles;
  const lastUpdate = '03/12/2024';

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
        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('privacy_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_intro_sentence')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}