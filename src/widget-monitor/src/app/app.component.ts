import {Component, OnInit} from '@angular/core';
import * as dvb from "dvbjs";
import {AppConfig} from "./app-config";
import {Stop} from "./widgets/tram/interfaces/dvb";
import {IMonitor} from "dvbjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public stops: Stop[] = [];
  public timeOffset = 0;
  public numberOfOpportunities = 4;

  ngOnInit(): void {
    this.setTramSetup();
  }

  private setTramSetup() {
    const promises: any = []
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

        this.stops.push({
          name: AppConfig.settings.tram.stops[index].name,
          monitor: monitor as IMonitor[]
        })
      })
    });
  }
}
