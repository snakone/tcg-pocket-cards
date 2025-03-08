import { Attack } from "@/shared/definitions/interfaces/card.interfaces";

export const attacksInitialState: AttacksState = { 
  current: null,
  attack_list: []
};

export const attacksReducer = (state: AttacksState, action: AttackAction): AttacksState => {
  switch (action.type) {
    case 'SET_CURRENT_ATTACK':
      return { ...state, current: action.value };
    case 'SET_ATTACK_LIST':
      return { ...state, attack_list: action.value };
    case 'RESET_ATTACK':
      return { ...state, current: null };
    default:
      return state;
  }
};

export interface AttacksState {
  current: Attack | null;
  attack_list: Attack[];
}

export type AttackAction =
  | { type: 'SET_CURRENT_ATTACK', value: Attack }
  | { type: 'SET_ATTACK_LIST', value: Attack[] }
  | { type: 'RESET_ATTACK' }