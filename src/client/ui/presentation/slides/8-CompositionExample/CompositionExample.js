import React from 'react';
import Highlight from '../../components/Highlight/Highlight';

import Slide from '../../components/Slide/Slide';

const CompositionExample = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Composition example:</div>
      <Highlight className="javascript">
{`function add(a) {
  return function (b) {
    return a + b;
  };
}

function mul(a) {
  return function (b) {
    return a * b;
  };
}

const composition = compose(
  mul(3),
  add(3)
)(3); // ??`}
{`

// Equal
const compositionE =
  mul(3)(add(3)(3));`}
      </Highlight>
    </div>
  </Slide>
);

export default CompositionExample;
