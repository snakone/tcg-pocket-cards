import { Card } from "@/shared/definitions/interfaces/card.interfaces";

export const cardsInitialState: CardsState = { 
  cards: [], 
  loaded: false 
};

export const cardsReducer = (state: CardsState, action: CardAction) => {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: [...action.cards], loaded: true };
    default:
      return state;
  }
};

export interface CardsState {
  cards: Card[];
  loaded: boolean;
}

export type CardAction =
  | { type: 'SET_CARDS', cards: Card[] }