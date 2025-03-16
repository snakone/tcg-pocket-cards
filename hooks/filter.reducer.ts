import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";

export const filterInitialState: FilterState = { 
  filter: new FilterSearch(), 
  sort: [],
  attack_filter: new FilterAttackSearch(),
  attack_sort: []
};

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sort: action.value };
    case 'SET_FILTER':
      return { ...state, filter: action.value };
    case 'SET_ATTACK_SORT':
      return { ...state, attack_sort: action.value };
    case 'SET_ATTACK_FILTER':
      return { ...state, attack_filter: action.value };
    case 'RESET_CARD_FILTERS':
      return { ...state, sort: [], filter: new FilterSearch() };
    default:
      return state;
  }
};

export interface FilterState {
  filter: FilterSearch;
  sort: SortItem[];
  attack_filter: FilterAttackSearch;
  attack_sort: SortItem[];
}

export type FilterAction =
  | { type: 'SET_FILTER', value: FilterSearch }
  | { type: 'SET_SORT', value: SortItem[] }
  | { type: 'SET_ATTACK_FILTER', value: FilterAttackSearch }
  | { type: 'SET_ATTACK_SORT', value: SortItem[] }
  | { type: 'RESET_CARD_FILTERS' }