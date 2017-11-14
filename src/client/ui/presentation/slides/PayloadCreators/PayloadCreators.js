import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const PayloadCreators = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Payload creators (PC)</div>
      <Highlight className="js">
{`export const getUserSuccessPC = payload => ({
  ...payload,
  username: \`\${payload.first_name} \${payload.last_name}\`,
});`}
      </Highlight>
    </div>
  </Slide>
);

export default PayloadCreators;
