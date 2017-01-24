import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../utils/navHelper.js';
import { NAVIGATION } from '../constants/navigation.js';
import './appContentContainer.scss';
import {HeaderBar, HeaderListing} from '@fss/react-components';

const headerElems = [
	{
		label: 'Sample',
    path: NAVIGATION.SAMPLE.PATH
	},
  {
    label: 'Sample 2',
    path: NAVIGATION.SAMPLE2.PATH
  },
  {
    label: 'Another Sample',
    path: NAVIGATION.ANOTHER_SAMPLE.PATH
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
		routes: PropTypes.array
	};

	render() {
    const itemList = headerElems.map((item, index) => (
      <HeaderListing
        label={item.label}
        onClick={(e) => navigate(e, item.path)}
        selected={item.path === this.props.location.pathname}
        key={'listing-' + index}
      />
    ));
		return (
			<div>
        <HeaderBar listItems={itemList}/>
        <div className="app-root">
          {this.props.children}
        </div>
			</div>
		);
	}
}
