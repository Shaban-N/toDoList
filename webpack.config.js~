var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/script/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src/script')
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },

        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader'
        }
    ]
  },
 plugins: [
     new ExtractTextPlugin({filename :'style.css',  allChunks: true})
  ]
}


