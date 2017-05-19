const webpack = require('webpack');
const config = require('./webpack.config.base');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

require('dotenv-extended').load({
	errorOnMissing: true
});

const localClient =
  process.env.UI_PROTOCOL +
  '://' +
  process.env.UI_HOST +
  ':' +
  process.env.UI_PORT;

config.cache(true);

config.devtool('inline-source-map');

config.entry('application')
	.add('react-hot-loader/patch');

config.plugin('HMR')
	.use(webpack.HotModuleReplacementPlugin);

config.plugin('NamedModules')
	.use(webpack.NamedModulesPlugin);

config.plugin('OpenBrowser')
	.use(OpenBrowserPlugin, [{ url: localClient }]);

config.externals({
	'react/lib/ReactContext': 'window',
	'react/lib/ExecutionEnvironment': 'window',
	'react/addons': true
});

config.devServer
	.port(process.env.UI_PORT)
	.hot(true)
	.historyApiFallback(true);

module.exports = config.toConfig();
