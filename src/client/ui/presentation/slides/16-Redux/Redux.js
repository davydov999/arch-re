import React from 'react';

import Slide from '../../components/Slide/Slide';

const ReduxCycle = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Redux cycle:</div>
      <img src="/assets/img/redux-cycle.png" />
    </div>
  </Slide>
);

export default ReduxCycle;
