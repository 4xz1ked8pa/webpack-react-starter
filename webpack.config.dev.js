var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// entry: [
//   'webpack-dev-server/client?http://localhost:3000',
//   'webpack/hot/only-dev-server',
//   'react-hot-loader/patch',
//   './src/index'
// ],

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
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
}
