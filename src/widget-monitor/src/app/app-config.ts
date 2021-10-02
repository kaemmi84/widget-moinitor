import {WidgetConfig} from "./widget-config.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {
  static settings: WidgetConfig;
  constructor(private http: HttpClient) {}
  load() {
    const jsonFile = 'assets/widget-config.json';
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then(response => {
        AppConfig.settings = <WidgetConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
