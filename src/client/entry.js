import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { persistStore } from 'redux-persist';
import Root from './Root';

import reducer from './stateManagement/reducer';
import { sagaMiddleware, runSagas } from './stateManagement/sagas';

let composeEnhancers;

if (process.env.NODE_ENV === 'production') {
  composeEnhancers = compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    )
  ),
);

// USE READONLY!
window.getState = () => store.getState();

const root = document.getElementById('root');
const persistor = persistStore(store);
runSagas();

render(<Root store={store} persistor={persistor} />, root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    /* eslint global-require: 0 */
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} persistor={persistor} />
      </AppContainer>,
      root
    );
  });
}
