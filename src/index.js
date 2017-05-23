// Polyfills must be imported first!
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/example';

const render = Component => {
	ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);
if (module.hot) module.hot.accept('./app', () => render(require('./app').default));

