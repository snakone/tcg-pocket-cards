import { PocketNews } from "@/shared/definitions/interfaces/global.interfaces";

export const pocketNewsInitialState: PocketNewsState = { 
  news: [], 
  loaded: false,
};

export const pocketNewsReducer = (state: PocketNewsState, action: PocketNewAction): PocketNewsState => {
  switch (action.type) {
    case 'SET_NEWS':
      return { ...state, news: [...action.value], loaded: true };
    case 'SET_LOADED':
        return { ...state, loaded: action.value };
    default:
      return state;
  }
};

export interface PocketNewsState {
  news: PocketNews[];
  loaded: boolean;
}

export type PocketNewAction =
  | { type: 'SET_NEWS', value: PocketNews[] }
  | { type: 'SET_LOADED', value: boolean }