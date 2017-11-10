import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router';

import Topic from './ui/presentation/slides/1-Topic/topic';
import Some from './ui/presentation/slides/2-some/some';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history} key={Math.random()}>
      <div id="content">
        <Route exact path="/1" component={Topic} />
        <Route exact path="/2" component={Some} />
      </div>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default Root;
