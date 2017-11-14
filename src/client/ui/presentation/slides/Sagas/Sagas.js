import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const Sagas = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Sagas (Saga)</div>
      <Highlight className="js">
{`import { takeLatest } from 'redux-saga';
import { GET_USER } from './actionTypes';
import { getUserE } from './effects';

export function* getUserSaga() {
  yield takeLatest(GET_USER, getUserE);
}`}
      </Highlight>
    </div>
  </Slide>
);

export default Sagas;
