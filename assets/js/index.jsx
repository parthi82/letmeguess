import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from './configureStore';
import Canvas from './components/Canvas';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Canvas} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
