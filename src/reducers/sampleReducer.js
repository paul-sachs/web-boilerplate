import * as ReducerHelper from '../utils/reducerHelper';
import {createHandlers, initialState as sampleInitialState} from '../fragments/sample/sampleReducerHandlers.js';
import {createHandlers as createHandlers2} from '../fragments/sample2/sample2ReducerHandlers.js';

export const prefix1 = 'SAMPLE__';
export const prefix2 = 'SAMPLE2__';

const fragments = {
  sample1: {
    initialState: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix1)
    }
  },
  sample2: {
    initialState: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix2),
      ...createHandlers2(prefix2)
    }
  }
};

const initialState = {
  root: {
  }
};

const handlers = {};

const getInitialState = () => {
	return ReducerHelper.createState(initialState, fragments);
};

export function sample(state = getInitialState(), action) {
	return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

/* eslint-disable no-param-reassign */

