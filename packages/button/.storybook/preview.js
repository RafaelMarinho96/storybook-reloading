import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const desktopViewports = {
  smallDesktop: {
    name: 'Small Desktop',
    type: 'desktop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  notebook: {
    name: 'Notebook',
    type: 'notebook',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  largeDesktop: {
    name: 'Large Desktop',
    type: 'desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...desktopViewports,
    },
    defaultViewport: 'iphone6'
  }
});
addDecorator(story => <div className="platform">{story()}</div>);


const req = require.context('../', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
