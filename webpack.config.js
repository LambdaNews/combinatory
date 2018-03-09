/**
 * @fileOverview Webpack configuration file for development.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_FOLDER = path.join(__dirname, 'public');
const SRC_FOLDER = path.join(__dirname, 'client');

const devServerPort = 1337;

const config = require('./webpack.config.base');

config.mode = 'development';

config.entry = [
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:1337',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  path.join(SRC_FOLDER, 'index.js'),
];

config.output.filename = 'dist/[name].[hash].js';
config.output.chunkFilename = 'dist/[name].[hash].js';

config.devServer = {
  proxy: {
    '/api': 'http://localhost:3000',
  },
  contentBase: DIST_FOLDER,
  compress: true,
  port: devServerPort,
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
};

config.plugins = [
  new webpack.DefinePlugin({
    // https://github.com/medeanfinance/webapp/wiki/Environment-Variables#front-end-environment-variables
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({ // also generate an index.html
    filename: 'index.html',
    template: 'client/page/index.ejs',
  }),
];

config.devtool = 'source-map';

module.exports = config;
