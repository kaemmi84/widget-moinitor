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

  public subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      timer(0,60000).subscribe(() => this.setTramSetup())
    )
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
        //workarout shorten of direction name
        let kaditz = (monitor as IMonitor[]).find((m: IMonitor) => m.direction === "Kaditz, Am Vorwerksfeld");
        if (kaditz) {
          kaditz.direction = "Kaditz";
        }
        let bischofswerda = (monitor as IMonitor[]).find((m: IMonitor) => m.direction === "Bischofswerda Bahnhof");
        if (bischofswerda) {
          bischofswerda.direction = "Bischofswerda";
        }

        this.stops.push({
          name: AppConfig.settings.tram.stops[index].name,
          monitor: monitor as IMonitor[]
        })
      })
    });
  }
}
