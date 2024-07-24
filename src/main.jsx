import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/Root';
import Index, { loader as indexLoader, loader } from './routes/Index';
import Meal, { loader as mealLoader } from './routes/Meal';
import Checkout from './routes/Checkout';
import NotFound from './routes/NotFound';
import IndexContent from './components/IndexContent';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import AdminDashboard from './routes/dashboard/AdminDashboard';
import AdminLayout from './routes/AdminLayout';
import AdminAddMeal, { createMealAction } from '@components/dashboard/AdminAddMeal';
import AdminMeal from '@components/dashboard/AdminMeal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Index />,
        errorElement: <NotFound />,
        loader: indexLoader,
        //  TODO
        children: [
          {
            index: true,
            element: <IndexContent />,
            errorElement: <NotFound />,
            // loader: indexLoader
          }
        ]
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
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/logout",
        // element: <SignIn />,

      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
        errorElement: <NotFound />,
      },
      {
        path: 'meal',
        element: <AdminMeal />,
        errorElement: <NotFound />,
      },
      {
        path: 'meals/new',
        element: <AdminAddMeal />,
        // errorElement: <NotFound />,
        action: createMealAction
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
