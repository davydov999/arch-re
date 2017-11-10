import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import Root from './Root';

import reducer from './stateManagement/reducer';
import { sagaMiddleware, runSagas } from './stateManagement/sagas';

const history = createHistory();

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
      routerMiddleware(history)
    )
  ),
);

// USE READONLY!
window.getState = () => store.getState();

const root = document.getElementById('root');

runSagas();
render(<Root store={store} history={history} />, root);
