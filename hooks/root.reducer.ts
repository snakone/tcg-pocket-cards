import { 
  cardsReducer, 
  cardsInitialState, 
  CardsState, 
  CardAction
} from './cards.reducer';

import { 
  FilterAction,
  filterInitialState,
  filterReducer,
  FilterState
} from './filter.reducer';

import { 
  ModalAction,
  modalInitialState,
  modalsReducer,
  ModalsState
} from './modals.reducer';

export interface AppState {
  cardState: CardsState,
  modalState: ModalsState,
  filterState: FilterState
}

export const initialRootState: AppState = {
  cardState: cardsInitialState,
  modalState: modalInitialState,
  filterState: filterInitialState
};

export const rootReducer = (state: AppState, action: Actions) => ({
  cardState: cardsReducer(state.cardState, action as CardAction),
  modalState: modalsReducer(state.modalState, action as ModalAction),
  filterState: filterReducer(state.filterState, action as FilterAction)
});

type Actions = 
  CardAction |
  ModalAction |
  FilterAction