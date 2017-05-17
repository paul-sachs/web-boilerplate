import React from 'react';
import { connect } from 'react-redux';
import { HeaderBar, HeaderListing } from '@fss/react-components';
import { compose, withProps, pure } from 'recompose';
import { navigate } from 'utils/nav-helper';
import { NAVIGATION } from 'constants/navigation';

import './styles.scss';

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

const enhance = compose(
	pure,
	connect(
		state => ({
			router: state.router
		})
	),
	withProps(props => ({
		itemList: headerElems.map(item => {
			return (<HeaderListing
				label={item.label}
				onClick={e => navigate(e, item.path)}
				selected={item.path === props.location.pathname}
				key={item.path}
			/>);
		})
	}))
);

const view = ({ itemList, children }) =>
	<div>
		<HeaderBar listItems={itemList} />
		<div className="app-root">
			{children}
		</div>
	</div>;

export default enhance(view);
