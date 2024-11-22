import { 
  cardsReducer, 
  cardsInitialState, 
  CardsState, 
  CardAction
} from './cards.reducer';
import { modalInitialState, modalsReducer, ModalsState } from './modals.reducer';

export const initialRootState = {
  cardState: cardsInitialState,
  modalState: modalInitialState
};

export const rootReducer = (state: AppState, action: Actions) => ({
  cardState: cardsReducer(state.cardState, action as CardAction),
  modalState: modalsReducer(state.modalState, action as ModalAction)
});

export interface AppState {
  cardState: CardsState,
  modalState: ModalsState
}

export type ModalAction =
  | { type: 'OPEN', value: boolean }

type Actions = 
  CardAction |
  ModalAction