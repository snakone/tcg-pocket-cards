import { FilterKey } from '@/hooks/filter.reducer';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { FilterAttackSearch } from '@/shared/definitions/classes/filter_attack.class';
import { BehaviorSubject } from 'rxjs';

export interface FilterStatePayload {
  key: FilterKey;
  value: FilterSearch | FilterAttackSearch;
}

class FilterState {
  public cardsFilter$ = new BehaviorSubject<FilterSearch>(new FilterSearch());
  public attacksFilter$ = new BehaviorSubject<FilterAttackSearch>(new FilterAttackSearch());
  public decksFilter$ = new BehaviorSubject<FilterSearch>(new FilterSearch());
  public collectionFilter$ = new BehaviorSubject<FilterSearch>(new FilterSearch());

  private mappedFilters: Record<FilterKey, BehaviorSubject<any>> = {
    'cards': this.cardsFilter$,
    'attacks': this.attacksFilter$,
    'collection': this.collectionFilter$,
    'decks': this.decksFilter$
  }

  constructor() {}

  setFilter({key, value}: FilterStatePayload): void {
    this.mappedFilters[key].next(value);
  }

  getFilter(key: FilterKey): BehaviorSubject<FilterSearch | FilterAttackSearch> {
    return this.mappedFilters[key];
  }
}

export const FilterRxjs = new FilterState();