import React from 'react';
import Highlight from '../../components/Highlight/Highlight';

import Slide from '../../components/Slide/Slide';
import enhance from '../CompositionTask/enhance';

const CompositionExample = ({ isActive, isResultShowed, onClick }) => (
  <Slide isActive={isActive}>
    <div onClick={onClick}>
      <div className="slide-head">Composition example:</div>
      <Highlight className="javascript">
{`const add = a => b => a + b;
const mul = a => b => a * b;

const composition = compose(
  mul(3),
  add(3)
)(3); // ${isResultShowed ? '18' : '??'}`}
      </Highlight>
      <Highlight className="javascript">
{isResultShowed ? `// Equal
const compositionEqual =
  mul(3)(add(3)(3)); // 18
` : undefined}
      </Highlight>
    </div>
  </Slide>
);

export default enhance(CompositionExample);
