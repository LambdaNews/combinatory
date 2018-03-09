/**
 * @fileOverview Webpack configuration file for production.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const DIST_FOLDER = path.join(__dirname, 'dist/public');
const SRC_FOLDER = path.join(__dirname, 'client');

const config = require('./webpack.config.base');

config.mode = 'production';

config.entry = {
  app: path.join(SRC_FOLDER, 'index.js'),
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
  ],
};

config.output.path = DIST_FOLDER;

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new HtmlWebpackPlugin({ // also generate an index.html
    filename: 'index.html',
    template: 'client/page/index.ejs',
  }),
  new CopyWebpackPlugin([
    {
      context: path.resolve(SRC_FOLDER, 'page/assets'),
      from: '*',
      to: path.resolve(DIST_FOLDER),
    },
  ]),
  new webpack.HashedModuleIdsPlugin(),
];

module.exports = config;
