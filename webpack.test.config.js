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

var testConfig = {
  // var testConfig = merge(config, {
  debug: true,
  cache: true,
  devtool: 'inline-source-map',
  entry: {},
  // *optional* isparta options: istanbul behind isparta will use it
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    // these babel options will be passed only to isparta and not to babel-loader
    babel: {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: ['transform-decorators-legacy']
    }
  },
  resolveLoader: {
    alias: {
      "locale-loader": path.join(__dirname, "./node_modules/@fss/react-components/webpack_loaders/locale-loader.js")
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    preLoaders: [
      // transpile all files except testing sources with babel as usual
      {
        test: /\.js$/,
        exclude: [
          path.resolve('src/'),
          path.resolve('node_modules/')
        ],
        loader: 'babel'
      },
      // transpile and instrument only testing sources with isparta
      {
        test: /\.js$/,
        include: path.resolve('src/'),
        loader: 'isparta'
      }
    ],
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
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]'
        }
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]'
        }
      }, {
        test: /\.properties/,
        loader: "locale-loader"
      }
    ]
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': 'window',
    'react/addons': true
  },

// });
};

module.exports = testConfig;
