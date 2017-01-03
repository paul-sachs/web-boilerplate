// Polyfills must be imported first!
// import 'babel-polyfill';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './app.js';
import '../node_modules/varicent-common/dist/varicent-common.css';

const history = syncHistoryWithStore(browserHistory, store);

function run() {
	ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));
}

run();
