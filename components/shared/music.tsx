import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';

const BackgroundMusic = () => {
  if (Platform.OS === 'web') {
    return null;
  }
  
  const sound = useRef<Audio.Sound>();

  useEffect(() => {
    const loadAndPlayMusic = async () => {
      sound.current = new Audio.Sound();
      try {
        await sound.current.loadAsync(require('../../assets/sounds/music.mp3'));
        await sound.current.setIsLoopingAsync(true);
        await sound.current.setVolumeAsync(.1);
        await sound.current.playAsync();
      } catch (error) {
        console.error('Error al cargar/reproducir la música:', error);
      }
    };

    loadAndPlayMusic();

    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);

  return null;
};

export default BackgroundMusic;