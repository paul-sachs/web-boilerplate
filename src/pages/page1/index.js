import React from 'react';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import Example from 'components/example';
import { sortList } from 'store/selectors';

const enhance = compose(
	pure,
	connect(state => ({
		alert: state.ui.simple.alert,
		sortedList: sortList(state)
	}))
);


const view = ({ path, alert, sortedList }) =>
	<div>
		You are here: {path}
		<Example />
		<div>
			Alert: {alert}
		</div>
		{sortedList.map(item =>
			<div key={item}>Item: {item}</div>
		)}
	</div>;

export default enhance(view);
