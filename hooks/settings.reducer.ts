import { LanguageType } from "@/shared/definitions/types/global.types";

export interface SettingsState {
  music: boolean;
  sound: boolean;
  language: LanguageType;
  music_volume: number;
  sound_volume: number;
  version: string | null;
  show_intro: boolean;
  favorites: number[];
}

export const settingsInitialState: SettingsState = { 
  music: true,
  sound: true,
  music_volume: 0.5,
  sound_volume: 0.5,
  language: 'es',
  version: null,
  show_intro: true,
  favorites: []
};

export const settingsReducer = (state: SettingsState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return { ...state, ...action.value };
    case 'SET_FAVORITE':
      return { ...state, favorites: Array.from(new Set([...state.favorites, action.value])) };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(f => f !== action.value) };
    default:
      return state;
  }
};

export type SettingsAction =
  | { type: 'SET_SETTINGS', value: SettingsState }
  | { type: 'SET_FAVORITE', value: number }
  | { type: 'REMOVE_FAVORITE', value: number }