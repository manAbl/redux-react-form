import { createStore, applyMiddleware,  compose } from 'redux'
import formReducer from '../reducers/formReducer';
import thunk from 'redux-thunk';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore (
    formReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
