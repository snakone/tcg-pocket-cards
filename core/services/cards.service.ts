import { LOCAL_HOST } from "@/shared/definitions/utils/contants";
import HttpService from "./http.service";
import { filter, map, Observable } from "rxjs";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CardsResponse } from "@/shared/definitions/interfaces/global.interfaces";

export default class CardsService extends HttpService {
  private readonly uri = LOCAL_HOST + '/';

  public getCards(): Observable<Card[]> {
    return this.get<CardsResponse>(this.uri + 'get-cards')
     .pipe(
      filter(res => Boolean(res.ok)),
      map(res => res.cards)
  )}
}