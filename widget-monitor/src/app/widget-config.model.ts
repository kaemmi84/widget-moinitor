export interface WidgetConfig {
  tram: {
    stops: {
      id:string,
      name: string
    }[],
    timeOffset: number;
  }
  weather: {
    latitude: number
    longitude: number
  }
  stock: {
    symbol: string,
    interval: string,
    range: string
    mockData: boolean;
  }
}
