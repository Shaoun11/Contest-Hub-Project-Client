import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout'
import Errorpage from './Error'
import Home from './Components/Home/Home'
import AllContest from './Components/AllContest/AllContest'
import AuthProvider from './Components/AuthProvider/AuthProvider'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import ContestDetails from './Components/Details/Details'

import AllUsers from './Components/Dashboard/Alluser'
import Dashboard from './Components/Dashboard/Dashborad'
import AdminRoute from './Components/AdminRoute/AdminRoute'
import PrivateRoute from './PrivateRoute.jsx/PrivateRoute'
import AddContest from './Components/AddContest/AddContest'
import MyAddedContest from './Components/AddContest/MyAddedContest'
import MyProfile from './Components/MyProfile/MyProfile'
import Payment from './Components/Checkout/Payment'
import Done from './Components/done'
import ManageContest from './Components/AddContest/MangeContest'
import UpdatedContest from './Components/AddContest/Updated'



const createroute=createBrowserRouter([{
  path:"/",
  element:<Mainlayout></Mainlayout>,
  errorElement:<Errorpage></Errorpage>,
  children:[{
    path:"/",
    element:<Home></Home>,
    loader:()=>fetch("http://localhost:5000/allcontest")
  },
  {
    path:"/allcontest",
    element:<AllContest></AllContest>

  },
  {
    path:"/login",
    element:<Login></Login>
  },{
    path:"/done",
    element:<Done></Done>
  },
  {
    path:"/register",
    element:<Register></Register>
  }, 
  {
    path:"/payment",
    element:<Payment></Payment>
  }
  ,{
    path: "/details/:id",
    element:<ContestDetails></ContestDetails>,
   loader:({params})=>fetch(`http://localhost:5000/allcontest/${params.id}`)
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
      path:"users",
      element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    },
      {
      path:"addcontest",
      element:<AddContest></AddContest>
    },
      {
      path:"/dashboard",
      element:<MyProfile></MyProfile>,
      loader:()=>fetch(`http://localhost:5000/allcontest`) 
    },
    {
      path:"myaddcontest",
      element:<PrivateRoute><MyAddedContest></MyAddedContest></PrivateRoute>,
      loader:()=>fetch(`http://localhost:5000/allcontest`) 
    },
    {
      path:"updatedcontest",
      element:<PrivateRoute><UpdatedContest></UpdatedContest></PrivateRoute>,
      loader:()=>fetch(`http://localhost:5000/contest`) 
    },
    {
      path:"managecontest",
      element:<AdminRoute><ManageContest></ManageContest></AdminRoute>,
      loader:()=>fetch(`http://localhost:5000/allcontest`) 
    }
  
  ]
  }

]
}])




const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={client}>
      <RouterProvider router={createroute} ></RouterProvider>
      </QueryClientProvider>
      </AuthProvider>
  
  </React.StrictMode>,
)
