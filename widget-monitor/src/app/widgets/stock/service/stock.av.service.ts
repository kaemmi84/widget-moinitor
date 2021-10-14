import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StockAvService {

  private api = `https://www.alphavantage.co`;

  constructor(
    private http: HttpClient
  ) { }

  getIntraday(symbol: string) {
    return this.http.get(
      `${this.api}/query`,
      {params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: '5min',
        apikey: environment.alphavantageKey
      }});
  }
}
