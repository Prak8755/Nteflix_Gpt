import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import VideoShow from '../components/VideoShow';





const Body = () => {

    const AppRouter=createBrowserRouter([
        {
          path:'/',
          element:<Login/>
        },
        {
          path:'/browse',
          element:<Browse/>
        },
        {
          path:'/videoshow/:id',
          element:<VideoShow/>
        }
      ])
  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default Body