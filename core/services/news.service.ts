import { LOCAL_HOST, SERVER_URL } from "@/shared/definitions/utils/contants";
import HttpService from "./http.service";
import { filter, map, Observable } from "rxjs";
import { PocketNews, PocketNewsResponse } from "@/shared/definitions/interfaces/global.interfaces";

export default class PocketNewsService extends HttpService {
  private readonly uri = SERVER_URL + '/';

  public getPocketNews(): Observable<PocketNews[]> {
    return this.get<PocketNewsResponse>(this.uri + 'get-news')
     .pipe(
      filter(res => Boolean(res.ok)),
      map(res => res.news)
  )}
}