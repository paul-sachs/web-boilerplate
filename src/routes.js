import React from 'react';
import { Route } from 'react-router';
import AppContentContainer from './containers/appContentContainer.js';
import { SampleContainer }  from './containers/sampleContainer.js';
import { Sample2Container }  from './containers/sample2Container.js';
import { NAVIGATION } from './constants/navigation.js';

export default (
	<Route path="/" component={AppContentContainer}>
		<Route path={NAVIGATION.SAMPLE.PATH} component={SampleContainer} />
    <Route path={NAVIGATION.SAMPLE2.PATH} component={Sample2Container} />
	</Route>
);
