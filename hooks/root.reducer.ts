import { 
  cardsReducer, 
  cardsInitialState, 
  CardsState, 
  CardAction
} from './cards.reducer';

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
  settingsState: SettingsState,
  pocketNewsState: PocketNewsState,
}

export const initialRootState: AppState = {
  cardState: cardsInitialState,
  settingsState: settingsInitialState,
  pocketNewsState: pocketNewsInitialState,
};

export const rootReducer = (state: AppState, action: Actions) => ({
  cardState: cardsReducer(state.cardState, action as CardAction),
  settingsState: settingsReducer(state.settingsState, action as SettingsAction),
  pocketNewsState: pocketNewsReducer(state.pocketNewsState, action as PocketNewAction),
});

type Actions = 
  CardAction |
  SettingsAction |
  PocketNewAction