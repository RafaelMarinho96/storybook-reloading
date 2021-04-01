const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
  ],

  webpackFinal: async config => {
    config.resolve.alias = {
      '@mybuttonlib': path.resolve(__dirname, '../../../packages/button/src'),
      //'@myinputlib': path.resolve(__dirname, '../../../packages/input/src'),
    };

    return config;
  },
};
