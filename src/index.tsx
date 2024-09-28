import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'zarm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import path from 'path';
import Home from './pages/home/Home';
import My from './pages/my/Myself';
import Myself from './pages/my/Myself';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/my',
    Component: Myself,
  },
  {
    path: '/e',
    element: <div>element</div>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
