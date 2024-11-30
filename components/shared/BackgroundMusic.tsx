import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';
import Storage from '@/core/storage/storage.service'

import { BACKGROUND_MUSIC } from '@/shared/definitions/sentences/path.sentences';
import { MUSIC_ERROR } from '@/shared/definitions/sentences/global.sentences';

const BackgroundMusic = () => {
  if (Platform.OS === 'web') { return null; }
  const audio = useRef<Audio.Sound>();

  useEffect(() => {
    const loadAndPlayMusic = async () => {
      const music = await Storage.get('music');
      if (!music || music === null) { return; }
      const { sound } = await Audio.Sound.createAsync(BACKGROUND_MUSIC);
      try {
        audio.current = sound;
        await audio.current.setVolumeAsync(.5);
        audio.current.setIsLoopingAsync(true);
        audio.current.replayAsync();
      } catch (error) {
        console.error(MUSIC_ERROR, error);
      }
    };

    loadAndPlayMusic();
  }, []);

  return null;
};

export default BackgroundMusic;