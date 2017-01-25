var webpackConfig = require('./webpack.test.config.js');

var reporters = [
	{type: 'text-summary'}
];
var browsers = ['Chrome'];
var customLaunchers = {};

if (process.env.CHROMIUM) {
	browsers = ['Chromium'];
}

if (process.env.TRAVIS) {
	browsers = ['Chrome_travis_ci'];
	customLaunchers = {
		Chrome_travis_ci: {
			base: 'Chrome',
			flags: ['--no-sandbox']
		}
	};
} else {
	reporters.push({type: 'html', subdir: '.'});
}

const testFiles = 'tests/test-index.js';

// TODO: once all the components will have tests, add section below into check
/* each: {
	statements: 80,
	branches: 80,
	functions: 80,
	lines: 50
}*/

module.exports = function(config) {
	config.set({
		frameworks: [
			'jasmine',
			'sinon'
		],
		files: [
			'./node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern : './dist/vendorLib.js',
        watched : false,
        served  : true
      },
			testFiles
		],
		plugins: [
			'karma-jasmine',
			'karma-sinon',
			'karma-webpack',
			'karma-coverage',
			'karma-spec-reporter',
			'karma-chrome-launcher',
			'karma-sourcemap-loader'
		],
		browsers: browsers,
		customLaunchers: customLaunchers,
		preprocessors: {
			[testFiles]: ['webpack', 'sourcemap']
		},
		colors: true,
		reportSlowerThan: 100,
		reporters: ['spec', 'coverage'],
		coverageReporter: {
			dir: 'tests-code-coverage',
			includeAllSources: true,
			reporters: reporters,
			check: {
				global: {
					statements: 70,
					branches: 70,
					functions: 70,
					lines: 45
				}
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true,
			quiet: false
		},
		webpackMiddleware: {
			stats: {
				colors: true,
				errorDetails: true,
				chunks: false
			}
		}
	});
};
