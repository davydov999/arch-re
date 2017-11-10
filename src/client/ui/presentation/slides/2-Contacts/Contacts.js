import React from 'react';

import Slide from '../../components/Slide';
import './Contacts.css'

const Some = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div className="user-info">
      <img className="user-img" src="/assets/img/slavik-m.jpg" />
      <div className="user-name">Slava Minchonok</div>
      <div className="user-email">Email: relogn@gmail.com</div>
      <div className="user-linkedin">LinkedIn: /minchonok</div>
    </div>
  </Slide>
);

export default Some;
