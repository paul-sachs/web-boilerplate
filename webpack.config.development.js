const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

require('dotenv-extended').load({
	errorOnMissing: true
});

const localClient = process.env.UI_PROTOCOL + '://' + process.env.UI_HOST + ':' + process.env.UI_PORT;

module.exports = merge(config, {
  cache: true,
  devtool: 'inline-source-map',
  entry: {
    application: [
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new OpenBrowserPlugin({ url: localClient })
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
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]'
        }
      }, {
        test: /\.properties/,
        loader: 'locale-loader'
      }
    ]
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': 'window',
    'react/addons': true
  },
  devServer: {
    port: process.env.UI_PORT,
    hot: true,
    historyApiFallback: true
  }

});
