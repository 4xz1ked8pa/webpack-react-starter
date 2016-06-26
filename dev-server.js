var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(3000, 'localhost', function(err, result) {
  if(err) {
    return console.log(err);
  }
  console.log('Listening on port 3000');
});
