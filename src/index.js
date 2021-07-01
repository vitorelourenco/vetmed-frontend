import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('root')
);