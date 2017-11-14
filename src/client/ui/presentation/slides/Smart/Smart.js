import React from 'react';

import Slide from '../../components/Slide/Slide';
import Highlight from '../../components/Highlight/Highlight';

const SmartDump = ({ isActive }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head">Enhance (composition of smart components)</div>
      <Highlight className="js">
{`import { compose, lifecycle, onlyUpdateForKeys } from 'recompose';
import { connect } from 'react-redux';
import { getUserAC } from 'state/user/actionCreators';

function componentDidMount() {
  this.props.dispatch(getUserAC());
}

const enhance = compose(
  connect(state => ({ user: state.user })),
  lifecycle({ componentDidMount }),
  onlyUpdateForKeys(['user']),
);

export default enhance;`}
      </Highlight>
    </div>
  </Slide>
);

export default SmartDump;
