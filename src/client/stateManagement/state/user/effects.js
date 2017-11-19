import requestEffect from 'stateManagement/lib/effects/requestEffect';
import { getUserRC } from './requestCreators';
import {
  getUserSuccessAC, getUserFailedAC,
} from './actionCreators';

export const getUserE = requestEffect(getUserRC, getUserSuccessAC, getUserFailedAC);
