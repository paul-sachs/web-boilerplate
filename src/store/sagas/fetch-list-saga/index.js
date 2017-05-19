import { call, put, takeLatest } from 'redux-saga/effects';
import { userClickedFetch, setListItems } from 'store/actions';
import { delay } from 'redux-saga';

function* processClick() {
	yield call(delay, 2000);
	yield put(setListItems(['super', 'ultra', 'super ultra']));
}

function* userLoginSaga() {
	yield takeLatest(userClickedFetch.getType(), processClick);
}

export default userLoginSaga;
