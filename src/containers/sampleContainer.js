import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button, LocaleHelper, SearchBox, Table, Dropdown } from '@fss/react-components';
import {intlShape} from 'react-intl';
import { BaseComponent } from '../components/baseComponent.js';
import { createSample } from '../fragments/sample/createSample.js';
import { prefix1 } from '../reducers/sampleReducer.js';

// TODO careful using connect like this! It will rerender on all fragment changes
// consider using state.sample.root (if you're confused talk to Jon)
@connect(state => ({
	sample: state.sample
}))
export class SampleContainer extends BaseComponent {
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
    this.Sample = createSample(prefix1, (store) => store.sample.fragments.sample1);
  }

	render() {
	  const Sample = this.Sample;
		return (
		  <div>
			  <Sample someText="Hi Im sample 1"/>
      </div>
		);
	}
}
