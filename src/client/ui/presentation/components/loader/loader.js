import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './loader.css';

const Loader = ({ loading, fullscreen, className }) => (
  <div className={classNames('loader-container', { hide: !loading }, { 'full-screen': fullscreen }, className)}>
    <div className="loader-wheel" />
  </div>
);

Loader.propTypes = {
  loading: PropTypes.bool,
  fullscreen: PropTypes.bool,
  text: PropTypes.string,
};

export default Loader;
