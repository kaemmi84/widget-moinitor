import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {WeatherComponent} from "../app/widgets/weather/weather.component";

export default {
  title: 'WidgetMonitor/Weather',
  component: WeatherComponent,
  animateGraphics: false,
  decorators: [
    moduleMetadata({
      declarations: [WeatherComponent],
      imports: [
        HttpClientModule,
       ]
    }),
  ],
} as Meta;

const Template: Story<WeatherComponent> = (args: WeatherComponent) => ({
  props: args,
});

export const Stay = Template.bind({});

Stay.args = {
  animateGraphics: false,
};

export const Animated = Template.bind({});

Animated.args = {
  animateGraphics: true,
};
