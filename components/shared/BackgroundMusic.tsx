import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';

import Storage from '@/core/storage/storage.service'
import { BACKGROUND_MUSIC } from '@/shared/definitions/sentences/path.sentences';
import { MUSIC_ERROR } from '@/shared/definitions/sentences/global.sentences';
import { AppState } from '@/hooks/root.reducer';
import SoundService from '@/core/services/sounds.service';

const BackgroundMusic = ({state}: {state: AppState}) => {
  const audio = useRef<Audio.Sound>();

  useEffect(() => {
    const loadAndPlayMusic = async () => {
      const { sound } = await Audio.Sound.createAsync(BACKGROUND_MUSIC);
      try {
        audio.current = sound;
        await audio.current.setVolumeAsync(.5);
        audio.current.setIsLoopingAsync(true);
        const music = await Storage.get('music');
        if (!music || music === null) { return; }
        audio.current.replayAsync();
      } catch (error) {
        console.error(MUSIC_ERROR, error);
      }
    };

    loadAndPlayMusic();
  }, []);

  useEffect(() => {
    if (audio.current) {
      const { music } = state.settingsState;
      music ? audio.current.replayAsync() : audio.current.stopAsync();
    } 
  }, [state.settingsState.music]);

  useEffect(() => {
    if (audio.current) {
      const volume = state.settingsState.music_volume;
      audio.current.setVolumeAsync(volume);
    }
  }, [state.settingsState.music_volume]);

  return null;
};

export default BackgroundMusic;