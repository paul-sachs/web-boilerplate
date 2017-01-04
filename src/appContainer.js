import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Routes from './routes';
import { Router } from 'react-router';

@connect(state => ({
  locale: state.locale
}))
export class AppContainer extends Component {
  static propTypes = {
    // redux state
    locale: PropTypes.object,
    // attributes
    store: PropTypes.object,
    history: PropTypes.object
  };

  // TODO get browser's set langauge, maybe from the api too...

  render() {
    const {history, locale: {localeCode, messages}} = this.props;
    return (
      <IntlProvider locale={localeCode} messages={messages}>
        <Router history={history}>
          {Routes}
        </Router>
      </IntlProvider>
    );
  }
}
