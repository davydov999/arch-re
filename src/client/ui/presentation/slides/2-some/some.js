import React from 'react';
import enhance from '../../Presentation_enhance';

const style = {
  fontSize: 42,
  width: 800,
  marginBottom: '20%',
};

const Some = () => (
  <div className="slide">
    <div style={style}>Some 22</div>
  </div>
);

export default enhance(Some);
