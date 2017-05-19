import { call, put, takeLatest } from 'redux-saga/effects';
import { userClickedButton, systemSetAlert } from 'store/actions';
import { delay } from 'redux-saga';

function* processClick() {
	// This is just an example, but we can call any async function (as long as it returns a promise) instead of delay
	// and assign the result;
	// Ex: const result = yield call(apiCall, ...args);
	// If an error is thrown, you can catch it or rely on the middlewares onerror handler.
	yield call(delay, 1000);
	yield put(systemSetAlert('This is a delayed alert ' + Date.now()));
}

function* userLoginSaga() {
	yield takeLatest(userClickedButton.getType(), processClick);
}

export default userLoginSaga;
