import { View, TouchableOpacity } from "react-native";
import { useEffect, useCallback } from "react";
import { useNavigation, useRouter } from "expo-router";

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { ButtonStyles, ParallaxStyles, ScreenStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "@/components/ThemedText";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";

interface SharedScreenProps {
  title: string,
  children: React.ReactNode,
  styles?: any
}

export default function SharedScreen({title, children, styles}: SharedScreenProps) {
  const router = useRouter();
  const navigation = useNavigation();
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
        <TouchableOpacity style={ButtonStyles.button} 
                          onPress={goBack} 
                          accessibilityLabel={CLOSE_SENTENCE}>
          <View style={ButtonStyles.insetBorder}>
            <IconSymbol name="clear"></IconSymbol>
          </View>
        </TouchableOpacity>
      </View>
    </ThemedView>
  )
}