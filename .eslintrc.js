module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {}
    }
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error'],
    'import/first': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],
    'import/no-duplicates': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    'generator-star-spacing': 'off',
    camelcase: 'off'
  }
}
