import test from 'ava';
import { userClickedButton } from 'store/actions';

import reducer from './';

test(t => {
	const initialState = {
		count: 99,
		inputText: 'yo'
	};
	const newState = reducer(initialState, userClickedButton());

	t.is(newState.count, 100, 'Successfully added 1');
});
