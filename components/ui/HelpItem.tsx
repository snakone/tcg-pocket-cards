import { Platform, TouchableOpacity } from 'react-native';
import { Audio } from "expo-av";
import { useRef, useEffect, useCallback } from 'react';

import { RouteItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { Colors } from '@/shared/definitions/utils/colors';
import { AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { HelpItemStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "../ThemedView";
import { IconSymbol } from './IconSymbol';

export default function HelpItem({ onClick, children }: RouteItem) {
  const audio = useRef<Audio.Sound | null>(null);

  const loadSound = useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_OPEN);
    audio.current = sound;

    if (Platform.OS === 'web') {
      await sound.setVolumeAsync(0.3);
    }
  }, []);

  useEffect(() => {
    loadSound();
    return () => {
      if (audio.current) {
        audio.current.unloadAsync();
      }
    };
  }, [loadSound]);

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  const handleClick = async () => {
    await playSound();
    onClick();
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <ThemedView style={HelpItemStyles.item}>
        {children}
        <ThemedView style={{ marginLeft: 'auto' }}>
          <IconSymbol name="chevron.right.circle" color={Colors.light.text} />
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

