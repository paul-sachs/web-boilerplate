const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');


const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: true,
  __TEST__: true
};

var testConfig = merge(config, {
  debug: true,
  cache: true,
  devtool: 'inline-source-map',
  entry: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'isparta'
    }],
    loaders: [
      // TODO null-loader?
      // Sass
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: [
          'style',
          'css',
          'postcss',
          { loader: 'sass', query: { outputStyle: 'expanded' } },

        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': 'window',
    'react/addons': true
  },

});
//delete testConfig.plugins[0];
console.log(testConfig.plugins[0]);

module.exports = testConfig;
