// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const Config = require('webpack-chain');

const config = new Config();

config
	.entry('application')
		.add('./src/index.js');

config.output
		.filename('js/[name].js')
		.path(path.resolve(__dirname, 'build/client'))
		.publicPath('/');

config.resolve.modules
	.add(path.join(__dirname, 'src'))
	.add('node_modules');

config.resolve.extensions
	.add('.js')
	.add('.jsx');

config.resolveLoader.modules
	.add('node_modules')
	.add(path.join(
		__dirname,
		'./node_modules/@fss/react-components/webpack_loaders/'
	));

// Plugins
config.plugin('Html')
	.use(HtmlWebpackPlugin, [{
		template: path.resolve(__dirname, 'template/index.html'),
		title: 'Web Boilerplate 2.0'
	}]);

config.plugin('Define')
	.use(webpack.DefinePlugin, [
		JSON.stringify(process.env)
	]);

config.module.noParse.add(/\.min\.js$/);

config.module
	.rule('SASS')
		.test(/\.scss$/)
		.include
			.add(path.resolve(__dirname, 'src'))
			.end()
		.use('style').loader('style-loader').end()
		.use('css').loader('css-loader').end()
		.use('postcss').loader('postcss-loader').end()
		.use('sass').loader('sass-loader')
			.options({
				outputStyle: 'expanded'
			});

config.module
	.rule('CSS')
		.test(/\.css$/)
		.use('style').loader('style-loader').end()
		.use('css').loader('css-loader').end()
		.use('postcss').loader('postcss-loader').end();

config.module
	.rule('Javascript')
		.test(/\.jsx?$/)
		.enforce('pre')
		.include
			.add(path.resolve(__dirname, 'src'))
			.end()
		.use('babel')
			.loader('babel-loader');

config.module
	.rule('Images')
		.test(/\.(png|jpg|jpeg|gif|svg)$/)
		.use('url')
			.loader('url-loader')
			.options({
				limit: 8192,
				name: 'images/[name].[ext]?[hash]'
			});

config.module
	.rule('Fonts')
		.test(/\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/)
		.use('url')
			.loader('url-loader')
			.options({
				limit: 8192,
				name: 'images/[name].[ext]?[hash]'
			});

config.module
	.rule('Locales')
		.test(/\.properties/)
		.use('locale')
			.loader('locale-loader');

module.exports = config;

