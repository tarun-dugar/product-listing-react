const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  'entry': [
    './src/index.js'
  ],
  'module': {
    'loaders': [{
      'test': /\.js$/,
      'exclude': /node_modules|firebase-messaging-sw.js/,
      'loader': 'react-hot-loader/webpack'
    }, {
      'test': /\.js$/,
      'exclude': /node_modules|firebase-messaging-sw.js/,
      'loader': 'babel-loader'
    }, {
      'test': /\.scss$/,
      'loader': ExtractTextPlugin.extract('css-loader!sass-loader')
    }, {
      'test': /\.(jpe?g|png|gif|svg)$/i,
      'loaders': [
        'file-loader?name=images/[name].[ext]',
        {
          'loader': 'image-webpack-loader',
          'query': {
            'gifiscle': {
              'interlaced': false
            },
            'optipng': {
              'optimizationLevel': 7
            },
            'bypassOnDebug': true
          }
        }
      ]
    }]
  },
  'resolve': {
    'extensions': ['.js']
  },
  'output': {
    'path': path.resolve(__dirname, './dist'),
    'publicPath': '/',
    'filename': 'scripts/bundle.js'
  },
  'plugins': [
    new ExtractTextPlugin('./style.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      'template': './src/base-template.html'
    })
  ]
};
