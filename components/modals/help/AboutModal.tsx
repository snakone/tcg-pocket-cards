import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { ScrollView } from "react-native";

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";

export function AboutModal() {
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);
  const {i18n} = useI18n();
  const lastUpdate = '24/12/2024';

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
        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_welcome_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_what_is')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_what_is_sentence')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('about_filter')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_sort')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_custom')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_what_is_end')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_develop')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_develop_start')}</ThemedText>
        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('about_develop_languagues')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('about_develop_typescript')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_develop_react_native')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_develop_expo_go')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_develop_android_studio')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_develop_visual_studio')}</ThemedText>
        
        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('about_services')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_services_start')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('about_web')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_server')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_android')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_sounds')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_sounds_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_images')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_images_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_code')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_code_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_platform')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_platform_start')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('about_platform_web')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('about_platform_android')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_platform_end')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('about_mission')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('about_mission_sentence')}</ThemedText>

        <ThemedText style={[styles.text, {marginTop: 25, fontSize: 13}]}>{i18n.t('last_update')}
          <ThemedText style={[styles.text, {fontSize: 13}]}>{lastUpdate}</ThemedText>
        </ThemedText>
      </ScrollView>
    </ThemedView>
  )
}