import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private api = `https://yfapi.net`;

  constructor(
    private http: HttpClient
  ) { }

  getSpark(symbols: string, interval = '1d', range = '1mo') {
    return this.http.get(
      `${this.api}/v8/finance/spark`,
      {
        headers: {
          'x-api-key': environment.yahooApiKey
        },
        params: {
          symbols: symbols,
          interval: interval,
          range: range
        }
      });
  }

  getSparkMock() {
    return of({
      "MSFT": {
        "previousClose": null,
        "symbol": "MSFT",
        "chartPreviousClose": 252.46,
        "timestamp": [
          1620653400,
          1620739800,
          1620826200,
          1620912600,
          1620999000,
          1621258200,
          1621344600,
          1621431000,
          1621517400,
          1621603800,
          1621863000,
          1621949400,
          1622035800,
          1622122200,
          1622208600,
          1622554200,
          1622640600,
          1622727000,
          1622813400,
          1623072600,
          1623182402
        ],
        "close": [
          247.18,
          246.23,
          239,
          243.03,
          248.15,
          245.18,
          243.08,
          243.12,
          246.48,
          245.17,
          250.78,
          251.72,
          251.49,
          249.31,
          249.68,
          247.4,
          247.3,
          245.71,
          250.79,
          253.81,
          252.57
        ],
        "end": null,
        "start": null,
        "dataGranularity": 300
      },
      "AAPL": {
        "previousClose": null,
        "symbol": "AAPL",
        "chartPreviousClose": 130.21,
        "timestamp": [
          1620653400,
          1620739800,
          1620826200,
          1620912600,
          1620999000,
          1621258200,
          1621344600,
          1621431000,
          1621517400,
          1621603800,
          1621863000,
          1621949400,
          1622035800,
          1622122200,
          1622208600,
          1622554200,
          1622640600,
          1622727000,
          1622813400,
          1623072600,
          1623182403
        ],
        "close": [
          126.85,
          125.91,
          122.77,
          124.97,
          127.45,
          126.27,
          124.85,
          124.69,
          127.31,
          125.43,
          127.1,
          126.9,
          126.85,
          125.28,
          124.61,
          124.28,
          125.06,
          123.54,
          125.89,
          125.9,
          126.74
        ],
        "end": null,
        "start": null,
        "dataGranularity": 300
      }
    })
  }
}
