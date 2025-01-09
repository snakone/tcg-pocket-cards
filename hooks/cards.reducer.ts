import { Card } from "@/shared/definitions/interfaces/card.interfaces";

export const cardsInitialState: CardsState = { 
  cards: [], 
  loaded: false,
  navigating: false
};

export const cardsReducer = (state: CardsState, action: CardAction): CardsState => {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: [...action.value], loaded: true };
    case 'SET_NAVIGATING':
        return { ...state, navigating: action.value };
    case 'SET_LOADED':
        return { ...state, loaded: action.value };
    case 'RESET_CARDS':
      return { ...state, loaded: false, cards: [] };
    default:
      return state;
  }
};

export interface CardsState {
  cards: Card[];
  loaded: boolean;
  navigating: boolean;
}

export type CardAction =
  | { type: 'SET_CARDS', value: Card[] }
  | { type: 'SET_NAVIGATING', value: boolean }
  | { type: 'SET_LOADED', value: boolean }
  | { type: 'RESET_CARDS' }