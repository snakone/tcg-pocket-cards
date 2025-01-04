import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { StorageDeck, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";

export interface SettingsState extends UserProfile {
  music: boolean;
  sound: boolean;
  language: LanguageType;
  music_volume: number;
  sound_volume: number;
  version: string | null;
  show_intro: boolean;
  favorites: number[];
  cards: Card[];
  decks: StorageDeck[];
}

export const settingsInitialState: SettingsState = { 
  music: true,
  sound: true,
  music_volume: 0.5,
  sound_volume: 0.5,
  language: 'es',
  version: null,
  show_intro: true,
  favorites: [],
  cards: [],
  decks: [],
  name: '',
  avatar: 'eevee',
  coin: 'eevee',
  best: null
};

export const settingsReducer = (state: SettingsState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return { ...state, ...action.value };
    case 'SET_FAVORITE':
      return { ...state, favorites: Array.from(new Set([...state.favorites, action.value])) };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(f => f !== action.value) };
    case 'ADD_DECK':
      {
        const index = state.decks.findIndex(d => d.id === action.value.id);
        let value: StorageDeck[];
        if (index !== -1) {
          state.decks[index] = action.value;
          value = [...state.decks];
        } else {
          if (state.decks.length === 0 || (state.decks.length === 1 && state.decks[0] === null)) {
            value = [action.value];
          } else {
            value = [...state.decks, action.value];
          }
        }
        return { ...state, decks: value };
      }
    case 'REMOVE_DECK':
        return { ...state, decks: state.decks.filter(d => d.id !== action.value) };
    default:
      return state;
  }
};

export type SettingsAction =
  | { type: 'SET_SETTINGS', value: SettingsState }
  | { type: 'SET_FAVORITE', value: number }
  | { type: 'REMOVE_FAVORITE', value: number }
  | { type: 'ADD_DECK', value: StorageDeck }
  | { type: 'REMOVE_DECK', value: number }