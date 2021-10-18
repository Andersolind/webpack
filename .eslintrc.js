module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: 'eslint-config-indigo',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
};
