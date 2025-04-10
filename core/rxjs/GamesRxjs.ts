import { BehaviorSubject } from 'rxjs';

import { MemoryUserRanking } from '@/shared/definitions/interfaces/global.interfaces';

class GamesState {
  private ranking$ = new BehaviorSubject<MemoryUserRanking[]>([]);

  constructor() {}

  public getRanking(): BehaviorSubject<MemoryUserRanking[]> {
    return this.ranking$;
  }

  public setRanking(value: MemoryUserRanking[]): void {
    this.ranking$.next(value);
  }
}

export const GamesRxjs = new GamesState();