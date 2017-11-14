import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const RequestCreators = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Request effect</div>
      <Highlight  className="js">
{`// requestEffect.js
import { put, call } from 'redux-saga/effects';
import errorsHandler from '../../lib/errorHandler';

export default (requestCreator, successAC, failedAC) =>
  function* requestE(action) {
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
