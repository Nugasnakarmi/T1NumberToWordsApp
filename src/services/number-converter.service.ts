import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberConverterService {
  url: string = '';
  constructor() {
    this.url = environment.apiUrl;
  }
  httpClient = inject(HttpClient);

  interpretNumberToWords$(number: number): Observable<string> {
    return this.httpClient.get<string>(this.url + number).pipe(
      map((response: any) => response),
      catchError((error: any) => EMPTY)
    );
  }
}
