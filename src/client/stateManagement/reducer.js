import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import presentation from './state/presentation/reducer';
import user from './state/user/reducer';

const config = {
  key: 'root',
  storage,
};

const reducers = persistCombineReducers(config, {
  presentation,
  user,
});

export default reducers;
