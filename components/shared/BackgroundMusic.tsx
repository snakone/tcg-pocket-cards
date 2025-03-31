import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

import Storage from '@/core/storage/storage.service';
import { MUSIC_ERROR } from '@/shared/definitions/sentences/global.sentences';
import { AppState } from '@/hooks/root.reducer';

const BackgroundMusic = ({state, music}: {state: AppState, music: any}) => {
  const audio = useRef<Audio.Sound>();

  useEffect(() => {
    const loadAndPlayMusic = async () => {
      const { sound } = await Audio.Sound.createAsync(music);
      try {
        audio.current = sound;
        await audio.current.setVolumeAsync(
          state.settingsState.music_volume !== undefined ? 
            state.settingsState.music_volume : 0.5);
        audio.current.setIsLoopingAsync(true);
        const music = await Storage.get('music');
        if (!music || music === null) { return; }
        audio.current.replayAsync();
      } catch (error) {
        console.error(MUSIC_ERROR, error);
      }
    };

    loadAndPlayMusic();

    return () => {
      audio.current?.stopAsync();
    }
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