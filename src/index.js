import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ShopProvider } from './ShopContext'; // Ensure this is capitalized

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopProvider> {/* Ensure this is capitalized */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
);
