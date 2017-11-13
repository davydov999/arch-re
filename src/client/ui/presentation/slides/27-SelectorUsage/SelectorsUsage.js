import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const SelectorsUsage = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Selectors example</div>
      <Highlight style={{ fontSize: '0.8em' }} className="js">
{`import usersOptionsSelector from './usersOptionsSelector';

const enhance = compose(
  connect((state, props) => ({
    usersOptions: usersOptionsSelector(state),
  })),
  ...
);

export default enhance;`}
      </Highlight>
    </div>
  </Slide>
);

export default SelectorsUsage;
