module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-prettier', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    "@typescript-eslint/naming-convention": ["error", { "selector": "enum", "format": ["UPPER_CASE"] }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-extra-semi': 'error',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'local' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'newline-per-chained-call': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', '1tbs'],
    'arrow-parens': ['error', 'always'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Package imports.
          ['^@?\\w'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};
