import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const weight = 100; // 상태관리할 변수 state 선언하기

function reducer(state = weight, action) {
  // 인자 state의 기본값은 변수 weight의 값
  if (action.type === '증가') {
    state += 1;
    return state;
  } else if (action.type === '감소') {
    state -= 1;
    return state;
  } else {
    return state;
  }
} // state를 reducer에 전달

let store = createStore(reducer); // store 만들어주기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// Provider에 store 전달

reportWebVitals();
