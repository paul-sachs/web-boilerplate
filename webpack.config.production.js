const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config.base');

config.devtool('cheap-module-source-map');

config.plugin('NoEmitOnErrors')
	.use(webpack.NoEmitOnErrorsPlugin);

config.plugin('UglifyJs')
	.use(webpack.optimize.UglifyJsPlugin, [{
		compress: {
			warnings: false,
			screw_ie8: true
		},
		output: {
			comments: false
		},
		sourceMap: true
	}]);

config.plugin('ExtractCSS')
	.use(ExtractTextPlugin, [{
		filename: 'css/app.css',
		allChunks: true
	}]);

config.module.rule('SASS')
	.uses.clear().end()
	.merge({
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				{ loader: 'css-loader', options: { sourceMap: true } },
				'postcss-loader',
				{ loader: 'sass-loader', options: { outputStyle: 'compressed' } }
			]
		})
	});

config.module.rule('CSS')
	.uses.clear().end()
	.merge({
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader', 'postcss-loader']
		})
	});

module.exports = config.toConfig();
