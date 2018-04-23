import {fork, all} from 'redux-saga/effects';

import {websocketSaga} from './socket';
import {watchGetRandomNumberSaga} from './random';


export default function* rootSaga() {
  yield all([
    fork(websocketSaga),
    fork(watchGetRandomNumberSaga)
  ]);
};
