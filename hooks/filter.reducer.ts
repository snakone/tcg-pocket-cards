import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";

export type FilterKey = 'cards' | 'attacks' | 'collection' | 'decks';

interface FilterValue {
  filter: FilterSearch | FilterAttackSearch;
  sort: SortItem[];
}

export const filterInitialState: FilterState = { 
  filters: {
    cards: {
      filter: new FilterSearch(), 
      sort: []
    },
    attacks: {
      filter: new FilterAttackSearch(), 
      sort: []
    },
    collection: {
      filter: new FilterSearch(), 
      sort: []
    },
    decks: {
      filter: new FilterSearch(), 
      sort: []
    },
  }
};

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SORT': {
      const newState = {...state};
      newState.filters[action.value.key].sort = action.value.sort;
      return { ...newState };
    }
    case 'SET_FILTER': {
      const newState = {...state};
      newState.filters[action.value.key].filter = action.value.filter;
      return { ...newState };
    }
    case 'RESET_FILTER': {
      const newState = {...state};
      newState.filters[action.value] = {
        sort: [],
        filter: action.value !== 'attacks' ? new FilterSearch() : new FilterAttackSearch()
      }
      return { ...newState };
    }
    default:
      return state;
  }
};

export interface FilterState {
  filters: Record<FilterKey, FilterValue>
}

export type FilterAction =
  | { type: 'SET_FILTER', value: {key: FilterKey, filter: FilterSearch | FilterAttackSearch} }
  | { type: 'SET_SORT', value: {key: FilterKey, sort: SortItem[]} }
  | { type: 'RESET_FILTER', value: FilterKey }