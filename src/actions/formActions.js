import * as types from './actionTypes';

export function saving (bool) {

  return {
    type: types.SAVING_FORM,
    isSaving: bool
  };
}

export function savingForm (form) {
  return {
    type: types.API_CALL_STARTED,
    form
  };
}


export function updateFormAttrs (newAttr) {

  return {
    type: types.UPDATE_FORM_ATTR,
    newAttr
  };
}

export function updateFormAttrsHasErrors (errors) {

  return {
    type: types.UPDATE_FORM_ATTR_HAS_ERRORS,
    errors
  };
}


export function saveFormFailure (error)  {

  return {
    type: types.SAVE_FORM_FAILURE,
    error
  };
}

export function errorAfterFourSeconds(msg) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saving(false));
            dispatch(saveFormFailure(msg));
        }, 4000);
    };
}

export function saveFormData(form, bool) {

  return (dispatch) => {
    dispatch(saving(bool));
    dispatch(savingForm(form));
    dispatch(errorAfterFourSeconds('Something wrong happened :( '));
  };
}
