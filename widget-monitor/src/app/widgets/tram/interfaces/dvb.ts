export interface Stop {
  name: string,
  monitor: IMonitor[]
}

export interface IMonitor {
  arrivalTime: Date;
  scheduledTime: Date;
  id: string;
  line: string;
  direction: string;
  platform?: IPlatform;
  arrivalTimeRelative: number;
  scheduledTimeRelative: number;
  delayTime: number;
  state: string;
  mode?: IMode;
  diva?: IDiva;
}

export interface IPlatform {
  name: string;
  type: string;
}

export interface IMode {
  title: string;
  name: string;
  iconUrl?: string;
}

export interface IDiva {
  number: number;
  network?: string;
}
