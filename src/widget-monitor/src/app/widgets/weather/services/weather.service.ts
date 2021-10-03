import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api = `https://api.darksky.net/forecast/${environment.darkSkyApiKey}`;

  constructor(
    private http: HttpClient
  ) { }

  getForecastWeather(latitude: number, longitude: number) {
    return this.http.get(
      `${this.api}/${latitude},${longitude}`,
      {
          params: {lang: 'de', units: 'si'}
      });
  }
}
