import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button, LocaleHelper, SearchBox, Table, Dropdown } from '@fss/react-components';
import {intlShape} from 'react-intl';
import { BaseComponent } from '../components/baseComponent.js';
import { overrideSample } from '../fragments/sample/createSample.js';
import { prefix2 } from '../reducers/sampleReducer.js';
import { Sample2 } from '../fragments/sample2/sample2Component.js';
import { createActionCreators } from '../fragments/sample2/sample2ActionCreators.js';
import { createActionTypes } from '../fragments/sample2/sample2ActionTypes.js';

// TODO careful using connect like this! It will rerender on all fragment changes
// consider using state.sample.root (if you're confused talk to Jon)
@connect(state => ({
	sample: state.sample
}))
export class Sample2Container extends BaseComponent {
  static contextTypes = {
    intl: intlShape
  };

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

	componentWillMount() {
    this.Sample2 = overrideSample(prefix2, (store) => store.sample.fragments.sample2, Sample2, createActionCreators(createActionTypes(prefix2)));
  }

	render() {
	  const Sample2 = this.Sample2;
		return (
		  <div>
			  <Sample2 someText="Show Text" hideText="Hide Text"/>
      </div>
		);
	}
}
