import React from 'react';
import { connect } from 'react-redux';
import enhance from '../../Presentation_enhance';

const style = {
  fontSize: 42,
  width: 800,
  marginBottom: '20%',
};

const Topic = () => (
  <div className="slide">
    <div style={style}>Architecture Re<br /> (react, redux, redux-saga, recompose)</div>
  </div>
);

export default enhance(Topic);
