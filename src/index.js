// Polyfills must be imported first!
// import 'babel-polyfill';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './app';
import store from './store';
import '../node_modules/@fss/react-components/dist/react-components.css';

const history = syncHistoryWithStore(browserHistory, store);

const render = Component => {
	ReactDOM.render(<Component store={store} history={history} />, document.getElementById('root'));
};

render(App);
if (module.hot) module.hot.accept('./app', () => render(require('./app').default));

