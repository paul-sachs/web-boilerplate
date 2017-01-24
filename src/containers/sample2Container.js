import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button, LocaleHelper, SearchBox, Table, Dropdown } from '@fss/react-components';
import {intlShape} from 'react-intl';
import { BaseComponent } from '../components/baseComponent.js';
import { createSample } from '../fragments/sample/createSample.js';
import { prefix2 } from '../reducers/sampleReducer.js';

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
    this.Sample2 = createSample(prefix2, (store) => store.sample.fragments.sample2);
  }

	render() {
	  const Sample2 = this.Sample2;
		return (
		  <div>
			  <Sample2 someText="Hi Im sample 1"/>
      </div>
		);
	}
}
