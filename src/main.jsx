import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  
import App from './App';
import Home from './Pages/Home/Home';
import MainBody from './Components/MainBody/MainBody';
import Details from './Pages/Details/Details';
import Dashboard from './Pages/Dashboard/Dashboard';
import Statistics from './Pages/Statistics/Statistics';
import Tranding from './Pages/Tranding/Tranding';
import Error from './Pages/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[ 
     {
      path: '/',
      element:<Home/>
     },
     {
      path: '/device/:category',
      element:<Home/>
     },
     {
      path: '/details/:id',
      element:<Details/>,
      loader:()=> fetch("/device.json")
     },
     {
      path: '/dashboard',
      element:<Dashboard/>
     },
     {
      path: '/statistics',
      element:<Statistics/>,
      loader:()=> fetch("/device.json")
     },
     {
      path: '/tranding',
      element:<Tranding/>,
     },
    ]
  },
]);
 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
