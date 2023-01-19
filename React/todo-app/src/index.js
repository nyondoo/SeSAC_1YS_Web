import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // store사용 위해 임포트
import { configureStore } from '@reduxjs/toolkit'; //
import rootReducer from './store'; // index.js는 생략해도 ok , 스토어 통합관리 파일에서 내보낸 index.js를 rootReducer라는 이름으로 임포트해줌

// ./store/index.js에서 합친 모듈을 임포트
const store = configureStore({ reducer: rootReducer }); // 변수 store에 통합 리듀서를 리듀서로 넣어줌
console.log(store.getState()); //현재 선언해놓은 모든 리덕스가 찍힘.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/*Provider에 store 속성으로 위에서 선언한 통합 store를 줌*/}
    <App />
  </Provider>
);
