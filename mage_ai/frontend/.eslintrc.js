module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    'anchor-is-valid': 'off',
    'array-callback-return': 'off',
    'arrow-body-style': 'warn',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'max-len': [
      'warn',
      {
        'code': 120
      }
    ],
    'no-confusing-arrow': 'off',
    'no-else-return': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'operator-linebreak': 'off',
    'radix': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['warn', {
      callbacksLast: false,
      ignoreCase: false,
    }],
    'react/jsx-wrap-multilines': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'sort-keys': ['warn', 'asc', {'caseSensitive': true, 'natural': false, 'minKeys': 2}],
    'comma-dangle': ['warn', 'always-multiline']
  }
}
