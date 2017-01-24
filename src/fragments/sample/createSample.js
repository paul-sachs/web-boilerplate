import { connect } from 'react-redux';
import { createActionCreators } from './sampleActionCreators.js';
import { createActionTypes } from './sampleActionTypes.js';
import { Sample } from './sampleComponent.js';

// TODO this could probably be a helper somewhere
export function createSample(prefix, selectState) {
  const enhance = connect(store => ({
    sample: selectState(store)
  }), createActionCreators(createActionTypes(prefix)));

  return enhance(Sample);
}

export function overrideSample(prefix, selectState, compClass, actions) {
  let connActions = actions ? actions : createActionCreators(createActionTypes(prefix));
  let connCompClass = compClass ? compClass : Sample;
  const enhance = connect(store => ({
    sample: selectState(store)
  }), connActions);

  return enhance(connCompClass);
}
