import { createActionTypes } from './sample2ActionTypes.js';


/* eslint-disable no-param-reassign */
export const createHandlers = prefix => {
  const actionTypes = createActionTypes(prefix);
  const handlers = {};

  handlers[actionTypes.CLICK_BUTTON_2] = (newState) => {
    newState.hiddenText = '';
    return newState;
  };

  return handlers;
};
