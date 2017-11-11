import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Slide.css';

const Slide = ({ isActive, center, children, style }) => (
  <div style={style} className={classNames('slide', { 'slide--isActive': isActive })}>
    <div className={classNames('slide-content', { 'slide-content--center': center })}>
      {children}
    </div>
  </div>
);

Slide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node,
  center: PropTypes.bool,
  style: PropTypes.shape(),
};

export default Slide;
