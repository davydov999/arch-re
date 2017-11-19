import React from 'react';
import { connect } from 'react-redux';

import Slide from '../../components/Slide/Slide';
import UserCard from '../../components/UserCard';

import * as actionCreators from 'state/user/actionCreators';

const HowItWorks = ({ isActive, getUserAC, clearUserStateAC }) => (
  <Slide isActive={isActive}>
    <div>
      <div className="slide-head" style={{ marginBottom: 40 }}>How it works</div>
      <UserCard />
      <button onClick={() => getUserAC()}>Get user</button>
      <button onClick={() => clearUserStateAC()}>Clear user state</button>
    </div>
  </Slide>
);

export default connect(null, actionCreators)(HowItWorks);
