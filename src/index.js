import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/global.css'
import ContextProvider from './store/context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </React.StrictMode>
);
