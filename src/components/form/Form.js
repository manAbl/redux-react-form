import React from 'react';
import '../../styles/form-styles.css';
import Input from '../common/Input';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Textarea from '../common/Textarea';


const Form = ({ customer, onSubmit, onChange, saving, errors }) =>  (
  <form method="post" onSubmit={onSubmit} validate='true'>
    <Input
      value={customer.name}
      onChange={onChange}
      name="name"
      type="text"
      label="Full name"
      placeholder="jhon doe"
      error={errors.name}
      disabled={saving} />
      <Input
      value={customer.email}
      onChange={onChange}
      name="email"
      type="email"
      label="Email"
      placeholder="jhon@doe.com"
      error={errors.email}
      disabled={saving} />
      <Textarea
      value={customer.message}
      onChange={onChange}
      name="message"
      placeholder="your message goes here ..."
      label="Message"
      disabled={saving}
      error={errors.message} />
    <Button
        type="submit"
        disabled={saving}
        value={saving ? 'Sending...' : 'Send'}
        className="btn"
        onClick={onSubmit} />
  </form>
);

Form.propTypes = {
  customer: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default Form;
