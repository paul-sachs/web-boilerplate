import { createReducer } from 'redux-act';
import { userClickedButton, userTypedResponse, systemSetAlert } from 'store/actions';
import { combineReducers } from 'redux';

export default combineReducers({
	count: createReducer({
		[userClickedButton.getType()]: state =>
			state + 1
	}, 0),
	inputText: createReducer({
		[userTypedResponse.getType()]: (state, payload) =>
			state + payload.text
	}, ''),
	alert: createReducer({
		[systemSetAlert.getType()]: (state, payload) =>
			payload
	}, null)
});
