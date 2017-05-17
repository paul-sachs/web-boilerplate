import { createAction } from 'redux-act';

export const userClickedButton = createAction('user clicked button');
export const userTypedResponse = createAction('user typed a response');

export const systemSetLocale = createAction('system set locale');
export const systemSetAlert = createAction('system set alert');
