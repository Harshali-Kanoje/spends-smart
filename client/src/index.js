import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './views/Home/Home.js'
import AddTransaction from './views/AddTransaction/AddTransaction.js'
import ShowTransaction from './views/ShowTransaction/ShowTransaction.js'
import Signup from './views/Signup/Signup.js'
import Login from './views/Login/Login.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/addtransaction',
    element: <AddTransaction />
  },
  {
    path: '/showtransaction',
    element: <ShowTransaction />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  }
]
)
root.render(
  <RouterProvider router={router}/>
);

