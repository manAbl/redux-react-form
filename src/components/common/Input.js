import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, saving, type, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'input-group';
  if(error && error.length > 0) {
    // eslint-disable-next-line
    wrapperClass += " " + 'has-error';
  }

  return(
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input required='true'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={saving}
        onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
};

Input.propTypes = {
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
