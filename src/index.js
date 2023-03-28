/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';

import Root from './pages/Root';
import Recipe from './pages/Recipe';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Deficiencies from './pages/Deficiencies/Deficiencies';
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
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/deficiencies",
        element: <Deficiencies />,
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
