// Polyfills must be imported first!
// import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { AppContainer } from './appContainer.js';
import { Provider } from 'react-redux';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <AppContainer store={this.props.store} history={this.props.history}/>
      </Provider>
    );
  }
}
