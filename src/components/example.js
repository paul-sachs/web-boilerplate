import React from 'react';
import { withProps, compose, withHandlers, pure } from 'recompose';
import { connect } from 'react-redux';
import { userClickedButton, userClickedFetch } from 'store/actions';
import { Button } from '@fss/react-components';

// Unfortunately, compose is a difficult function to type and the typings for
// it are currently underway. We'll fake it for now, assuming <any> in the intermediate stages.
const enhance = compose(
	pure,
	connect(state => ({
		b: state.ui.simple.count
	}), {
		click: userClickedButton,
		fetch: userClickedFetch
	}),
	withProps(props => ({
		count: props.b + 1
	})),
	withHandlers({
		handleClick: props => props.click,
		handleClickFetch: props => props.fetch
	})
);

const view = ({ count, handleClick, handleClickFetch }) =>
	<div>
		hey buddy {count}
		<Button onClick={handleClick}>YO</Button>
		<Button onClick={handleClickFetch}>Fetch</Button>
	</div>;

export default enhance(view);
