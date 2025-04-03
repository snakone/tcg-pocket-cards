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
  PocketNewAction,
  pocketNewsInitialState,
  pocketNewsReducer,
  PocketNewsState
} from './news.reducer';

import { 
  SettingsAction,
  settingsInitialState,
  settingsReducer,
  SettingsState
} from './settings.reducer';

export interface AppState {
  cardState: CardsState,
  filterState: FilterState,
  settingsState: SettingsState,
  pocketNewsState: PocketNewsState,
}

export const initialRootState: AppState = {
  cardState: cardsInitialState,
  filterState: filterInitialState,
  settingsState: settingsInitialState,
  pocketNewsState: pocketNewsInitialState,
};

export const rootReducer = (state: AppState, action: Actions) => ({
  cardState: cardsReducer(state.cardState, action as CardAction),
  filterState: filterReducer(state.filterState, action as FilterAction),
  settingsState: settingsReducer(state.settingsState, action as SettingsAction),
  pocketNewsState: pocketNewsReducer(state.pocketNewsState, action as PocketNewAction),
});

type Actions = 
  CardAction |
  FilterAction |
  SettingsAction |
  PocketNewAction