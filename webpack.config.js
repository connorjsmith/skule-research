var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
     "bundle.min" :'./src/js/'
  },
  devtool: "source-map",
  output: { path: path.join(__dirname, "public", "javascripts"), filename: '[name].js' },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
};
