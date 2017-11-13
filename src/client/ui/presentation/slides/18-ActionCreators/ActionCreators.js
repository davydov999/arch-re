import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const ActionCreators = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Action creators (AC)</div>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED } from './actionTypes';
import { getUserSuccessPC } from './payloadCreators';

export const getUserAC = payload => ({
  type: GET_USER,
  payload,
});

export const getUserSuccessAC = payload => ({
  type: GET_USER_SUCCESS,
  payload: getUserSuccessPC(payload),
});

export const getUserFailedAC = payload => ({
  type: GET_USER_FAILED,
  payload,
});
`}
      </Highlight>
    </div>
  </Slide>
);

export default ActionCreators;
