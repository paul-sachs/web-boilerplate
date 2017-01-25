const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');


const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: true
};

module.exports = merge(config, {
  cache: true,
  devtool: 'inline-source-map',
  entry: {
    application: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    rules: [
      // Sass
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          { loader: 'sass-loader', query: { outputStyle: 'expanded' } }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': 'window',
    'react/addons': true
  },

});
