import { connect } from 'react-redux';
import { createActionCreators } from './sampleActionCreators.js';
import { createActionTypes } from './sampleActionTypes.js';
import { Sample } from './sampleComponent.js';

export function createSample(prefix, selectState) {
  const enhance = connect(store => ({
    sample: selectState(store)
  }), createActionCreators(createActionTypes(prefix)));

  return enhance(Sample);
}
