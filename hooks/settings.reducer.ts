export const settingsInitialState: SettingsState = { 
  music: true,
  sound: true,
  music_volume: 0.5,
  sound_volume: 0.5,
  language: 'es',
  version: null
};

export const settingsReducer = (state: SettingsState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return { ...state, ...action.value };
    default:
      return state;
  }
};

export interface SettingsState {
  music: boolean;
  sound: boolean;
  language: 'es' | 'en' | 'ja';
  music_volume: number;
  sound_volume: number;
  version: string | null;
}

export type SettingsAction =
  | { type: 'SET_SETTINGS', value: SettingsState }