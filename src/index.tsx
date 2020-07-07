import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

export const page = {
  width: window.innerWidth,
  height: window.innerHeight,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
