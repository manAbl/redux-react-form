import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function formReducer(state = initialState, action) {

  switch(action.type) {

    case types.UPDATE_FORM_ATTR:
      return {
        ...state,
        customer: {
          ...action.newAttr
        }
      }

    case types.UPDATE_FORM_ATTR_HAS_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }

    case types.API_CALL_STARTED:
      return {
        ...state,
        isSaving: true
      }


    case types.SAVE_FORM_FAILURE:
      return {
        ...state,
        isSaving: false,
        api: {
          error: true,
          messageError: 'Something went wrong :( ... Please reload this page and try again'
        }
      }

    default:
    return state;
  }
}
