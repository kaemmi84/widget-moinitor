import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {StockService} from "./service/stock.service";
import {Observable, timer} from "rxjs";
import { StockAvService } from './service/stock.av.service';
import { SymbolData } from './interfaces/symbol';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit, OnChanges {

  /**
   * Array of symbol informations for chart.js
   */
  public symbolData: SymbolData[] = [];

  /**
   * Symbols for stock
   */
  @Input() symbols: string = 'NDAQ'
  /**
   * Interval for Stock 
   * Options: 1m 5m 15m 1d 1wk 1mo
   */
  @Input() interval: string = '1d'

  /**
   * Range of Stock
   * Options: 1d 5d 1mo 3mo 6mo 1y 5y max
   */
  @Input() range: string = '1mo'

  /**
   * Mock data for Stock
   * Only Symbols AAPL, MSFT available
   */
  @Input() mockData: boolean = false;

  /**
   * Mock data for Stock
   * Only Symbols AAPL, MSFT available
   */
   @Input() positiveColor: string = 'green';
   

  /**
   * Mock data for Stock
   * Only Symbols AAPL, MSFT available
   */
   @Input() negativeColor: string = 'red';

  /**
   * Array of different segments in chart
   */
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Curse', pointRadius: 0, borderWidth: 0, lineTension: 0 },
  ];

  /**
   * Labels shown on the x-axis 
   */
  lineChartLabels: Label[] = [];

  /**
   * Define chart options
   */
  lineChartOptions: ChartOptions = {
    responsive: true,
    defaultColor: 'white',
    scales: {
      xAxes: [{
        ticks:  {
          display: false
        },
        gridLines: {
          display:false
        }
      }],
      yAxes: [{
        ticks:  {
          display: false,
          fontColor: 'white'
        },
        gridLines: {
          display:false
        }
      }]
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top:40,
        left:10,
        right: 10,
      }
    }
  };

  /**
   * Define colors of chart segments
   */
  lineChartColors: Color[] = [
    {
      backgroundColor: '#2f2f2f',
      borderColor: 'white',
    }
  ];

  /**
   * Set true to show legends
   */
  lineChartLegend = false;

  /**
   * Define type of chart
   */
  lineChartType: ChartType = 'line';

  /**
   * Plugins for Chart.
   */
  lineChartPlugins = [];

  constructor(
    private stockService: StockService,
    private stockAvService: StockAvService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getStock();
  }

  ngOnInit(): void {
    timer(0,1800000).subscribe(() => this.getStock());
  }

  /**
   * Return Chartdata for Y axes
   * @param data Array of numbers
   * @returns Chartdata for chart.js
   */
  public getLineChartData(data: number[]) {
    const lineChartData = [
      { data: data, label: 'Curse', pointRadius: 0, borderWidth: 3, lineTension: 0 },
    ];
    return lineChartData;
  }

  /**
   * Calculate the differnce between beginn and end of the stockchart
   * @param prices Array of all prices
   * @returns Relative Difference
   */
  public getRelativeDifference(prices: number[]): number {
    if(!prices.length) {
      return -1000;
    }
    return Math.round((prices[prices.length - 1] / prices[0] - 1) * 100 * 100) / 100;
  }

  /**
   * Get Stock from Yahoo Api or Mockdata
   */
  private getStock() {
    this.getService()
       .subscribe((result: any) => {
      this.symbolData = [];
      this.symbols.split(',').forEach((symbol: string) => {
        this.symbolData.push(
          {
            name: symbol.slice(0,4),
            currentPrice: result[symbol].chartPreviousClose,
            relativeDifference: this.getRelativeDifference(result[symbol].close),
            prices: this.getLineChartData(result[symbol].close),
            times: (result[symbol].timestamp as number[]).map(time => time.toString()),
            lineChartColors: [
              {
                backgroundColor: '#2f2f2f',
                borderColor: this.getRelativeDifference(result[symbol].close) > 0 ? this.positiveColor : this.negativeColor,
              }
            ]
          });
      })

    })
  }

  /**
   * Helping service to choose Mock or Live Data
   * @returns 
   */
  private getService(): Observable<Object> {
    return this.mockData
      ? this.stockService.getSparkMock()
      : this.stockService.getSpark(this.symbols, this.interval, this.range)
  }
}
