import { useState } from "react";
import { ScrollView } from "react-native";
import { Image } from 'expo-image';
import { useSharedValue } from "react-native-reanimated";

import { sharedModalStyles } from "@/shared/styles/component.styles";
import { useI18n } from "@/core/providers/LanguageProvider";

import { 
  GRID_SEARCH,
  GRID_FILTER, 
  GRID_OPTION, 
  GRID_SORT, 
  GRID_SORT_ICON
} from "@/shared/definitions/sentences/path.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export function CardsScreenModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('grid_intro')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('grid_udpdate')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={GRID_SEARCH} style={{width: '100%', height: 35}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('grid_search')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('grid_filter')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('grid_filter_icon')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={GRID_FILTER} style={{width: '100%', height: 382}}></Image>
        </ThemedView>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={GRID_OPTION} style={{width: '100%', height: 460}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('grid_option')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('grid_reset')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('grid_filter_check')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('grid_sort')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('grid_sort_icon')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={GRID_SORT_ICON} style={{width: '100%', height: 380}}></Image>
        </ThemedView>
        
        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={GRID_SORT} style={{width: '100%', height: 460}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('grid_sort_start')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('grid_sort_order')}</ThemedText>
      </ScrollView>
    </ThemedView>
  )
}
