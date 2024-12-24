import { SettingsState } from '@/hooks/settings.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {

  constructor() {}

  static keys = [
    'music', 
    'sound',
    'language',
    'version',
    'music_volume',
    'sound_volume',
    'show_intro',
    'favorites',
    'cards'
  ];

  public static async set(key: string, value: any): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  public static async get(key: string): Promise<any | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      console.log(e);
    }
  }

  public static setSettings(settings: SettingsState): void {
    for (const key of Object.keys(settings)) {
      this.set(key, (settings as any)[key]);
    }
  }

  public static async loadSettings(): Promise<SettingsState> {
    let settings: {[key: string]: any} = {}

    for (const key of this.keys) {
      settings[key] = await this.get(key);
    }

    return settings as SettingsState;
  }

  public static async setFavorite(id: number): Promise<any | null> {
    try {
      const favorites: number[] = await this.get('favorites');
      if (favorites !== null) {
        const value = Array.from(new Set([...favorites, id]));
        this.set('favorites', value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async removeFavorite(id: number): Promise<any | null> {
    try {
      const favorites: number[] = await this.get('favorites');
      if (favorites !== null) {
        const value = favorites.filter(f => f !== id);
        this.set('favorites', value);
      }
    } catch (e) {
      console.log(e);
    }
  }
}