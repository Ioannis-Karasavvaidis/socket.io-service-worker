const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const mkdirp = require('mkdirp');

mkdirp('dst/');

module.exports = {
  target: 'node',
  entry: './src/index',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dst'),
    filename: 'index.js',
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new WorkerPlugin(),
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
        compress: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
