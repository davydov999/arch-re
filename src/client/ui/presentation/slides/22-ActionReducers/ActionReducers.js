import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const ActionReducers = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Action reducers (AR)</div>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`// pendingStateAR.js
export default state => ({
  ...state,
  loading: true,
  error: false,
  message: null,
});`}
      </Highlight>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`// successStateAR.js
export default (state, action) => ({
  ...state,
  loading: false,
  data: action.payload,
});`}
      </Highlight>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`// failedStateAR.js
export default (state, { message }) => ({
  ...state,
  loading: false,
  error: true,
  message,
});`}
      </Highlight>
    </div>
  </Slide>
);

export default ActionReducers;
