import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppUseEffect from './AppUseEffect';
import AppCondRendering from './AppConditionalRendering'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppUseEffect /> */}
    <AppCondRendering />
  </React.StrictMode>,
  document.getElementById('root')
);
