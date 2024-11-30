export const settingsInitialState: SettingsState = { 
  music: true,
  sound: true,
  language: 'es',
  version: null
};

export const settingsReducer = (state: SettingsState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'SET_SETTINGS':
      const { music, sound, language, version } = action.value;
      return { ...state, music, sound, language, version };
    default:
      return state;
  }
};

export interface SettingsState {
  music: boolean;
  sound: boolean;
  language: 'es' | 'en' | 'ja';
  version: string | null;
}

export type SettingsAction =
  | { type: 'SET_SETTINGS', value: SettingsState }