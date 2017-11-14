import React from 'react';
import Highlight from '../../components/Highlight/Highlight';

import Slide from '../../components/Slide/Slide';

const Composition = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Composition:</div>
      <Highlight className="nohighlight">
{`(f1, f2, f3, f4…) =>
  value =>
    f1( f2(f3(f4(value) )));`}
      </Highlight>
    </div>
  </Slide>
);

export default Composition;
