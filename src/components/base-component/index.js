import React from 'react';
import {intlShape} from 'react-intl';

class BaseComponent extends React.Component {
	static contextTypes = {
		intl: intlShape
	};

	formatMessage(id) {
		return this.context.intl.formatMessage({ id });
	}

	render() {
		return (
			<div />
		);
	}
}

export default BaseComponent;
