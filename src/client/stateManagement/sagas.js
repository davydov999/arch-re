import createSagaMiddleware from 'redux-saga';
import { getUserSaga } from './state/user/saga';

const sagaMiddleware = createSagaMiddleware();

function runSagas() {
  sagaMiddleware.run(getUserSaga);
}

export { runSagas, sagaMiddleware };
