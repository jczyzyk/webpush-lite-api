module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    "self": true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "arrow-body-style": "off",
    "no-use-before-define": "off",
    "no-return-await": "off",
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "no-restricted-globals": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "no-trailing-spaces": "off",
    "linebreak-style": "off",
  },
};