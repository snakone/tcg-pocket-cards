import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";

export const filterInitialState: FilterState = { 
  filter: {}, 
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
  filter: any;
  sort: SortItem[];
}

export type FilterAction =
  | { type: 'SET_FILTER', value: any }
  | { type: 'SET_SORT', value: any }