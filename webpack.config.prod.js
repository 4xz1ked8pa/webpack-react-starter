var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var loaders = require('./webpack.loaders');

module.exports = {
  devtool: 'eval',
  entry: {
    app: './src/index',
    vendor: ['lodash']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true, // eslint-disable-line
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      inject: true,
      hash: true
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style', // The backup style loader
        `css?sourceMap!postcss-loader!sass?includePaths[]=${bourbon}`
      )
    }].concat(loaders)
  },
  postcss: [
    require('autoprefixer')({
      browsers: '> 1%'
    })
  ]
}
