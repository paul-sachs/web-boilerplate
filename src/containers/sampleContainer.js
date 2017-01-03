import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(state => ({
	sample: state.sample
}))
export class SampleContainer extends React.Component {
	static propTypes = {
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,

    // redux state
		sample: PropTypes.object
	};

	render() {
		return (
			<div>Sample</div>
		);
	}
}
