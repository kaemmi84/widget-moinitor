import {Component, OnDestroy, OnInit} from '@angular/core';
import * as dvb from "dvbjs";
import {AppConfig} from "./app-config";
import {Stop} from "./widgets/tram/interfaces/dvb";
import {IMonitor} from "dvbjs";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  public stops: Stop[] = [];
  public timeOffset = 0;
  public numberOfOpportunities = 4;
  public latitude: number = 0;
  public longitude: number = 0;
  public symbol: string = 'NDAQ';
  public interval: string = '1d';
  public range: string = '1mo';

  public subscription: Subscription = new Subscription();

  ngOnInit(): void {
    timer(0,60000).subscribe(() => this.setTramSetup())

    //setup settings
    this.timeOffset = AppConfig.settings.tram.timeOffset;
    this.latitude = AppConfig.settings.weather.latitude;
    this.longitude = AppConfig.settings.weather.longitude;
    this.symbol = AppConfig.settings.stock.symbol;
    this.interval = AppConfig.settings.stock.interval;
    this.range = AppConfig.settings.stock.range;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setTramSetup() {
    const promises: any = []
    this.stops = [];
    AppConfig.settings.tram.stops.forEach(stop => {
      promises.push(dvb.monitor(stop.id, this.timeOffset, this.numberOfOpportunities));
    });
    Promise.all(promises).then(stops => {
      stops.forEach((monitor, index) => {
        this.ShortDestinationsContains(monitor, 'kaditz', 'Kaditz');
        this.ShortDestinations(monitor, 'bischofswerda bahnhof', 'Bischofswerda');

        this.stops.push({
          name: AppConfig.settings.tram.stops[index].name,
          monitor: monitor as IMonitor[]
        })
      })
    });
  }

  /**
   * workaround shorten of direction name
   * @param monitor
   * @param longName
   * @param shortName
   * @constructor
   * @private
   */
  private ShortDestinations(monitor: any, longName: string, shortName:string) {
    const destinations = (monitor as IMonitor[])
      .filter((m: IMonitor) => m.direction.toLocaleLowerCase().trim() === longName.toLowerCase().trim());
    destinations.forEach(destination => {
      destination.direction = shortName;
    });
  }
  

  /**
   * workaround shorten of direction name contains
   * @param monitor
   * @param longName
   * @param shortName
   * @constructor
   * @private
   */
   private ShortDestinationsContains(monitor: any, contains: string, shortName:string) {
    const destinations = (monitor as IMonitor[])
      .filter((m: IMonitor) => m.direction.toLocaleLowerCase().trim().includes(contains.toLowerCase().trim()));
    destinations.forEach(destination => {
      destination.direction = shortName;
    });
  }
}
