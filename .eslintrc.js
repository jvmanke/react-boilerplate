module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    semi: ['error', 'never'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-filename-extension': 'off',
  },
  env: {
    browser: true,
  },
}
