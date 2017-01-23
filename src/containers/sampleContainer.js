import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button, LocaleHelper, SearchBox, Table, Dropdown } from '@fss/react-components';
import {intlShape} from 'react-intl';
import { BaseComponent } from '../components/baseComponent.js';

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
    // this.Sample = createDocumentViewerComponent((store) => store.documentDashboard.fragments.documentViewer, prefix, viewerUrls);
  }

	render() {
    this.ddlOptions = [
      {label: 'Top Acquisition Segments', value: '0'},
      {label: 'Top Attrition Segments', value: '1'},
      {label: 'Top Segments for Action', value: '2'}
    ];
		return (
		  <div>
			  <div className="b-sample-text">Hey this is a sample page, this text is styled with scss!</div>
        <Button>Open a Wizard</Button>
        <Dropdown
          selected={undefined}
          options={this.ddlOptions}
          onSelect={val => false}
        />
        {this.formatMessage('SAMPLE_TEXT')}
        <Table columns={[]}/>
      </div>
		);
	}
}
