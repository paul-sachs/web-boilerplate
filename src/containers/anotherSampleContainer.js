import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button, LocaleHelper, SearchBox, Table, Dropdown } from '@fss/react-components';
import {intlShape} from 'react-intl';
import { BaseComponent } from '../components/baseComponent.js';
import { createSample } from '../fragments/sample/createSample.js';
import { prefix, prefix2 } from '../reducers/anotherSampleReducer.js';

// we're only rendering when parent reducers changes, not fragments
@connect(state => ({
  anotherSample: state.anotherSample.root
}))
export class AnotherSampleContainer extends BaseComponent {

  static propTypes = {
    // router
    location: PropTypes.object,
    params: PropTypes.object,
    route: PropTypes.object,
    routeParams: PropTypes.object,
    routes: PropTypes.array,

    // redux state
    anotherSample: PropTypes.object
  };

  componentWillMount() {
    this.Sample = createSample(prefix, (store) => store.anotherSample.fragments.sample);
    this.Sample2 = createSample(prefix2, (store) => store.anotherSample.fragments.sample2);
  }

  render() {
    const Sample = this.Sample;
    const Sample2 = this.Sample2;
    return (
      <div>
        <Sample someText={this.props.anotherSample.thatText}/>
        <Sample2 someText={this.props.anotherSample.thatText}/>
      </div>
    );
  }
}
