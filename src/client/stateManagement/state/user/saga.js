import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from './actionTypes';
import { getUserE } from './effects';

export function* getUserSaga() {
  console.log('getUserSaga');
  yield takeLatest(GET_USER, getUserE);
}
