import { takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

function* changeSlideEffect() {
  yield put(unauthorizedActionCreator());
}

export default function* () {
  yield takeLatest(LOCATION_CHANGE, unauthorizedEffect());
}
