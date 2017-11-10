import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

import Presentation from './ui/presentation';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Presentation />
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default Root;
