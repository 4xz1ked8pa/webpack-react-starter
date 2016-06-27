const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
var loaders = require('./webpack.loaders');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index'
    ],
    vendor: ['lodash']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      inject: true
    })
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style', 'css', 'postcss', `sass?includePaths[]=${bourbon}`]
    }].concat(loaders)
  },
  postcss: [
    require('autoprefixer')({
      browsers: '> 1%'
    })
  ]
}
