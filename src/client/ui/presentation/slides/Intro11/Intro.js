import React from 'react';

import Slide from '../../components/Slide/Slide';

const style = {
  backgroundImage: 'url(/assets/img/lol/16932671.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const Intro = ({ isActive }) => (
  <Slide style={style} isActive={isActive} center />
);

export default Intro;
