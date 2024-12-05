import { ScrollView } from "react-native";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { useI18n } from "@/core/providers/LanguageProvider";

export function TermsModal() {
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
        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('terms_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_intro_sentence')}</ThemedText>
        
        <ThemedText style={styles.title}>{i18n.t('terms_proposit')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_proposit_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_use')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('terms_use_free')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('terms_use_required')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('terms_use_format')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_security')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_security_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_privacy')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_privacy_sentence')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_privacy_more')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_author')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_author_sentence')}</ThemedText>
        <ThemedText style={[styles.text, {fontWeight: '600'}]}>{i18n.t('terms_author_official')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_author_no_lucre')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_limit')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_limit_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_modifications')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_modifications_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('terms_contact')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('terms_contact_sentence')}</ThemedText>

        <ThemedText style={[styles.text, {marginTop: 25, fontSize: 13}]}>{i18n.t('last_update')}
          <ThemedText style={[styles.text, {fontSize: 13}]}>{lastUpdate}</ThemedText>
        </ThemedText>
      </ScrollView>
    </ThemedView>
  )
}