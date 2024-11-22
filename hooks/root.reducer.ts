import { 
  cardsReducer, 
  cardsInitialState, 
  CardsState, 
  CardAction
} from './cards.reducer';

export const initialRootState = {
  cardState: cardsInitialState,
};

export const rootReducer = (state: AppState, action: Actions) => ({
  cardState: cardsReducer(state.cardState, action),
});

export interface AppState {
  cardState: CardsState
}

type Actions = 
  CardAction