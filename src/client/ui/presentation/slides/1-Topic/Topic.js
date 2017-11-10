import React from 'react';

import Slide from '../../components/Slide';
import './Topic.css';

const Topic = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div id="topic">Architecture Re<br /> (react, redux, redux-saga, recompose)</div>
  </Slide>
);

export default Topic;
