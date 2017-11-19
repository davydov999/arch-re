import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, CLEAR_USER_STATE } from './actionTypes';

export const getUserAC = payload => {
  console.log('getUserAC', payload);
  return {
    type: GET_USER,
    payload,
  };
};

export const getUserSuccessAC = payload => {
  console.log('getUserSuccessAC', payload);
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};

export const getUserFailedAC = payload => {
  console.log('getUserFailedAC', payload);
  return {
    type: GET_USER_FAILED,
    payload,
  };
};

export const clearUserStateAC = () => ({
  type: CLEAR_USER_STATE,
});
