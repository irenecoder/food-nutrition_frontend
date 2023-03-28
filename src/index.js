/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';

import Root from './pages/Root';
import Recipe from './pages/Recipe';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/recipes/:_id",
        element: <Recipe />,
        // loader: teamLoader,
      },
    ],
  },
]);





ReactDOM.render(
  
  <React.StrictMode>
  <RouterProvider router={router} >
    <Container />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
