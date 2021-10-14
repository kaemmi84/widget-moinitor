import { ChartDataSets } from "chart.js";
import { Color } from "ng2-charts";

export interface SymbolData {
    name: string,
    currentPrice: number,
    relativeDifference: number,
    prices: ChartDataSets[],
    times: string[],
    lineChartColors: Color[]
}