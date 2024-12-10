import { BehaviorSubject } from "rxjs";

export default class ScrollService {
  isReLatedCardScrollAtBegin$ = new BehaviorSubject<boolean>(true);

  constructor() {}

  public onRelatedCardsScroll(value: boolean): void {
    this.isReLatedCardScrollAtBegin$.next(value);
  }
}