import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/* === Import Bootstrap === */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Customized styles
import "./index.css"
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));