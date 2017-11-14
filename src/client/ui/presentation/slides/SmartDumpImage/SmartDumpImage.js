import React from 'react';

import Slide from '../../components/Slide/Slide';

const style = {
  backgroundImage: 'url(/assets/img/the_puppet_master.jpg)',
  backgroundColor: '#c9c9c9',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center 20px',
  backgroundSize: 'contain',
}

const SmartDumpImage = ({ isActive }) => (
  <Slide style={style} isActive={isActive} center />
);

export default SmartDumpImage;
