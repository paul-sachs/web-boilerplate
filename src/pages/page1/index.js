import React from 'react';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import Example from 'components/example';

const enhance = compose(
	pure,
	connect(state => ({
		alert: state.simple.alert
	}))
);


const view = ({ path, alert }) =>
	<div>
		You are here: {path}
		<Example />
		<div>
			Alert: {alert}
		</div>
	</div>;

export default enhance(view);
