import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private api = `https://rest.yahoofinanceapi.com`;

  constructor(
    private http: HttpClient
  ) { }

  getSpark(symbols: string) {
    return this.http.get(
      `${this.api}/v8/finance/spark`,
      {
        headers: {
          'x-api-key': environment.yahooApiKey
        },
        params: {
          symbols: symbols
        }
      });
  }
}
