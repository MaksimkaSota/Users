// const OFF = 0;
// const WARN = 1;
// const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    //   'no-param-reassign': [ERROR, { props: false }],
    //   'no-use-before-define': [ERROR, { functions: false, classes: false }],
    //   eqeqeq: [ERROR, 'allow-null'],
    //   'react/jsx-indent': [ERROR, 2],
    //   'react/jsx-indent-props': [ERROR, 2],
    //   'react/jsx-sort-props': [
    //     'error',
    //     {
    //       noSortAlphabetically: false,
    //       ignoreCase: true,
    //       callbacksLast: false,
    //       shorthandLast: false,
    //       reservedFirst: false,
    //     },
    //   ],
    //   /* max-len for links does not make any sense */
    //   'max-len': [
    //     1,
    //     140,
    //     4,
    //     {
    //       ignoreUrls: true,
    //       ignoreComments: false,
    //     },
    //   ],
    //   'lines-between-class-members': [ERROR, 'always', { exceptAfterSingleLine: true }],
    //   'object-curly-newline': ['error', { consistent: true }],
    //   'react/destructuring-assignment': [ERROR, 'always', { ignoreClassFields: true }],
    //   'react/sort-comp': [
    //     'error',
    //     {
    //       order: ['instance-variables', 'static-methods', 'lifecycle', 'everything-else', 'render'],
    //     },
    //   ],
    //
    //   'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
