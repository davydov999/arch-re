import React from 'react';
import slides from './slides';

const Presentation = ({ currentSlide }) => (
  <div id="content">
    { slides.map((Slide, index) => <Slide key={index} isActive={(index + 1) === currentSlide} />) }
  </div>
);

export default Presentation;
