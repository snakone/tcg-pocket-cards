import { BehaviorSubject, map, Observable } from 'rxjs';

import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { INITIAL_ATTACK_SORT_DATA, INITIAL_SORT_DATA } from '@/shared/definitions/utils/constants';
import { FilterKey } from '@/shared/definitions/types/global.types';

export interface SortStatePayload {
  key: FilterKey;
  value: SortItem[];
}

class SortState {
  private cardsSort$ = new BehaviorSubject<SortItem[]>(INITIAL_SORT_DATA);
  private attacksSort$ = new BehaviorSubject<SortItem[]>(INITIAL_ATTACK_SORT_DATA);
  private decksSort$ = new BehaviorSubject<SortItem[]>(INITIAL_SORT_DATA);
  private collectionSort$ = new BehaviorSubject<SortItem[]>(INITIAL_SORT_DATA);

  private mappedSorts: Record<FilterKey, BehaviorSubject<SortItem[]>> = {
    'cards': this.cardsSort$,
    'attacks': this.attacksSort$,
    'collection': this.decksSort$,
    'decks': this.collectionSort$
  }

  constructor() {}

  public setSort({key, value}: SortStatePayload): void {
    this.mappedSorts[key].next(value);
  }

  public getSort(key: FilterKey): BehaviorSubject<SortItem[]> {
    return this.mappedSorts[key];
  }

  public getSortSync(key: FilterKey): SortItem[] {
    return this.mappedSorts[key].getValue();
  }

  public getSortActive(key: FilterKey): Observable<SortItem | undefined> {
    return this.mappedSorts[key].pipe(map(res => res.find(sort => sort.active)));
  }
}

export const SortRxjs = new SortState();