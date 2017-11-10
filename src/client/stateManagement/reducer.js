import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';

import presentation from './state/presentation/reducer';
import storage from 'redux-persist/es/storage';

const config = {
  key: 'root',
  storage,
};

const reducers = persistCombineReducers(config, {
  presentation,
});

export default reducers;
