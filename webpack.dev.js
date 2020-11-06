const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const { join } = require('path');
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 9001,
    hot: true,
    open: true,
    publicPath: '/',
    contentBase: join(__dirname, 'dist')
  }
});