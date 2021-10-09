import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {Skycons} from 'skycons-ts';
import {timer} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  public currentTemperature? = 0;
  public dayHighTemperature? = 0;
  public dayLowTemperature? = 0;
  public weekForecast: {day: Date, temperature: number, icon: any}[] = []
  public skyCons = new Skycons({'color': '#2f2f2f'});

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    timer(0,120000).subscribe(() => this.getWeather());
  }

  private getWeather() {
    this.weatherService.getForecastWeather(this.latitude, this.longitude)
      .subscribe((weather: any) => {
          this.currentTemperature = Math.round(weather.currently.temperature);
          this.skyCons.add('iconCurrent', weather.currently.icon);
          this.weekForecast = [];
          weather.daily.data.forEach((dailyWeather: any, index: number) => {
            if (index == 0) {
              this.dayHighTemperature = Math.round(dailyWeather.temperatureHigh);
              this.dayLowTemperature = Math.round(dailyWeather.temperatureLow);
              return;
            }
            if (index > 4) {
              return;
            }

            const nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + index)
            this.weekForecast.push(
              {
                day: nextDate,
                temperature: Math.round(dailyWeather.temperatureHigh),
                icon: dailyWeather.icon
              });
          });
        }
      );

    setTimeout(() => {
      this.weekForecast.forEach((value, index) => {
        this.skyCons.add(`iconForecast${index + 1}`, value.icon);
      })
      this.skyCons.play();
    }, 1000);
  }
}
