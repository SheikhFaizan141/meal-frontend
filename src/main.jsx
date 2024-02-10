import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/Root';
import Index, { loader as indexLoader } from './routes/Index';
import Meal, { loader as mealLoader } from './routes/Meal';
import Checkout from './routes/Checkout';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: "/meal/:mealId",
        element: <Meal />,
        loader: mealLoader,
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
