import { LOCAL_HOST, SERVER_URL } from "@/shared/definitions/utils/constants";
import HttpService from "./http.service";
import { filter, map, Observable } from "rxjs";
import { GamesType } from "@/shared/definitions/types/global.types";

export default class GamesService extends HttpService {
  private readonly uri = SERVER_URL + '/';

  public getRanking(type: GamesType): Observable<any[]> {
    return this.get<any>(this.uri + 'get-ranking')
     .pipe(
      filter((res) => Boolean(res.ok)),
      map(res => res.ranking)
  )}

  public registerRanking(type: GamesType, body: any): Observable<any[]> {
    return this.post<any>(this.uri + 'post-ranking', body)
     .pipe(
      filter((res) => Boolean(res.ok))
  )}
}