import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout'
import Errorpage from './Error'
import Home from './Components/Home/Home'


const createroute=createBrowserRouter([{
  path:"/",
  element:<Mainlayout></Mainlayout>,
  errorElement:<Errorpage></Errorpage>,
  children:[{
    path:"/",
    element:<Home></Home>
  }]
}])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={createroute} ></RouterProvider>
  </React.StrictMode>,
)
