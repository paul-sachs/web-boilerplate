const path = require('path');
const webpack = require('webpack');

const vendorDeps = [
	'react'
];

module.exports = {
  // output as library
	output: {
		filename: '[name].js',
		library: '[name]_lib',
		path: path.join(__dirname, './build/vendor/')
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			react: path.resolve('./node_modules/react'),
			'react-dom': path.resolve('./node_modules/react-dom')
		}
	},

	entry: {
		vendorLib: vendorDeps
	},

	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, './build/vendor/[name]-manifest.json'),
			name: '[name]_lib'
		})
	]
};
