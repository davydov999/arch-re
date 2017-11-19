import { pendingStateAR, successStateAR, failedStateAR } from 'stateManagement/lib/actionReducers';
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, CLEAR_USER_STATE } from './actionTypes';
import itemSC from 'stateManagement/lib/stateCreators/itemSC';

const initialState = itemSC({
  username: '...',
  imageUrl: '/assets/img/default-user.png',
  email: '...',
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
