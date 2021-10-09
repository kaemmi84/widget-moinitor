import {Meta, Story} from '@storybook/angular/types-6-0';
import {ClockComponent} from "../app/widgets/clock/clock.component";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
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

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ClockComponent> = (args: ClockComponent) => ({
  props: args,
});

export const Running = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Morning.args = {
  timeIsRunning: true,
};
