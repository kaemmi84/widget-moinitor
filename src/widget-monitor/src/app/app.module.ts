import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TramComponent } from './widgets/tram/tram.component';
import { ClockComponent } from './widgets/clock/clock.component';
import { StockComponent } from './widgets/stock/stock.component';
import { WeatherComponent } from './widgets/weather/weather.component';
import {AppConfig} from "./app-config";
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}
@NgModule({
  declarations: [
    AppComponent,
    TramComponent,
    ClockComponent,
    StockComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
