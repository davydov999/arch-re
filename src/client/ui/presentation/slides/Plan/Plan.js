import React from 'react';

import Slide from '../../components/Slide/Slide';

const Topic = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Plan: </div>
      <ul style={{ fontSize: '0.9em' }}>
        <li>Technology stack</li>
        <li>Project structure</li>
        <li>Architecture scheme</li>
        <li>Composition</li>
        <li>Smart/Dump component</li>
        <li>Redux</li>
        <li>Action types</li>
        <li>Action creators, Payload creators</li>
        <li>Reducers, State creators, Action reducers</li>
        <li>Effects</li>
        <li>Request creators</li>
        <li>Sagas</li>
        <li>Selectors</li>
        <li>Advantages/Limitations</li>
      </ul>
    </div>
  </Slide>
);

export default Topic;
