import { useState } from "react";
import { Linking, Pressable, ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";

import { sharedModalStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";

export function ContactModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('contact_intro')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('contact_email')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_email_intro')}</ThemedText>

        <Pressable onPress={() => Linking.openURL('mailto:tcgpocketcards@gmail.com')}>
          <ThemedText style={[styles.text, {fontWeight: 600, fontSize: 16, color: Colors.light.link}]}>{'tcgpocketcards@gmail.com\n\n'}</ThemedText>
        </Pressable>

        <ThemedText style={styles.text}>{i18n.t('contact_email_ask')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('contact_github')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_github_intro')}</ThemedText>
        
        <Pressable onPress={() => Linking.openURL('https://github.com/snakone/tcg-pocket-cards')}>
          <ThemedText style={[styles.text, {fontWeight: 600, fontSize: 16, color: Colors.light.link}]}>{i18n.t('contact_github_repo')}</ThemedText>
        </Pressable>
        
        <ThemedText style={styles.text}>- {i18n.t('contact_github_repo_explore')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('contact_github_repo_issues')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('contact_github_repo_pull')}</ThemedText>        
        <ThemedText style={styles.text}>- {i18n.t('contact_github_repo_wiki')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_github_repo_end')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('contact_join')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_join_intro')}</ThemedText>

        <Pressable onPress={() => Linking.openURL('https://chat.whatsapp.com/J5FH6o2f6CTBJnHyFTjaha')}>
          <ThemedText style={[styles.text, {fontWeight: 600, fontSize: 16, color: Colors.light.link}]}>{i18n.t('contact_join_whatsapp')}</ThemedText>
        </Pressable>

        <ThemedText style={styles.text}>- {i18n.t('contact_join_share')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('contact_join_ask')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('contact_join_post')}</ThemedText>        
        <ThemedText style={styles.text}>- {i18n.t('contact_join_community')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('contact_filosophy')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_filosophy_intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_filosophy_go')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_filosophy_help')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('contact_filosophy_end')}</ThemedText>

        <ThemedText style={[styles.text, {marginTop: 25, fontSize: 13}]}>{i18n.t('last_update')}
          <ThemedText style={[styles.text, {fontSize: 13}]}>{lastUpdate}</ThemedText>
        </ThemedText>
      </ScrollView>
    </ThemedView>
  )
}