import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateContextProvider } from './context/StateContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
