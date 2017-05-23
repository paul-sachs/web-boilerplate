const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
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

config.plugin('ExtractSVG')
	.use(SpriteLoaderPlugin);

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

config.module.rule('SVG')
	.use('svg-sprite')
		.options({
			extract: true
		});

module.exports = config.toConfig();
