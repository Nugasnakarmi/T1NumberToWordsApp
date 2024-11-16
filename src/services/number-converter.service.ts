import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberConverterService {
  apiUrl: string = `${environment.apiUrl}/app/`;
  httpClient = inject(HttpClient);

  public interpretNumberToWords$(
    number: number
  ): Observable<any | HttpErrorResponse> {
    return this.httpClient.get<any>(this.apiUrl + 'interpret', {
      params: { inputNumber: number },
    });
  }
}
