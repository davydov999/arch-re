import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const style = {
  backgroundImage: 'url(/assets/img/stop.gif)',
  backgroundColor: '#c9c9c9',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center 0',
  backgroundSize: 'cover',
};

const StateCreators = ({ isActive }) => (
  <Slide style={style} isActive={isActive} center>
  </Slide>
);

export default StateCreators;
