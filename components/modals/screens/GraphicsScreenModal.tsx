import { ScrollView } from "react-native";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { Image } from 'expo-image';

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";
import { EXPORT_GRAPHIC, EXPORT_GRAPHIC_QUALITY } from "@/shared/definitions/sentences/path.sentences";

export function GraphicsScreenModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('infographics_start')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('infographics_customize')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('infographics_customize_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={EXPORT_GRAPHIC} style={{width: '100%', height: 219}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('infographics_select')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={EXPORT_GRAPHIC_QUALITY} style={{width: '100%', height: 164}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('infographics_split_download')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}