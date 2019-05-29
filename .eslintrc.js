const path = require('path');
module.exports = {
  "env": {
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "extends": ['prettier'],
  plugins: ['prettier', 'chai-friendly', 'json'],
  globals: {
    log: false,
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  }
}
