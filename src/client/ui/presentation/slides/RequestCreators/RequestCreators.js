import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const RequestCreators = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Request creators (RC)</div>
      <Highlight className="js">
{`// requestCreators.js
import createRequest from 'lib/createRequest';

export const getUserRC = id =>
  createRequest({
    method: 'GET',
    url: \`/api/users/\${id}\`,
  });`}
      </Highlight>
    </div>
  </Slide>
);

export default RequestCreators;
