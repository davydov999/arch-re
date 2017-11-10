import { put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

export default function* replaceLocation() {
  const currentSlide = window.getState().presentation.currentSlide;
  yield put(replace(`/${currentSlide}`));
}
