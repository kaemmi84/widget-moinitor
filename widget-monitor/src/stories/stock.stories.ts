import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import { ChartsModule } from 'ng2-charts';
import { StockComponent } from 'src/app/widgets/stock/stock.component';

export default {
  title: 'WidgetMonitor/Stock',
  component: StockComponent,
  decorators: [
    moduleMetadata({
      declarations: [StockComponent],
      imports: [ 
        HttpClientModule,
        ChartsModule
       ]
    }),
  ],
  mockdata: true,
  symbols: 'AAPL,MSFT,AAPL',
  interval: '1d',
  range: '1mo',
  positiveColor: 'green',
  negativeColor: 'red',
  argTypes: {
    interval: {
      options: ['1m', '5m', '15m', '1d', '1wk', '1mo'],
      control: { type: 'radio' }
    },
    range: {
      options: ['1d', '5d', '1mo', '3mo', '6mo', '1y', '5y', 'max'],
      control: { type: 'radio' }
      
    },
    positiveColor: { control: 'color' },
    negativeColor: { control: 'color' },
  }
} as Meta;

const Template: Story<StockComponent> = (args: StockComponent) => ({
  props: args,
});

export const AppleAndMicrosoft = Template.bind({});
AppleAndMicrosoft.args = {
  mockData: true,
  symbols: 'AAPL,MSFT,AAPL'
};
