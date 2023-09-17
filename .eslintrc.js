module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  extends: ['@react-native', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'prefer-destructuring': 1,
    'no-param-reassign': 0,
    'import/extensions': 0,
    'dot-notation': 1,
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
