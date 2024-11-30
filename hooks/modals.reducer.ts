export const modalInitialState: ModalsState = { 
  sort_opened: false,
  filter_opened: false
};

export const modalsReducer = (state: ModalsState, action: ModalAction): ModalsState => {
  switch (action.type) {
    case 'OPEN_SORT':
      return { ...state, sort_opened: action.value };
    case 'OPEN_FILTER':
        return { ...state, filter_opened: action.value };
    case 'CLOSE_MODALS':
        return { ...state, sort_opened: false, filter_opened: false};
    default:
      return state;
  }
};

export interface ModalsState {
  sort_opened: boolean;
  filter_opened: boolean;
}

export type ModalAction =
  | { type: 'OPEN_SORT', value: boolean }
  | { type: 'OPEN_FILTER', value: boolean }
  | { type: 'CLOSE_MODALS' }