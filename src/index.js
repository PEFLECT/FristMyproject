import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//.css
import App from './App';
//.js
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//App คือชื่อไฟล์ App.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//มีหน้าที่เเสดงผล ไม่ต้องเเก้
