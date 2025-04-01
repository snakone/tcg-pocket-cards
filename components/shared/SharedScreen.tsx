import { View, Pressable } from "react-native";
import { useCallback } from "react";
import { useRouter } from "expo-router";

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ButtonStyles, ParallaxStyles, ScreenStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "@/components/ThemedText";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";

interface SharedScreenProps {
  title: string,
  children: React.ReactNode,
  styles?: any,
  customClose?: () => void
}

export default function SharedScreen({title, children, styles, customClose}: SharedScreenProps) {
  const router = useRouter();
  const {i18n} = useI18n();

  const playSound = useCallback(async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }, []);
  
  const goBack = useCallback(async (): Promise<void> => {
    await playSound();
    router.canGoBack() ? router.back() : router.replace('/');
  }, []);

  return (
    <ThemedView style={{flex: 1, overflow: 'hidden'}}>
      <View style={[ParallaxStyles.header, { backgroundColor: "#fff" }]}>
        <ThemedText type="headerTitle">{i18n.t(title)}</ThemedText>
      </View>
      <ThemedView style={[ScreenStyles.content, styles]}>
        {children}
      </ThemedView>
      <View style={ScreenStyles.bottomContent}>
        <Pressable style={ButtonStyles.button} 
                          onPress={customClose ?? goBack} 
                          accessibilityLabel={'CLOSE_SENTENCE'}>
          <View style={ButtonStyles.insetBorder}>
            <IconSymbol name="clear"></IconSymbol>
          </View>
        </Pressable>
      </View>
    </ThemedView>
  )
}