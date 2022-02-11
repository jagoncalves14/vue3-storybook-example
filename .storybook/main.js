const path = require("path");

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx', 
    '../src/**/*.stories.@(js|ts|mdx)'
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          vue$: 'vue/dist/vue.esm-bundler.js',
        }
      }
    });

    return config;
  },
};
