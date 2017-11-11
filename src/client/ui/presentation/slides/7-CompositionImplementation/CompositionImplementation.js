import React from 'react';
import Highlight from '../../components/Highlight/Highlight';

import Slide from '../../components/Slide/Slide';

const Composition = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Composition js implementation:</div>
      <Highlight className="javascript">
{`function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) => (...args) => a(b(...args))
  )
}`}
      </Highlight>
    </div>
  </Slide>
);

export default Composition;
