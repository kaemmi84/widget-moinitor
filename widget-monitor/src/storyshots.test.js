
import initStoryshots from '@storybook/addon-storyshots';

// The required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

// Function to customize the snapshot location
const getMatchOptions = ({ context: { fileName } }) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(path.dirname(fileName), 'snapshot-images');
  return { customSnapshotsDir: snapshotPath };
};

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions,
  }),
});
