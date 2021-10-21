import {Meta, Story} from '@storybook/angular/types-6-0';
import { TramComponent } from 'src/app/widgets/tram/tram.component';

const stops = [
  {
      "name": "Gabelsbergerstr.",
      "monitor": [
          {
              "arrivalTime": "2021-10-21T19:01:00.000Z",
              "scheduledTime": "2021-10-21T19:01:00.000Z",
              "id": "voe:21064: :R:j21",
              "line": "64",
              "direction": "Reick",
              "platform": {
                  "name": "1",
                  "type": "Platform"
              },
              "arrivalTimeRelative": -1,
              "scheduledTimeRelative": -1,
              "delayTime": 0,
              "state": "InTime",
              "mode": {
                  "title": "Bus",
                  "name": "CityBus",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-bus.svg"
              },
              "diva": {
                  "number": 21064,
                  "network": "voe"
              }
          },
          {
              "arrivalTime": "2021-10-21T19:05:00.000Z",
              "scheduledTime": "2021-10-21T19:05:00.000Z",
              "id": "voe:11012: :H:j21",
              "line": "12",
              "direction": "Leutewitz",
              "platform": {
                  "name": "1",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 3,
              "scheduledTimeRelative": 3,
              "delayTime": 0,
              "state": "Cancelled",
              "mode": {
                  "title": "Straßenbahn",
                  "name": "Tram",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-tram.svg"
              },
              "diva": {
                  "number": 11012,
                  "network": "voe"
              }
          },
          {
              "arrivalTime": "2021-10-21T19:15:00.000Z",
              "scheduledTime": "2021-10-21T19:15:00.000Z",
              "id": "voe:11012: :R:j21",
              "line": "12",
              "direction": "Reick",
              "platform": {
                  "name": "2",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 13,
              "scheduledTimeRelative": 13,
              "delayTime": 0,
              "state": "Cancelled",
              "mode": {
                  "title": "Straßenbahn",
                  "name": "Tram",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-tram.svg"
              },
              "diva": {
                  "number": 11012,
                  "network": "voe"
              }
          },
          {
              "arrivalTime": "2021-10-21T19:16:00.000Z",
              "scheduledTime": "2021-10-21T19:16:00.000Z",
              "id": "voe:21064: :R:j21",
              "line": "64",
              "direction": "Striesen",
              "platform": {
                  "name": "1",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 14,
              "scheduledTimeRelative": 14,
              "delayTime": 0,
              "state": "InTime",
              "mode": {
                  "title": "Bus",
                  "name": "CityBus",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-bus.svg"
              },
              "diva": {
                  "number": 21064,
                  "network": "voe"
              }
          }
      ]
  },
  {
      "name": "Fetscherplatz",
      "monitor": [
          {
              "arrivalTime": "2021-10-21T19:03:00.000Z",
              "scheduledTime": "2021-10-21T19:03:00.000Z",
              "id": "voe:21064: :R:j21",
              "line": "64",
              "direction": "Reick",
              "platform": {
                  "name": "7",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 1,
              "scheduledTimeRelative": 1,
              "delayTime": 0,
              "state": "InTime",
              "mode": {
                  "title": "Bus",
                  "name": "CityBus",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-bus.svg"
              },
              "diva": {
                  "number": 21064,
                  "network": "voe"
              }
          },
          {
              "arrivalTime": "2021-10-21T19:07:00.000Z",
              "scheduledTime": "2021-10-21T19:07:00.000Z",
              "id": "voe:11012: :H:j21",
              "line": "12",
              "direction": "Leutewitz",
              "platform": {
                  "name": "1",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 5,
              "scheduledTimeRelative": 5,
              "delayTime": 0,
              "state": "Cancelled",
              "mode": {
                  "title": "Straßenbahn",
                  "name": "Tram",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-tram.svg"
              },
              "diva": {
                  "number": 11012,
                  "network": "voe"
              }
          },
          {
              "arrivalTime": "2021-10-21T19:07:00.000Z",
              "scheduledTime": "2021-10-21T19:07:00.000Z",
              "id": "voe:11010: :H:j21",
              "line": "10",
              "direction": "Messe",
              "platform": {
                  "name": "1",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 5,
              "scheduledTimeRelative": 5,
              "delayTime": 0,
              "state": "Cancelled",
              "mode": {
                  "title": "Straßenbahn",
                  "name": "Tram",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-tram.svg"
              },
              "diva": {
                  "number": 11010,
                  "network": "voe"
              }
          },
          {
              "arrivalTime": "2021-10-21T19:07:00.000Z",
              "scheduledTime": "2021-10-21T19:07:00.000Z",
              "id": "voe:11004: :R:j21",
              "line": "4",
              "direction": "Laubegast",
              "platform": {
                  "name": "2",
                  "type": "Platform"
              },
              "arrivalTimeRelative": 5,
              "scheduledTimeRelative": 5,
              "delayTime": 0,
              "state": "Cancelled",
              "mode": {
                  "title": "Straßenbahn",
                  "name": "Tram",
                  "iconUrl": "https://www.dvb.de/assets/img/trans-icon/transport-tram.svg"
              },
              "diva": {
                  "number": 11004,
                  "network": "voe"
              }
          }
      ]
  }
];

export default {
  title: 'WidgetMonitor/Tram',
  component: TramComponent,
  stops: stops
} as Meta;

const Template: Story<TramComponent> = (args: TramComponent) => ({
  props: {
    ...args,
    stops: stops
  },
});

export const Tram = Template.bind({});