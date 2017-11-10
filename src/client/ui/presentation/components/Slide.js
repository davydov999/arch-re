import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Slide.css';

const Slide = ({ isActive, children }) => (
  <div className={classNames('slide', { 'slide--isActive': isActive })}>
    <div className="slide-content">
      {children}
    </div>
  </div>
);

Slide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Slide;
