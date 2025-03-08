export const modalInitialState: ModalsState = { 
  sort_opened: false,
  filter_opened: false,
  avatar_opened: false,
  coin_opened: false,
  best_opened: false,
  sort_attack_opened: false,
  filter_attack_opened: false,
};

export const modalsReducer = (state: ModalsState, action: ModalAction): ModalsState => {
  switch (action.type) {
    case 'OPEN_SORT':
      return { ...state, sort_opened: action.value };
    case 'OPEN_FILTER':
        return { ...state, filter_opened: action.value };
    case 'OPEN_ATTACK_SORT':
      return { ...state, sort_attack_opened: action.value };
    case 'OPEN_ATTACK_FILTER':
        return { ...state, filter_attack_opened: action.value };
    case 'OPEN_AVATAR':
      return { ...state, avatar_opened: action.value };
    case 'OPEN_COIN':
      return { ...state, coin_opened: action.value };
    case 'OPEN_BEST':
      return { ...state, best_opened: action.value };
    case 'CLOSE_MODALS':
        return { 
          ...state, 
          sort_opened: false, 
          filter_opened: false, 
          avatar_opened: false, 
          coin_opened: false, 
          best_opened: false,
          sort_attack_opened: false,
          filter_attack_opened: false,
        };
    default:
      return state;
  }
};

export interface ModalsState {
  sort_opened: boolean;
  filter_opened: boolean;
  avatar_opened: boolean;
  coin_opened: boolean;
  best_opened: boolean;
  sort_attack_opened: boolean,
  filter_attack_opened: boolean,
}

export type ModalAction =
  | { type: 'OPEN_SORT', value: boolean }
  | { type: 'OPEN_FILTER', value: boolean }
  | { type: 'OPEN_ATTACK_SORT', value: boolean }
  | { type: 'OPEN_ATTACK_FILTER', value: boolean }
  | { type: 'OPEN_AVATAR', value: boolean }
  | { type: 'OPEN_COIN', value: boolean }
  | { type: 'OPEN_BEST', value: boolean }
  | { type: 'CLOSE_MODALS' }