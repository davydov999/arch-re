import React from 'react';

import Slide from '../../components/Slide/Slide';

const AdvantagesLimitations = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Advantages: </div>
      <ul>
        <li>Predictable</li>
        <li>Clear structure</li>
        <li>Cache in box</li>
        <li>Debug state (Time traveling debug)</li>
        <li>Atomic functions</li>
        <li>Beautiful code</li>
      </ul>
      <div className="slide-head">Disadvantages: </div>
      <ul>
        <li>Performance on very large state</li>
        <li>Normalizing State</li>
        <li>A lot of template code for server communication
          (fix by Apollo(GraphQl))
        </li>
      </ul>
    </div>
  </Slide>
);

export default AdvantagesLimitations;
