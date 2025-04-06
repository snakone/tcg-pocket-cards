import { getLocales } from "expo-localization";

import { LanguageType } from "@/shared/definitions/types/global.types";
import { DEFAULT_LANG } from "@/shared/definitions/utils/constants";

export interface SettingsState {
  music: boolean;
  sound: boolean;
  language: LanguageType;
  music_volume: number;
  sound_volume: number;
  version: string | null;
  show_intro: boolean;
}

export const settingsInitialState: SettingsState = { 
  music: true,
  sound: true,
  music_volume: 0.3,
  sound_volume: 0.3,
  language: (getLocales()[0]?.languageCode ?? DEFAULT_LANG) as LanguageType,
  version: null,
  show_intro: true,
};

export const settingsReducer = (state: SettingsState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return { ...state, ...action.value };
    case 'RESET_SETTINGS': 
    {
      for (const key of Object.keys(settingsInitialState)) {
        (state as any)[key] = (settingsInitialState as any)[key]
      }

      return { ...state }
    }
 
    default:
      return state;
  }
};

export type SettingsAction =
  | { type: 'SET_SETTINGS', value: SettingsState }
  | { type: 'RESET_SETTINGS' }