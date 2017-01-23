import * as ReducerHelper from '../utils/reducerHelper';
import {createHandlers, initialState as sampleInitialState} from '../fragments/sample/sampleReducerHandlers.js';

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

