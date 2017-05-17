// Polyfills must be imported first!
// import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './app-container';

export default ({ store, history }) =>
	<Provider store={store}>
		<AppContainer history={history} />
	</Provider>;
