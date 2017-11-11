import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const SmartDump = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div>
      <div className="slide-head">Dump component</div>
      <Highlight className="jsx">
{`const UserCard = ({ user }) => (
  <div className="user-card">
    <img src="{user.imageUrl}"/>
    <div>{user.username}</div>
    <div>{user.email}</div>
  </div>
);`}
      </Highlight>
    </div>
  </Slide>
);

export default SmartDump;
