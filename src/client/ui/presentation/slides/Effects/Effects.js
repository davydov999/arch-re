import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const Effects = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Effects (E)</div>
      <Highlight className="js">
{`// effects.js
import requestE from 'stateManagement/effects/http/requestEffect';
import { getUserSuccessAC, getUserFailedAC } from './actionCreators';
import { getUserRC } from './requestCreators';

export const getUserE =
  requestE(getUserRC, getUserSuccessAC, getUserFailedAC);`}
      </Highlight>
    </div>
  </Slide>
);

export default Effects;
