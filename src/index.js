import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리엑트 라우터를 사용하기 위해서 BrowserRouter 컴포넌트를 App 외부에 감싸주는 역활
// App.js 파일을 index.js 파일이 포함하고 있으므로 , BrowserRouter는 index.js파일을 한번만 명시해 주면 된다.
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  StrictMode 모드는 개발 도중 발생할수 있는 문제를 꼼꼼이 감지하기 위하여 rendering을 두번 실행해 줍니다.
  따라서, <React.StrictMode>를 삭제하도록 합니다.
*/
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
