import React from 'react';
import Highlight from '../../components/Highlight/Highlight';

import Slide from '../../components/Slide/Slide';

const CompositionExample = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Composition example:</div>
      <Highlight className="javascript" style={{ fontSize: '2em' }}>
        {'3 + 3 * 3 = ??'}
      </Highlight>
    </div>
  </Slide>
);

export default CompositionExample;
