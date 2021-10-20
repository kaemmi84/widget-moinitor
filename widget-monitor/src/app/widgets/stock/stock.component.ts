import {Component, Input, OnInit} from '@angular/core';
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
export class StockComponent implements OnInit {

  public symbolData: SymbolData[] = [];

  @Input() symbols: string = 'NDAQ'
  @Input() interval: string = '1d'
  @Input() range: string = '1mo'
  @Input() mockData: boolean = false;

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Curse', pointRadius: 0, borderWidth: 0, lineTension: 0 },
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [];
  // Define chart options
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

  // Define colors of chart segments
  lineChartColors: Color[] = [
    {
      backgroundColor: '#2f2f2f',
      borderColor: 'white',
    }
  ];

  // Set true to show legends
  lineChartLegend = false;

  // Define type of chart
  lineChartType: ChartType = 'line';

  lineChartPlugins = [];

  constructor(
    private stockService: StockService,
    private stockAvService: StockAvService
  ) { }

  ngOnInit(): void {
    timer(0,1800000).subscribe(() => this.getStock());
  }

  public getLineChartData(data: number[]) {
    const lineChartData = [
      { data: data, label: 'Curse', pointRadius: 0, borderWidth: 3, lineTension: 0 },
    ];
    console.log(lineChartData);
    return lineChartData;
  }

  public getRelativeDifferance(prices: number[]): number {
    if(!prices.length) {
      return -1000;
    }
    return Math.round((prices[prices.length - 1] / prices[0] - 1) * 100 * 100) / 100;
  }

  private getStock() {
    this.getService()
       .subscribe((result: any) => {
      this.symbolData = [];
      this.symbols.split(',').forEach((symbol: string) => {
        this.symbolData.push(
          {
            name: symbol.slice(0,4),
            currentPrice: result[symbol].chartPreviousClose,
            relativeDifference: this.getRelativeDifferance(result[symbol].close),
            prices: this.getLineChartData(result[symbol].close),
            times: (result[symbol].timestamp as number[]).map(time => time.toString()),
            lineChartColors: [
              {
                backgroundColor: '#2f2f2f',
                borderColor: this.getRelativeDifferance(result[symbol].close) > 0 ? 'green' : 'red',
              }
            ]
          });
      })

    })
  }

  private getService(): Observable<Object> {
    return this.mockData
      ? this.stockService.getSparkMock()
      : this.stockService.getSpark(this.symbols, this.interval, this.range)
  }
}
