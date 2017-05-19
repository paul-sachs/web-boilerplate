import { createReducer } from 'redux-act';
import { setListItems } from 'store/actions';
import { nthArg } from 'ramda';

// A basic helper, saying that the second argument for reducers (the payload)
// will set the reducer value. nthArg just return the nth argument, in this case,
// the second argument.
const set = nthArg(1);

export default createReducer({
	[setListItems.getType()]: set
}, []);

