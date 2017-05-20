import test from 'ava';
import { increment } from 'store/actions';
import reducer from './';

test('foo6', t => {
	t.is(2, reducer(1, increment()));
});
