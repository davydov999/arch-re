import React from 'react';
import { Route, Redirect } from 'react-router';
import enhance from './Presentation_enhance';

import Topic from './slides/1-Topic/topic';
import Some from './slides/2-some/some';

const Presentation = () => (
  <div id="content">
    <Route exact path="/1" component={Topic} />
    <Route exact path="/2" component={Some} />
  </div>
);

export default enhance(Presentation);
