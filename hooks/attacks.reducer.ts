import { Attack } from "@/shared/definitions/interfaces/card.interfaces";

export const attacksInitialState: AttacksState = { 
  attack_list: []
};

export const attacksReducer = (state: AttacksState, action: AttackAction): AttacksState => {
  switch (action.type) {
    case 'SET_ATTACK_LIST':
      return { ...state, attack_list: action.value };
    default:
      return state;
  }
};

export interface AttacksState {
  attack_list: Attack[];
}

export type AttackAction =
  | { type: 'SET_ATTACK_LIST', value: Attack[] }