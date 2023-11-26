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
  },
  {
    path:"/register",
    element:<Register></Register>
  }, 
  {
    path: "/details/:id",
    element:<ContestDetails></ContestDetails>,
   loader:({params})=>fetch(`http://localhost:5000/allcontest/${params.id}`)
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
