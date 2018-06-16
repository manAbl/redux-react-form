import React from 'react';
import { render } from 'react-dom';
import ContactFormPage from './components/ContactFormPage';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

let store = configureStore();
const container = document.getElementById('root');

render (
<Provider store={store}>
  <ContactFormPage />
</Provider>, container);
