import { View, TouchableOpacity, Platform } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import { Audio } from "expo-av";
import { useNavigation, useRouter } from "expo-router";

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { ButtonStyles, ParallaxStyles, ScreenStyles } from "@/shared/styles/component.styles";
import { AUDIO_MENU_CLOSE } from "@/shared/definitions/sentences/path.sentences";
import { ThemedText } from "@/components/ThemedText";

interface SharedScreenProps {
  title: string,
  children: React.ReactNode
}

export default function HelpScreen({title, children}: SharedScreenProps) {
  const router = useRouter();
  const audio = useRef<Audio.Sound>();
  const navigation = useNavigation();

  const playSound = useCallback(async () => {
    if (audio.current) { await audio.current.replayAsync(); }
  }, []);
  
  const goBack = useCallback(async (): Promise<void> => {
    await playSound();
    router.canGoBack() ? router.back() : router.replace('/');
  }, []);
  
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      audio.current = sound;

      if (Platform.OS === 'web') {
        audio.current.setVolumeAsync(.3);
      }
    }

    loadSounds();
  }, []);

  return (
    <ThemedView style={{flex: 1}}>
      <View style={[ParallaxStyles.header, { backgroundColor: "#fff" }]}>
        <ThemedText type="headerTitle">{title}</ThemedText>
      </View>
      <ThemedView style={ScreenStyles.content}>
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