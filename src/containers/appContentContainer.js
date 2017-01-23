import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../utils/navHelper.js';
import { NAVIGATION } from '../constants/navigation.js';
import './appContentContainer.scss';
import {HeaderBar} from '@fss/react-components';

const headerElems = [
	{
		label: 'Sample',
		onClick: (e) => navigate(e, NAVIGATION.SAMPLE.PATH)
	}
];

@connect(state => ({
	router: state.router
}))
export default class Main extends Component {
	static propTypes = {
		appContentContainer: PropTypes.object,
		children: PropTypes.object,
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,
	};

	render() {
    const listItems = [{
      label: 'Sample',
      action: (e) => navigate(e, NAVIGATION.SAMPLE.PATH)
    }];
		return (
			<div>
        <div className="app-root">
          {this.props.children}
        </div>
			</div>
		);
	}
}
