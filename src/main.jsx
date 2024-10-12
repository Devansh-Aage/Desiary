import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Layout from './Layout.jsx'
import Home1 from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Travel from './pages/Travel.jsx'
import Memories from './pages/Memories.jsx'
import Journal from './pages/Journal.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/home' element={<Layout/>}>
        <Route index element={<Home1/>} />
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='travel' element={<Travel/>} />
        <Route path='memories' element={<Memories/>} />
        <Route path='journal' element={<Journal/>} />
        <Route path='profile' element={<Profile/>} />
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
