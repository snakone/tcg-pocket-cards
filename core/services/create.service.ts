import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { Subject } from "rxjs";

export default class CreateService {
  addNumber$ = new Subject<Card>();
  removeNumber$ = new Subject<Card>();
  currentDeck$ = new Subject<Card[]>();

  constructor() {}

  public onAddNumber(value: Card): void {
    this.addNumber$.next(value);
  }

  public onRemoveNumber(value: Card): void {
    this.removeNumber$.next(value);
  }

  public setCurrentDeck(value: Card[]): void {
    this.currentDeck$.next(value);
  }
}