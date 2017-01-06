import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './sample.scss';
import { Button, LocaleHelper, SearchBox, Table } from 'varicent-common';
import {intlShape} from 'react-intl';

@connect(state => ({
	sample: state.sample
}))
export class SampleContainer extends React.Component {
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

  formatMessage(id, values) {
    return this.context.intl.formatMessage({ id });
  }

	render() {
		return (
		  <div>
			  <div className="b-sample-text">Hey this is a sample page, this text is styled with scss!</div>
        <Button>Open a Wizard</Button>
        {this.formatMessage('SAMPLE_TEXT')}
        <Table columns={[]}/>
      </div>
		);
	}
}
