// 메인 프로그램.
// import <- 외부 모듈 로드.
// react, react-dom <- react 본체.
// react는 ES6.
import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

// App.js의 내용들을 가져와서 render.
// ReactDOM.reder(컴포넌트, 조합 대상 요소);
// ReactDOM.render(<App />, document.getElementById('root')); // root 태그에 App 컴포넌트를 포함시킨다.
ReactDOM.render(<Root />, document.getElementById('root')); // root 태그에 App 컴포넌트를 포함시킨다.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// JSX <- js 코드 내에서 html 태그를 사용할 수 있게 만드는 기능.