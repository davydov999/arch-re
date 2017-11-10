import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Slide = ({ isActive, children }) => (
  <div className={classNames('slide', { 'slide--isActive': isActive })}>
    { children }
  </div>
);

Slide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Slide;
