import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Image } from 'expo-image';

import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedText } from "../ThemedText";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";
import { SHARE_BLASTOISE, SHARE_CHARIZARD, SHARE_LIST, SHARE_OPTIONS, SHARE_OPTIONS_TRADE } from "@/shared/definitions/sentences/path.sentences";

export function ShareScreenModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('share_intro')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={SHARE_LIST} style={{width: '100%', height: 314}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('decks')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('share_click')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('share_info_deck')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('share_duplicated')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('share_background')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('share_quality')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={SHARE_OPTIONS} style={{width: '100%', height: 542}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('share_download')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={SHARE_CHARIZARD} style={{width: '100%', height: 352}}></Image>
        </ThemedView>

        <ThemedText style={[styles.title, {marginTop: 12}]}>{i18n.t('trades')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('share_click_trade')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('share_info_trade')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('share_background')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('share_quality')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={SHARE_OPTIONS_TRADE} style={{width: '100%', height: 518}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('share_download_trade')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={SHARE_BLASTOISE} style={{width: '100%', height: 193}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('share_expect')}</ThemedText>

      </ScrollView>
    </ThemedView>
  )
}