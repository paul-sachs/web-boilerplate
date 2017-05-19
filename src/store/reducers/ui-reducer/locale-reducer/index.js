// TODO move into src?
// TODO require.ensure these for each case?
import en from 'localizations/message.properties';
import fr from 'localizations/message_fr.properties';

import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import { systemSetLocale } from 'store/actions';

const supportedLocales = {
	fr,
	en
};


export default combineReducers({
	localeCode: createReducer({
		[systemSetLocale.getType()]: (localeCode, payload) => {
			return supportedLocales[payload.localeCode] ? payload.localeCode : localeCode;
		}
	}, 'en'),
	messages: createReducer({
		[systemSetLocale.getType()]: (messages, payload) => {
			return supportedLocales[payload.localeCode] ? supportedLocales[payload.localeCode] : messages;
		}
	}, en)
});

