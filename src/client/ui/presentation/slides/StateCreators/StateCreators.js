import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const StateCreators = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">State creators (SC)</div>
      <Highlight className="js">
{`// itemSC.js
import commonSC from './commonSC';

export default data => ({
  ...commonSC(),
  data,
});`}
      </Highlight>
      <Highlight className="js">
{`// commonSC.js
export default () => ({
  loading: false,
  error: false,
  message: null,
});`}
      </Highlight>
    </div>
  </Slide>
);

export default StateCreators;
