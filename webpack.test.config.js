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
  cache: true,
  devtool: 'inline-source-map',
  entry: function(){return {}},
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
    rules: [
      // transpile all files except testing sources with babel as usual
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: [
          // path.resolve('src/'),
          path.resolve('node_modules/')
        ],
        loader: 'babel-loader',
        query: {
          presets: [["es2015", { "modules": false }], "react", "stage-0"],
          plugins: ["transform-runtime", "transform-decorators-legacy", "react-hot-loader/babel"]
        }
      },
      // transpile and instrument only testing sources with isparta
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   include: path.resolve('src/'),
      //   loader: 'isparta-loader',
      //   query: {
      //     presets: [["es2015", { "modules": false }], "react", "stage-0"],
      //     plugins: ["transform-runtime", "transform-decorators-legacy", "react-hot-loader/babel"]
      //   }
      // },
      // TODO null-loader?
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
          { loader: 'sass-loader', query: { outputStyle: 'expanded' } },

        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]'
        }
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
