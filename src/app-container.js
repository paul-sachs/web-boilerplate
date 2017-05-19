import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';

import Routes from './routes';

const view = ({ locale: { localeCode, messages }, history }) => {
	return (
		<IntlProvider locale={localeCode} messages={messages}>
			<div>
				<Router history={history}>
					{Routes}
				</Router>
				<div>HEY</div>
			</div>
		</IntlProvider>
	);
};

export default connect(state => ({
	locale: state.ui.locale
}))(view);
