// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'build/client'),
		publicPath: '/'
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.jsx', '.json', '.scss', '.ts', '.tsx']
	},
	resolveLoader: {
		alias: {
			'locale-loader': path.join(
				__dirname,
				'./node_modules/@fss/react-components/webpack_loaders/locale-loader.js'
			)
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'template/index.html'),
			title: 'Web Boilerplate 2.0'
		}),
		new AddAssetHtmlPlugin({
			filepath: path.resolve(__dirname, 'build/vendor/vendorLib.js'),
			includeSourcemap: false
		}),
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: require('./build/vendor/vendorLib-manifest.json')
		}),
		new webpack.DefinePlugin(JSON.stringify(process.env))
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			},
			{
				test: /src\/lib\/.*\.js$/,
				loader: 'imports-loader?this=>window'
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
			},
			{
				test: /\.properties/,
				loader: 'locale-loader'
			}
		]
	}
};
