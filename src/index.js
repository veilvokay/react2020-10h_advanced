import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppUseEffect from './AppUseEffect';
import AppCondRendering from './AppConditionalRendering';
import AppForms from './AppForms';
import AppRefReduce from './AppRefReduce';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppUseEffect /> */}
    {/* <AppCondRendering /> */}
    {/* <AppForms /> */}
    <AppRefReduce />
  </React.StrictMode>,
  document.getElementById('root')
);
