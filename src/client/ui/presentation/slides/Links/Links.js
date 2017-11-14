import React from 'react';

import Slide from '../../components/Slide/Slide';

const Links = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <a href="https://github.com/slavik-m/arch-re">https://github.com/slavik-m/arch-re</a>
    </div>
  </Slide>
);

export default Links;
