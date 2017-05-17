import { fork } from 'redux-saga/effects';
import sample from './sample-saga';

export default function* root() {
	yield [
		fork(sample)
	];
}

