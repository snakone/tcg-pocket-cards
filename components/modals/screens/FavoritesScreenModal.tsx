import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { useState } from "react";
import { Image } from 'expo-image';
import { Platform, ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";
import { FAVORITE_FILTER, FAVORITE_HOW_TO, FAVORITE_MEW, FAVORITE_SYMBOL } from "@/shared/definitions/sentences/path.sentences";

export function FavoritesScreenModal() {
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
        <ThemedText style={[styles.text, {marginTop: 4}]}>{i18n.t('favorites_intro')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('favorites_mark')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('favorites_access')}</ThemedText>
        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={FAVORITE_HOW_TO} style={{width: '100%', height: 554}}></Image>
        </ThemedView>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <ThemedText style={styles.text}>{i18n.t('favorites_after')}</ThemedText>
          <Image source={FAVORITE_SYMBOL} style={{width: 40, height: 40}}></Image>
        </ThemedView>

        <ThemedText style={styles.title}>{i18n.t('favorites_identify')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('favorites_navigating')}
          <ThemedText style={{fontWeight: 600}}>{i18n.t('favorites_corner')}</ThemedText>
        </ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 30}}>
          <Image source={FAVORITE_MEW} style={{width: '100%', height: 428}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('favorites_filter')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 16}}>
          <Image source={FAVORITE_FILTER} style={{width: '100%', height: 521}}></Image>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  )
}