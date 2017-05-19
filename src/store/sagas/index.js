import { fork } from 'redux-saga/effects';
import sample from './sample-saga';
import fetchList from './fetch-list-saga';

export default function* root() {
	yield [
		fork(sample),
		fork(fetchList)
	];
}

