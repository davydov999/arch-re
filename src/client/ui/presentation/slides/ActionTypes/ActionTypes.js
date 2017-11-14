import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const ActionTypes = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Action types</div>
      <Highlight className="js">
{`export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';`}
      </Highlight>
    </div>
  </Slide>
);

export default ActionTypes;
