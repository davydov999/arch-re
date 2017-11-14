import React from 'react';

import Slide from '../../components/Slide/Slide';

const style = {
  backgroundImage: 'url(/assets/img/scheme.svg)',
  //backgroundColor: '#c9c9c9',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center 5px',
  backgroundSize: 'contain',
};

const SmartDumpImage = ({ isActive }) => (
  <Slide style={style} isActive={isActive} center />
);

export default SmartDumpImage;
