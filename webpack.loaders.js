const path = require('path');

module.exports = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['babel'],
  include: path.join(__dirname, 'src')
}, {
  test: /\.css$/,
  exclude: /node_modules/,
  loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
}, {
  test: /\.woff(\?.*)?$/,
  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
}, {
  test: /\.woff2(\?.*)?$/,
  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
}, {
  test: /\.otf(\?.*)?$/,
  loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
}, {
  test: /\.ttf(\?.*)?$/,
  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
}, {
  test: /\.eot(\?.*)?$/,
  loader: 'file?prefix=fonts/&name=[path][name].[ext]'
}, {
  test: /\.svg(\?.*)?$/,
  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
}, {
  test: /\.gif/,
  loader: "url-loader?limit=10000&mimetype=image/gif"
}, {
  test: /\.jpg/,
  loader: "url-loader?limit=10000&mimetype=image/jpg"
}, {
  test: /\.png/,
  loader: "url-loader?limit=10000&mimetype=image/png"
}];
