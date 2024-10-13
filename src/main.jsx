import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Layout from './Layout.jsx'
import Profile from './pages/Profile.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Travel from './pages/Travel.jsx'
import Memories from './pages/Memories.jsx'
import Journal from './pages/Journal.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/home' element={<Home/>}>
        <Route path='user' element={<Layout/>} >
          <Route index element={<Navigate to='profile'/>} />
          <Route path='wishlist' element={<Wishlist/>} />
          <Route path='travel' element={<Travel/>} />
          <Route path='memories' element={<Memories/>} />
          <Route path='journal' element={<Journal/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
