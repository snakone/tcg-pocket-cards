import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';

const BackgroundMusic = () => {
  if (Platform.OS === 'web') { return null; }
  
  const audio = useRef<Audio.Sound>();

  useEffect(() => {
    const loadAndPlayMusic = async () => {
      const { sound } = await Audio.Sound.createAsync(require('@/assets/sounds/music.mp3'));
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