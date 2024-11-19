import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';

import { BACKGROUND_MUSIC } from '@/shared/definitions/sentences/path.sentences';

const BackgroundMusic = () => {
  if (Platform.OS === 'web') { return null; }
  
  const audio = useRef<Audio.Sound>();

  useEffect(() => {
    const loadAndPlayMusic = async () => {
      const { sound } = await Audio.Sound.createAsync(BACKGROUND_MUSIC);
      try {
        audio.current = sound;
        await audio.current.setVolumeAsync(.5);
        audio.current.setIsLoopingAsync(true);
        audio.current.replayAsync();
      } catch (error) {
        console.error('Error al cargar/reproducir la música:', error);
      }
    };

    loadAndPlayMusic();
  }, []);

  return null;
};

export default BackgroundMusic;