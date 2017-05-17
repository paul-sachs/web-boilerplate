const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config.base');

module.exports = merge(config, {
	devtool: 'cheap-module-source-map',
	entry: {
		application: './src/index.js'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true
			},
			output: {
				comments: false
			},
			sourceMap: true
		}),
		new ExtractTextPlugin({
			filename: 'css/app.css',
			allChunks: true
		})
	],
	module: {
		noParse: /\.min\.js$/,
		rules: [
      		// Sass
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, 'src')],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
            			{ loader: 'css-loader', options: { sourceMap: true } },
						'postcss-loader',
            			{ loader: 'sass-loader', options: { outputStyle: 'compressed' } }
					]
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader']
				})
			}
		]
	}
});
