import { put, call } from 'redux-saga/effects';
import errorsHandler from '../../lib/errorHandler';

export default (requestCreator, successActionCreator, failedActionCreator) =>
  function* generator(action) {
    console.log('requestEffect', action);
    try {
      const payload = yield call(requestCreator, action.payload);
      yield put(successActionCreator(payload, action));
    } catch (e) {
      yield put(failedActionCreator(e, action));
      yield errorsHandler(e);
    }
  };
