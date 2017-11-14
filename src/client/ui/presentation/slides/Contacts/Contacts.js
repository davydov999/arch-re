import React from 'react';

import Slide from '../../components/Slide/Slide';
import './Contacts.css'

const Some = ({ isActive }) => (
  <Slide isActive={isActive} center>
    <div className="user-info">
      <img role="presentation" className="user-img" src="/assets/img/slavik-m.jpg" />
      <div className="user-name">Slava Minchonok</div>
      <div className="user-email">relogn@gmail.com</div>
      <div className="user-linkedin">/minchonok</div>
    </div>
  </Slide>
);

export default Some;
