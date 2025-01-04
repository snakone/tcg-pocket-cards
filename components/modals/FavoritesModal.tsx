import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { useState } from "react";
import { Image } from 'expo-image';
import { useSharedValue } from "react-native-reanimated";
import { ThemedText } from "../ThemedText";
import { Platform, ScrollView } from "react-native";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";
import { FAVORITE_FILTER, FAVORITE_HOW_TO, FAVORITE_MEW, FAVORITE_SYMBOL } from "@/shared/definitions/sentences/path.sentences";

export function FavoritesModal() {
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
          <Image source={FAVORITE_HOW_TO} style={{width: '75%', height: Platform.OS === 'web' ? 390 : 420}}></Image>
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
          <Image source={FAVORITE_MEW} style={{width: '75%', height: 317}}></Image>
        </ThemedView>

        <ThemedText style={styles.text}>{i18n.t('favorites_filter')}</ThemedText>

        <ThemedView style={{alignItems: 'center', marginBottom: 16}}>
          <Image source={FAVORITE_FILTER} style={{width: '75%', height: 317}}></Image>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  )
}