import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import User from './Components/GetUser/User'
import Add from './Components/AddUser/Add'
import Edit from './Components/UpdateUser/Edit'
import Button from './Components/Button'

// lien de la video
// https://youtu.be/3ywB6hstbfw?si=QI_-Tyhqhfs_YTXR

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path: "/add",
      element: <Add /> 
    },
    {
      path: "/edit/:id",
      element: <Edit />
    },
    {
      path: "/button",
      element: <Button />
    }
  ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}
