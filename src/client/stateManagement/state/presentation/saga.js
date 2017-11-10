import { takeLatest } from 'redux-saga/effects';
import {
  GO_TO_SLIDE,
  GO_TO_NEXT_SLIDE,
  GO_TO_PREVIOUS_SLIDE,
} from './actionTypes';

import replaceLocationE from './effects';

export default function* () {
  yield takeLatest(GO_TO_SLIDE, replaceLocationE);
  yield takeLatest(GO_TO_NEXT_SLIDE, replaceLocationE);
  yield takeLatest(GO_TO_PREVIOUS_SLIDE, replaceLocationE);
}
