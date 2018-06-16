import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ name, saving, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'input-group';
  if(error && error.length > 0) {
    // eslint-disable-next-line
    wrapperClass += " " + 'has-error';
  }

  return(
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <textarea required='true'
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={saving}
        onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
};

Textarea.propTypes = {
  name:PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default Textarea;
