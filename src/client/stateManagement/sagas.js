import createSagaMiddleware from 'redux-saga';
import presentationSaga from './state/presentation/saga';

const sagaMiddleware = createSagaMiddleware();

function runSagas() {
  sagaMiddleware.run(presentationSaga);
}

export { runSagas, sagaMiddleware };
