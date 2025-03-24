import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home.js';
import CurrencyConverter from './pages/CurrencyConverter.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/currency-converter', element: <CurrencyConverter /> }
]);

root.render(
  <>
    <App />
    <RouterProvider router={router} />
  </>
);


