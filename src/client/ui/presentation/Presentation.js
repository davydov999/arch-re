import React from 'react';
import slides from './slides';

const Presentation = ({ currentSlide }) => {
  const Slide = slides[currentSlide - 1];
  return (
    <div id="content">
      <Slide isActive />
    </div>
  );
}

export default Presentation;
