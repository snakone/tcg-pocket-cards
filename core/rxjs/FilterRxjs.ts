import { BehaviorSubject } from 'rxjs';

import { FilterKey } from '@/hooks/filter.reducer';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { FilterAttackSearch } from '@/shared/definitions/classes/filter_attack.class';
import { FilterStatePayload } from '@/shared/definitions/interfaces/layout.interfaces';

class FilterState {
  private cardsFilter$ = new BehaviorSubject<FilterSearch>(new FilterSearch());
  private attacksFilter$ = new BehaviorSubject<FilterAttackSearch>(new FilterAttackSearch());
  private decksFilter$ = new BehaviorSubject<FilterSearch>(new FilterSearch());
  private collectionFilter$ = new BehaviorSubject<FilterSearch>(new FilterSearch());

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

  getFilter<T>(key: FilterKey): BehaviorSubject<T> {
    return this.mappedFilters[key];
  }
}

export const FilterRxjs = new FilterState();