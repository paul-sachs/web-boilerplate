import { expectSaga } from 'redux-saga-test-plan';
import test from 'ava';
import { delay } from 'redux-saga';
import { userClickedButton, systemSetAlert } from 'store/actions';
import saga from './';

test(async t => {
	// This is what we consider an integration test for a saga.
	// It describes what the saga is expected to perform.
	// In this case, we expect delay to be called,
	// and a new action to be placed onto the redux store, setting the alert.
	// Detailed documentation can be found here: http://redux-saga-test-plan.jeremyfairbank.com/integration-testing/
	// Please note that this is just an example. We prefer not to use delay because it will actually wait 1000 ms
	// during the test, which is suboptimal.
	await expectSaga(saga)
		.call(delay, 1000)
		.put.actionType(systemSetAlert.getType())
		.dispatch(userClickedButton())
		.run({ timeout: 1200, silenceTimeout: true });
	// Since this saga is a takeLatest saga, it's expected to go on forever. Need to silence the timeout.
	t.pass();
});
