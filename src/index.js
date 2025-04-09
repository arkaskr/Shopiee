import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <ShopContextProvider>
        <App/>
      </ShopContextProvider>
  </BrowserRouter>
);
