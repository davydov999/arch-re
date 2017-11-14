import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const SmartDumpExample = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Enhanced component</div>
      <Highlight className="js">
{`// UserCard/index.js
import UserCard from './UserCard';
import enhance from './enhance';

export default enhance(UserCard);`}
      </Highlight>
    </div>
  </Slide>
);

export default SmartDumpExample;
