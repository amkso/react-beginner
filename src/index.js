import React from 'react';
import ReactDOM from 'react-dom/client';
import Detail from './routes/Detail';
import Home from './routes/Home';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // origin
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // not use StrictMode
  // <App />
  <RouterProvider router={router} />
);

