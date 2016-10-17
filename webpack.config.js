var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['bootstrap-loader', './app/app.jsx'],
  output: {path: path.resolve(__dirname, './dist/'), publicPath: "/dist/", filename: "[name].js"},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.(woff2?|svg)$/, loader: 'url?limit=10000'},
      {test: /\.(ttf|eot)$/, loader: 'file'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.png$/, loader: 'url-loader', query: {mimetype: 'image/png'}},
      {test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery'}
    ]
  }
};
