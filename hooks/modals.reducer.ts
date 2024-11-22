export const modalInitialState: ModalsState = { 
  opened: false
};

export const modalsReducer = (state: ModalsState, action: ModalAction) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state,  opened: action.value };
    default:
      return state;
  }
};

export interface ModalsState {
  opened: boolean;
}

export type ModalAction =
  | { type: 'OPEN', value: boolean }