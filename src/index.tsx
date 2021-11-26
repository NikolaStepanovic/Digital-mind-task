import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './store/reducer';
import Saga from './store/Saga/Saga';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Saga);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>    
)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    {app}
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);  

reportWebVitals();

