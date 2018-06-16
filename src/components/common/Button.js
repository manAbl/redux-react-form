import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button-styles.css';

const Button = ({ type, className, value, onClick, saving }) => (
  <button type={type} className={className} onClick={onClick} disabled={saving}>
    {value }
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
