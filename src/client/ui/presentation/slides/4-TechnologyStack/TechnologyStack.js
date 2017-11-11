import React from 'react';

import Slide from '../../components/Slide/Slide';
import './TechnologyStack.css';

const TechnologyStack = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Technology stack: </div>
      <ul>
        <li><b>React</b> - UI components</li>
        <li><b>Redux</b> - State Management</li>
        <li><b>Redux-saga</b> - Side effects</li>
        <li><b>Recompose</b> - Smart/Dump components</li>
      </ul>
    </div>
  </Slide>
);

export default TechnologyStack;
