import test from 'ava';
import { systemSetLocale } from 'store/actions';

import reducer from './';

test(t => {
	const initialState = {
		localeCode: 'fr',
		messages: { old: 'stuff' }
	};
	const newState = reducer(initialState, systemSetLocale({ localeCode: 'en' }));

	t.is(newState.localeCode, 'en', 'Can set locale to english');
	t.notDeepEqual(newState.messages, initialState.messages, 'Changing locales changes messages.');
});

test(t => {
	const initialState = {
		localeCode: 'fr',
		messages: { old: 'stuff' }
	};
	const newState = reducer(initialState, systemSetLocale({ localeCode: 'something-else' }));

	t.is(newState.localeCode, 'fr', 'Setting invalid locale does not set the locale');
	t.is(newState.messages, initialState.messages, 'Setting invalid locale does not change messages');
});
