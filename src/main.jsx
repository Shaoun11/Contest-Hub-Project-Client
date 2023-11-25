import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout'
import Errorpage from './Error'
import Home from './Components/Home/Home'
import AllContest from './Components/AllContest/AllContest'


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

  }

]
}])




const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <QueryClientProvider client={client}>
      <RouterProvider router={createroute} ></RouterProvider>
      </QueryClientProvider>
  
  </React.StrictMode>,
)
