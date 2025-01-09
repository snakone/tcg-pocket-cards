import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";

export const filterInitialState: FilterState = { 
  filter: new FilterSearch(), 
  sort: []
};

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sort: action.value };
    case 'SET_FILTER':
        return { ...state, filter: action.value };
    default:
      return state;
  }
};

export interface FilterState {
  filter: FilterSearch;
  sort: SortItem[];
}

export type FilterAction =
  | { type: 'SET_FILTER', value: FilterSearch }
  | { type: 'SET_SORT', value: any }