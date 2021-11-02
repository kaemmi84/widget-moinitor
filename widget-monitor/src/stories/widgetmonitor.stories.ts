import { HttpClientModule } from '@angular/common/http';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import { ChartsModule } from 'ng2-charts';
import {ClockComponent} from "../app/widgets/clock/clock.component";
import {AppComponent} from "../app/app.component";
import {StockComponent} from "../app/widgets/stock/stock.component";
import {WeatherComponent} from "../app/widgets/weather/weather.component";
import {TramComponent} from "../app/widgets/tram/tram.component";

export default {
  title: 'WidgetMonitor/Dashboard',
  component: AppComponent,
  stopDescriptions: [
            {
                id: "33000044",
                name: "Gabelsbergerstr."
            },
            {
                id: "33000062",
                name: "Fetscherplatz"
            }
        ],
  timeOffset: 0,
  latitude: 51.0504088,
  longitude: 13.7372621,
  symbol: "AAPL,MSFT,AAPL",
  interval: "1d",
  range: "1mo",
  mockData: true,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({
      declarations: [AppComponent, StockComponent, WeatherComponent, TramComponent, ClockComponent],
      imports: [
        HttpClientModule,
        ChartsModule
       ]
    }),
    componentWrapperDecorator(story => `${story}`)
  ]
} as Meta;

const Template: Story<ClockComponent> = (args: ClockComponent) => ({
  props: {
    ...args,
    stopDescriptions: [
      {
          id: "33000044",
          name: "Gabelsbergerstr."
      },
      {
          id: "33000062",
          name: "Fetscherplatz"
      }
    ],
    timeOffset: 0,
    latitude: 51.0504088,
    longitude: 13.7372621,
    symbol: "AAPL,MSFT,AAPL",
    interval: "1d",
    range: "1mo",
    mockData: true,
  }
});

export const dashboard = Template.bind({});
