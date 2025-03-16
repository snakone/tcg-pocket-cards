import { CardLanguageENUM } from "../enums/card.enums";
import { UserCollection } from "../interfaces/global.interfaces";

export class CollectionUser implements UserCollection {
  id: number;
  amount: Record<CardLanguageENUM, number>;

  constructor(id: number, lang: CardLanguageENUM) {
    this.id = id;
    this.amount = Object.values(CardLanguageENUM)
      .filter(value => typeof value === "number")
      .reduce((acc, key) => {
        acc[key as CardLanguageENUM] = 0;
        return acc;
      }, {} as Record<CardLanguageENUM, number>);
    
    this.amount[lang] = 1;
  }
}