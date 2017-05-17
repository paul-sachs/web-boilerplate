import React from 'react';
import { withProps, compose, withHandlers, pure } from 'recompose';
import { connect } from 'react-redux';
import { userClickedButton } from 'store/actions';


// Unfortunately, compose is a difficult function to type and the typings for
// it are currently underway. We'll fake it for now, assuming <any> in the intermediate stages.
const enhance = compose(
	pure,
	connect(state => ({
		b: state.simple.count
	}), {
		click: userClickedButton
	}),
	withProps(props => ({
		count: props.b + 1
	})),
	withHandlers({
		handleClick: props => props.click
	})
);

const view = ({ count, handleClick }) =>
	<div>
		hey buddy {count}
		<button onClick={handleClick}>YO</button>
	</div>;

export default enhance(view);
