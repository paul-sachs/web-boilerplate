// Creates a hot reloading development environment

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');
const WebpackDevServer = require('webpack-dev-server');

const app = express();
const compiler = webpack(config);

const host = process.env.UI_HOST || 'localhost';
const port = process.env.UI_PORT || 4001;

new WebpackDevServer(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	stats: { colors: true }
}).listen(process.env.UI_PORT, process.env.UI_HOST, function(err) {
	if (err) console.log(err);
	console.log('Listening at ' + process.env.UI_HOST + ':' + process.env.UI_PORT);
});