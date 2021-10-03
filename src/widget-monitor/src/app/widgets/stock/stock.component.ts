import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {StockService} from "./service/stock.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input() symbol: string = 'NDAQ'

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
      backgroundColor: 'white',
      borderColor: 'white',
    }
  ];

  // Set true to show legends
  lineChartLegend = false;

  // Define type of chart
  lineChartType: ChartType = 'line';

  lineChartPlugins = [];

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    timer(0,60000).subscribe(() => this.getStock())
  }

  private getStock() {
    this.stockService.getSpark(this.symbol).subscribe((result: any) => {
      result[this.symbol].timestamp.forEach((time: number) => {
        this.lineChartLabels.push(time.toString());
      })
      result[this.symbol].close.forEach((curse: number) => {
        this.lineChartData[0]?.data?.push(curse);
      })
    })
  }
}
