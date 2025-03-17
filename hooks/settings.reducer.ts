import { CollectionUser } from "@/shared/definitions/classes/collection.class";
import { CardLanguageENUM } from "@/shared/definitions/enums/card.enums";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { StorageDeck, TradeItem, UserCollection, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { areAllAmountsZero } from "@/shared/definitions/utils/functions";

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
  trades: TradeItem[];
  collection: UserCollection[];
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
  best: null,
  trades: [],
  collection: []
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
    case 'ADD_TRADE':
      {
        const index = state.trades.findIndex(d => d.id === action.value.id);
        let value: TradeItem[];
        if (index !== -1) {
          state.trades[index] = action.value;
          value = [...state.trades];
        } else {
          if (state.trades.length === 0 || (state.trades.length === 1 && state.trades[0] === null)) {
            value = [action.value];
          } else {
            value = [...state.trades, action.value];
          }
        }
        return { ...state, trades: value };
      }
    case 'SET_COLLECTION':
      return { ...state, collection: action.value };
    case 'ADD_TO_COLLECTION': 
      {
        const item = state.collection.find(coll => coll.id === action.value.id);

        if (item) {
          item.amount[action.value.lang]++;
        } else {
          state.collection = [...state.collection, new CollectionUser(action.value.id, action.value.lang)];
        }
        return { ...state, collection: state.collection.slice() };
      }
    case 'REMOVE_FROM_COLLECTION': 
      {
        const item = state.collection.find(coll => coll.id === action.value.id);

        if (item) {
          item.amount[action.value.lang]--;
        } 

        if (item && areAllAmountsZero(item)) {
          state.collection = state.collection.filter(coll => coll.id !== action.value.id);
        }
        return { ...state, collection: state.collection.slice() };
      }   
    case 'REMOVE_TRADE':
        return { ...state, trades: state.trades.filter(d => d.id !== action.value) };
    case 'RESET_COLLECTION': 
    {
      state.collection.forEach(coll => coll.amount[action.value] = 0);
      return { ...state, collection: [...state.collection] };
    }
    case 'RESET_SETTINGS': 
    {
      for (const key of Object.keys(settingsInitialState).filter(key => key !== 'cards')) {
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
  | { type: 'SET_FAVORITE', value: number }
  | { type: 'REMOVE_FAVORITE', value: number }
  | { type: 'ADD_DECK', value: StorageDeck }
  | { type: 'REMOVE_DECK', value: number }
  | { type: 'ADD_TRADE', value: TradeItem }
  | { type: 'REMOVE_TRADE', value: number }
  | { type: 'SET_COLLECTION', value: UserCollection[] }
  | { type: 'ADD_TO_COLLECTION', value: {id: number, lang: CardLanguageENUM} }
  | { type: 'REMOVE_FROM_COLLECTION', value: {id: number, lang: CardLanguageENUM} }
  | { type: 'RESET_COLLECTION', value: CardLanguageENUM }
  | { type: 'RESET_SETTINGS' }