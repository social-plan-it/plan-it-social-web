// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./.prettierrc.cjs');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier', '@remix-run/eslint-config', '@remix-run/eslint-config/node', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint', 'html', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    'prettier/prettier': ['error', config],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
  },
};
