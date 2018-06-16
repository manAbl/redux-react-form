import React, { Component } from 'react';
import '../styles/app-styles.css';
import Form from './form/Form';
import Loader from './common/Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '.././actions/formActions';

class ContactFormPage extends Component {


    //---------------------------------------------------------------------//
   //----- this is creating an extra name, email, and message props ------//
  //------ on the store, but when sending the data I just submit --------//
 //---- what I need wich is just the props inside my customer object ---//

  updateFormState = e => {
    const field = e.target.name;
    const customer = this.props.customer;

    customer[field] = e.target.value;

    return this.props.actions.updateFormAttrs(customer);
  }

  handleSubmit = e => {
    e.preventDefault();

    const { customer, actions } = this.props;


    if(this.handleValidation(customer)) {

      this.setState({ saving: true });
      actions.saveFormData(customer, true);
    }

    else if (!this.handleValidation(customer)) {
      return;
    }
  }

  handleValidation = customer => {
      let errors = {};
      let formIsValid = true;

    //---------------------------------------------------------//
   //----------------- cheking for empty fields --------------//
  //------------------- and other stuff ---------------------//

    if(!customer["name"]) {
      formIsValid = false;
      errors["name"] = "This field can't be empty";
    }

    // validating name in case of inserting numbers
    if(typeof customer["name"] !== "undefined") {
        if(!customer["name"].match(/^[a-zA-Z ]{2,30}$/)) {
            formIsValid = false;
            errors["name"] = "This field only accept letters :(";
        }
    }

    if(!customer["email"]) {
      formIsValid = false;
      errors["email"] = "This filed can't be empty";
    }

    if(typeof customer["email"] !== "undefined") {
        let lastAtPos = customer["email"].lastIndexOf('@');
        let lastDotPos = customer["email"].lastIndexOf('.');

        // eslint-disable-next-line
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && customer["email"].indexOf('@@') == -1 && lastDotPos > 2 && (customer["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
    }


    if(!customer["message"]) {
      formIsValid = false;
      errors["message"] = "This field cannot be empty";
    }

    if(typeof customer["message"] !== "undefined") {
        if(customer["message"].length <= 5 ) {
            formIsValid = false;
            errors["message"] = "This field can't contain less than 5 characters";
        }
    }
      this.props.actions.updateFormAttrsHasErrors(errors);
      return formIsValid;
    }

  render() {
    const { customer, errors, isSaving, api } = this.props;
    const error = api.messageError;

    return (
      <div className="app-wrapper">
        <Form onChange={this.updateFormState}
        customer={customer}
        errors={errors}
        saving={isSaving}
        onSubmit={this.handleSubmit}
        />
        { isSaving ? <Loader /> : null }
        { api.error ? <div className="message-error_api-call"><span> { error } </span></div> : null }
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    customer: state.customer,
    isSaving: state.isSaving,
    errors: state.errors,
    api: state.api
  }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(formActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormPage);
