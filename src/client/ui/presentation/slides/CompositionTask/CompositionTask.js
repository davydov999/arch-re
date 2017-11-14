import React from 'react';
import Highlight from '../../components/Highlight/Highlight';

import Slide from '../../components/Slide/Slide';
import enhance from './enhance';

const CompositionExample = ({ isActive, isResultShowed, onClick }) => (
  <Slide isActive={isActive}>
    <div onClick={onClick}>
      <div className="slide-head">Composition task</div>
      <Highlight className="javascript" style={{ fontSize: '2em' }}>
        {`3 + 3 * 3 = ${isResultShowed ? '12' : '??'}`}
      </Highlight>
    </div>
  </Slide>
);

export default enhance(CompositionExample);
