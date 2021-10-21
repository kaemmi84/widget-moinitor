import {Meta, Story} from '@storybook/angular/types-6-0';
import {ClockComponent} from "../app/widgets/clock/clock.component";

export default {
  title: 'WidgetMonitor/Clock',
  component: ClockComponent,
  timeIsRunning: false
} as Meta;

export const Morning = () => {
  return({
    props: {
      timeIsRunning: false,
      time: new Date(2021, 10, 9, 9, 9, 9, 9)
    },
    parameter: {
      time: new Date(2021, 10, 9, 9, 9, 9, 9)
    }
  })
}

export const Afternoon = () => {
  return({
    props: {
      timeIsRunning: false,
      time: new Date(2021, 10, 9, 15, 15, 15, 15)
    }
  })
}

const Template: Story<ClockComponent> = (args: ClockComponent) => ({
  props: args,
});

export const Running = Template.bind({});

Running.args = {
  timeIsRunning: true,
};
