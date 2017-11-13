import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const Reducers = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Reducers</div>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`import { pendingStateAR, successStateAR, failedStateAR } from 'stateManagement/actionReducers';
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, CLEAR_USER_STATE } from './actionTypes';
import itemSC from 'stateManagement/stateCreators/itemSC';

const initialState = itemSC({
  username: '',
  imageUrl: '',
  email: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: return pendingStateAR(state, action);
    case GET_USER_SUCCESS: return successStateAR(state, action);
    case GET_USER_FAILED: return failedStateAR(state, action);

    case CLEAR_USER_STATE: return { ...initialState };
    default: return state;
  }
};
`}
      </Highlight>
    </div>
  </Slide>
);

export default Reducers;
