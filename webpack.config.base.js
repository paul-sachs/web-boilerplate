// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build/client'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  resolveLoader: {
    alias: {
      "locale-loader": path.join(__dirname, "./node_modules/@fss/react-components/webpack_loaders/locale-loader.js")
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/vendorLib-manifest.json')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        enforce: 'pre',
        loaders: ['eslint-loader']
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
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
  // postcss: function () {
  //   return [
  //     autoprefixer({
  //       browsers: ['last 2 versions']
  //     })
  //   ];
  // }
};
