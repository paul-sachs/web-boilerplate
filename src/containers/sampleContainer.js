import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button } from 'varicent-common';

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
		  <div>
			  <div className="b-sample-text">Hey this is a sample page, this text is styled with scss!</div>
        <Button>Open a Wizard</Button>
      </div>
		);
	}
}
