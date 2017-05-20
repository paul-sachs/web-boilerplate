import { createReducer } from 'redux-act';
import { increment } from 'store/actions';

export default createReducer({
	[increment]: state => state + 1
}, 0);
