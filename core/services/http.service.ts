import { from, Observable, of, throwError} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export default class HttpService {
  private readonly auth = 'tcg-token';
  private readonly content = 'Content-type';
  private readonly accept = 'Accept';
  private readonly type = 'application/json';
  private readonly default = 'application/json';

  public get<T>(url: string, headers?: Headers): Observable<T> {
    return from(fetch(url, { method: 'GET', headers }))
      .pipe(
        switchMap((response: Response) => response.json() as Promise<T>),
        catchError((err: Error) => {
          console.error(err);
          return throwError(() => err);
        })
      );
  }

}