import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Layout from './Layout.jsx'
import Home1 from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/home' element={<Layout/>}>
        <Route index element={<Home1/>} />
      </Route>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
