import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TramComponent } from './widgets/tram/tram.component';
import { ClockComponent } from './widgets/clock/clock.component';
import { StockComponent } from './widgets/stock/stock.component';
import { WeatherComponent } from './widgets/weather/weather.component';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
