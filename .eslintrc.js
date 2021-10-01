const devWarnProdError = process.env.NODE_ENV === 'production' ? 'error' : 'warn';
const devOffProdError = process.env.NODE_ENV === 'production' ? 'error' : 'off';

module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'src/types/types.ts', 'src/shims-tsx.d.ts'],
  env: {
    browser: false,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jest', 'simple-import-sort', 'jsdoc', 'prettier'],
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': [devWarnProdError],
    'comma-dangle': devWarnProdError,
    'comma-spacing': [devWarnProdError, { before: false, after: true }],
    'jest/expect-expect': 'error',
    'jest/no-commented-out-tests': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-truthy-falsy': 'warn',
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'warn',
    'jest/prefer-to-be-undefined': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-console': devOffProdError,
    'no-debugger': devWarnProdError,
    'no-extra-semi': devWarnProdError,
    'no-multiple-empty-lines': devWarnProdError,
    'no-unused-vars': 'off', // using @typescript-eslint/no-unused-vars
    'object-curly-spacing': [devWarnProdError, 'always'],
    quotes: [devWarnProdError, 'single'],
    semi: [devWarnProdError, 'always'],
    'simple-import-sort/imports': [devWarnProdError, { groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']] }],
    'sort-imports': 'off',
    'space-before-function-paren': [devWarnProdError, { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': devWarnProdError,
    'prettier/prettier': [
      'error',
      { trailingComma: 'none' },
      {
        usePrettierrc: true
      }
    ]
  }
};
