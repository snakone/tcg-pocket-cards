import { 
  cardsReducer, 
  cardsInitialState, 
  CardsState, 
  CardAction
} from './cards.reducer';

import { 
  ModalAction,
  modalInitialState,
  modalsReducer,
  ModalsState
} from './modals.reducer';

export interface AppState {
  cardState: CardsState,
  modalState: ModalsState
}

export const initialRootState = {
  cardState: cardsInitialState,
  modalState: modalInitialState
};

export const rootReducer = (state: AppState, action: Actions) => ({
  cardState: cardsReducer(state.cardState, action as CardAction),
  modalState: modalsReducer(state.modalState, action as ModalAction)
});

type Actions = 
  CardAction |
  ModalAction