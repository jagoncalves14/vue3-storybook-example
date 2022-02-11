module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:storybook/recommended',
    '@pixelmatters/eslint-config-pixelmatters',
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
  }
};
