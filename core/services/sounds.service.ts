import { Audio } from 'expo-av';

import { 
  AUDIO_MENU_CLOSE,
  AUDIO_MENU_OPEN,
  BACKGROUND_MUSIC,
  CHANGE_VIEW, 
  PICK_CARD_SOUND, 
  POP_PICK 
} from '@/shared/definitions/sentences/path.sentences';

export const Sounds: {[key: string]: any} = {
  AUDIO_MENU_OPEN,
  AUDIO_MENU_CLOSE,
  PICK_CARD_SOUND,
  BACKGROUND_MUSIC,
  CHANGE_VIEW,
  POP_PICK,
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

  static async play(key: string) {
    if (!this.enabled) return;
    const sound = this.sounds[key];
    if (sound) {
      await sound.replayAsync();
    } else {
      console.warn(`El sonido con clave "${key}" no está cargado.`);
      await this.preloadAllSounds();
    }
  }

  static async stop(key: string) {
    const sound = this.sounds[key]; 
    if (sound) {
      await sound.stopAsync();
    }
  }

  public static setEnabled(value: boolean) {
    this.enabled = value;
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
}

export default SoundService;