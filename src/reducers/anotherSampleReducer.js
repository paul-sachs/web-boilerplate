import * as ReducerHelper from '../utils/reducerHelper';
import {createHandlers, initialState as sampleInitialState} from '../fragments/sample/sampleReducerHandlers.js';
import {createActionTypes} from '../fragments/sample/sampleActionTypes.js';


export const prefix = 'ANOTHER_SAMPLE__';
export const prefix2 = 'ANOTHER_SAMPLE2__';
const sampleActionTypes = createActionTypes(prefix);

const fragments = {
  sample: {
    initialState: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix)
    }
  },
  sample2: {
    initialState: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix2)
    }
  }
};

const initialState = {
  root: {
    thatText: 'Im in the parent'
  }
};

const handlers = {};

const getInitialState = () => {
  return ReducerHelper.createState(initialState, fragments);
};

export function anotherSample(state = getInitialState(), action) {
  return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

// TODO fix helper to not overwrite actions

/* eslint-disable no-param-reassign */
handlers[sampleActionTypes.CLICK_BUTTON] = (newState) => {
  newState.root.thatText = 'look I changed on both';
  return newState;
};

