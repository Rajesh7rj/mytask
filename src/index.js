import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Provider from './contexts/Provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider >
    <App />
    </Provider>
    </HashRouter>
  </React.StrictMode>
);

