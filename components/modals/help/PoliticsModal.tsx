import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";

export function PoliticsModal() {
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);
  const {i18n} = useI18n();

  const styles = sharedModalStyles;
  const lastUpdate = '05/12/2024';

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
        <ThemedText style={styles.text}>{i18n.t('privacy_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_data')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_data_ask')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_data_info')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_data_register')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_storage')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_storage_sentence')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_storage_third')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_storage_user')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_allow')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_allow_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_allow_access')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_allow_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_security')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_security_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_security_code')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_security_download')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_exclusive')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_exclusive_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_exclusive_lost')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('privacy_exclusive_access')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_changes')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_changes_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('privacy_contact')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('privacy_contact_sentence')}</ThemedText>
        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('privacy_contact_thanks')}</ThemedText>
        
        <ThemedText style={[styles.text, {marginTop: 25, fontSize: 13}]}>{i18n.t('last_update')}
          <ThemedText style={[styles.text, {fontSize: 13}]}>{lastUpdate}</ThemedText>
        </ThemedText>
      </ScrollView>
    </ThemedView>
  )
}