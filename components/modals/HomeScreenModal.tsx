import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from 'react-native-reanimated';

import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { IconSymbol } from "../ui/IconSymbol";
import ScrollIndicator from "../ui/ScrollIndicator";

export function HomeScreenModal() {
  const {i18n} = useI18n();
  const styles = sharedModalStyles;
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);

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
        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('home_welcome')}</ThemedText>
        <ThemedText style={styles.text}>
          {i18n.t('home_modal_intro')}
        </ThemedText>
        <ThemedView style={{marginBottom: 20, marginTop: 6}}>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <IconSymbol
                name="chevron.right"
                size={18}
                weight="medium"
                color="skyblue"
                style={{marginRight: 6, fontSize: 25}}
              />
              <ThemedText style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
                {i18n.t('home_modal_explore')} 
              </ThemedText>
          </ThemedView>
          <ThemedText style={styles.text}>{i18n.t('home_modal_explore_sentence')}</ThemedText>
        </ThemedView>
        <ThemedView style={{marginBottom: 20, marginTop: 6}}>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <IconSymbol
                name="chevron.right"
                size={18}
                weight="medium"
                color="skyblue"
                style={{marginRight: 6, fontSize: 25}}
              />
              <ThemedText style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
                {i18n.t('home_modal_filter')} 
              </ThemedText>
          </ThemedView>
          <ThemedText style={styles.text}>{i18n.t('home_modal_filter_sentence')}</ThemedText>
        </ThemedView>
        <ThemedView style={{marginBottom: 20, marginTop: 6}}>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <IconSymbol
                name="chevron.right"
                size={18}
                weight="medium"
                color="skyblue"
                style={{marginRight: 6, fontSize: 25}}
              />
              <ThemedText style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
                {i18n.t('home_modal_order')} 
              </ThemedText>
          </ThemedView>
          <ThemedText style={styles.text}>{i18n.t('home_modal_order_sentence')}</ThemedText>
        </ThemedView>
        <ThemedView style={{marginBottom: 20, marginTop: 6}}>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <IconSymbol
                name="chevron.right"
                size={18}
                weight="medium"
                color="skyblue"
                style={{marginRight: 6, fontSize: 25}}
              />
              <ThemedText style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
                {i18n.t('home_modal_create')} 
              </ThemedText>
          </ThemedView>
          <ThemedText style={styles.text}>{i18n.t('home_modal_create_sentence')}</ThemedText>
        </ThemedView>

        <ThemedText type="subtitle" style={[styles.text, {fontSize: 15}]}>{i18n.t('home_modal_new')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('home_modal_filter_exclusive')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('home_modal_new_sort')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('home_modal_design')}</ThemedText>
        <ThemedText style={[styles.text, {marginBottom: 12}]}>{i18n.t('home_modal_want')} {i18n.t('home_modal_last')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}
