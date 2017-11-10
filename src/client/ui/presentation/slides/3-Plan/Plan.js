import React from 'react';

import Slide from '../../components/Slide';
import './Plan.css';

const Topic = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Plan: </div>
      <ul>
        <li>Technology stack</li>
        <li>Project structure</li>
        <li>Architecture scheme</li>
        <li>Smart/Dump component</li>
        <li>Redux</li>
        <li>Action types</li>
        <li>Action creators</li>
        <li>Reducer</li>
        <li>Effects</li>
        <li>Sagas</li>
      </ul>
    </div>
  </Slide>
);

export default Topic;
