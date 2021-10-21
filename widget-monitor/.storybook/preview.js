import { setCompodocJson } from "@storybook/addon-docs/angular";
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import docJson from "../documentation.json";
setCompodocJson(docJson);

const customViewports = {
  raspberryPi: {
    name: 'RaspberryPi',
    styles: {
      width: '800px',
      height: '480px',
    },
  },
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    viewports: {
       ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
    defaultViewport: 'raspberryPi'
  },
}