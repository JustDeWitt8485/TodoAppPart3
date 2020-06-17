import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDo from './Redux/reducers/toDo';
import { Provider } from 'react-redux';
import App from './React/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

const store = createStore(toDo)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
