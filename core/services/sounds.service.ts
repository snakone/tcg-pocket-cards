import { Audio, AVPlaybackSource } from 'expo-av';

import { 
  AUDIO_MENU_CLOSE,
  AUDIO_MENU_OPEN,
  CHANGE_VIEW, 
  DELETE_SOUND, 
  PICK_CARD_SOUND, 
  POP_PICK,
  SCALE,
  SPLASH_MUSIC,
  FLIP_CARD,
  FLIP_CARD_REVERSE,
  SUCCESS_SOUND
} from '@/shared/definitions/sentences/path.sentences';

export const Sounds: {[key: string]: AVPlaybackSource} = {
  AUDIO_MENU_OPEN,
  AUDIO_MENU_CLOSE,
  PICK_CARD_SOUND,
  CHANGE_VIEW,
  POP_PICK,
  SCALE,
  SPLASH_MUSIC,
  DELETE_SOUND,
  FLIP_CARD,
  FLIP_CARD_REVERSE,
  SUCCESS_SOUND
};

export class SoundService {
  static enabled = true;
  static sounds: any = {};

  constructor() {}

  static async preloadAllSounds() {
    for (const key in Sounds) {
      if (Sounds.hasOwnProperty(key) && !this.sounds[key]) {
        const { sound } = await Audio.Sound.createAsync(Sounds[key]);
        this.sounds[key] = sound;
      }
    }
  }

  static async play(key: string, loop = false) {
    if (!this.enabled) return;
    const sound = this.sounds[key];
    if (sound) {
      await sound.replayAsync();
      if (loop) {
        sound.setIsLoopingAsync(true);
      }
    } else {
      console.warn(`El sonido con clave "${key}" no está cargado.`);
      await this.preloadAllSounds();
    }
  }

  static async stop(key: string) {
    const sound = this.sounds[key]; 
    if (sound) {
      await sound.stopAsync();
      sound.setIsLoopingAsync(false);
    }
  }

  public static setEnabled(value: boolean) {
    this.enabled = value;
  }

  public static setVolume(value: number) {
    const volume = Math.max(0, Math.min(1, value));
    this.setVolumeAllSounds(volume);
  }

  static async unloadAllSounds() {
    for (const key in this.sounds) {
      const sound = this.sounds[key];
      if (sound) {
        await sound.unloadAsync();
        delete this.sounds[key];
      }
    }
  }

  static async setVolumeSplash(volume: number) {
    const sound = this.sounds['SPLASH_MUSIC'];
    (sound as Audio.Sound).setVolumeAsync(volume);
  }

  private static async setVolumeAllSounds(volume: number): Promise<void> {
    for (const key in Sounds) {
      if (this.sounds[key]) {
        (this.sounds[key] as Audio.Sound).setVolumeAsync(volume);
      }
    }
  }
}

export default SoundService;