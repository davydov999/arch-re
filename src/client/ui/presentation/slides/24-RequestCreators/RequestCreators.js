import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const RequestCreators = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Request creators (RC)</div>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`// requestCreator.js
import { put, call } from 'redux-saga/effects';
import errorsHandler from '../../lib/errorHandler';

export default (requestCreator, successAC, failedAC) =>
  function* generator(action) {
    try {
      const payload = yield call(requestCreator, action.payload);
      yield put(successAC(payload, action));
    } catch (err) {
      yield put(failedAC(err, action));
      yield errorsHandler(err);
    }
  };
`}
      </Highlight>
    </div>
  </Slide>
);

export default RequestCreators;
