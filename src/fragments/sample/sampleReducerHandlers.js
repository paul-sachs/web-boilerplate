import { createActionTypes } from './sampleActionTypes.js';

// This can also be a function that returns a dynamic initial state if you want to be fancy!
export const initialState = {
  hiddenText: '',
  ddlOptions: [
    {label: 'Value 0', value: '0'},
    {label: 'Value 1', value: '1'},
    {label: 'Value 2', value: '2'}
  ]
};

/* eslint-disable no-param-reassign */
export const createHandlers = prefix => {
  const actionTypes = createActionTypes(prefix);
  const handlers = {};

  handlers[actionTypes.CLICK_BUTTON] = (newState) => {
    newState.hiddenText = 'look at me!';
    return newState;
  };

  return handlers;
};
