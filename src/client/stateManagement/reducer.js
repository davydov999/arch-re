import { combineReducers } from 'redux';

import presentation from './state/presentation/reducer';

const reducers = combineReducers({
  presentation,
});

export default reducers;
