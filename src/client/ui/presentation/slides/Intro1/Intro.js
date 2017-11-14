import React from 'react';

import Slide from '../../components/Slide/Slide';

const Intro = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div className="slide-head">Some words about bad architecture</div>
  </Slide>
);

export default Intro;
