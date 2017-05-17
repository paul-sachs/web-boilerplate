import React from 'react';
import { Route } from 'react-router';
import AppContent from './components/content';
import Page1 from './pages/page1';

import { NAVIGATION } from './constants/navigation';

export default (
	<Route path="/" component={AppContent}>
		<Route path={NAVIGATION.SAMPLE.PATH} component={Page1} />
	</Route>
);

