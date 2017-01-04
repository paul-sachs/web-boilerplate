import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './sampleActionCreators.js';
import {createActionTypes} from './sampleActionTypes.js';
import './sample.scss';
import { intlShape } from 'react-intl';


export function createSampleComponent(selectState, prefix, urls) {
  @connect(store => ({
    sample: selectState(store)
  }), createActionCreators(createActionTypes(prefix), urls))
  class Sample extends React.Component {
    static contextTypes = {
      intl: intlShape
    };
    static propTypes = {
      // redux state
      sample: PropTypes.object
    };

    render() {
      return (
        <div>
          <div className="b-sample-text">Hey this is a sample page, this text is styled with scss!</div>
          <Button>Open a Wizard</Button>
        </div>
      );
    }
  }

  return Sample;
}
