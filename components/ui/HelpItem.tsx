import { Platform, TouchableOpacity } from 'react-native';
import { Audio } from "expo-av";
import { useRef, useEffect } from 'react';

import { RouteItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { Colors } from '@/shared/definitions/utils/colors';
import { AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { HelpItemStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "../ThemedView";
import { IconSymbol } from './IconSymbol';

export default function HelpItem({onClick, children}: RouteItem) {
  const audio = useRef<Audio.Sound>();

  const playSound = async () => {
    if (audio.current) {
      audio.current.replayAsync();
    }
  }

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_OPEN);
      audio.current = sound;

      if (Platform.OS === 'web') {
        audio.current.setVolumeAsync(.3);
      }
    }

    loadSounds();
  }, []);

  async function handleClick(): Promise<void> {
    await playSound();
    onClick();
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <ThemedView style={HelpItemStyles.item}>
        {children}
        <ThemedView style={{marginLeft: 'auto'}}>
          <IconSymbol name="chevron.right.circle" color={Colors.light.text}></IconSymbol>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  )
}

