import {call, take, put} from 'redux-saga/effects';
import * as RandomConstants from '../constants/random';
import * as RandomActions from '../actions/random';
import {getRandomNumberApi} from '../api/random';

function* getRandomNumberSaga(action) {
  try {
    const payload = yield call(getRandomNumberApi, action.payload.min, action.payload.max);
    yield put(RandomActions.getRandomNumberSuccess(payload));
  } catch (err) {
    yield put(RandomActions.getRandomNumberFailure(err))
  }
}

export function* watchGetRandomNumberSaga() {
  while (true) {
    const payload = yield take(RandomConstants.RANDOM_GET_RANDOM_NUMBER);
    yield call(getRandomNumberSaga, payload);
  }
}
