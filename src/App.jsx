import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";  // Import the Home component
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase-config"; // 'db' was imported but not used, so it's removed here

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* Add the Home component route */}
        <Route path='/home' element={<Home />} />
        {/* Optionally, redirect root path to Home or Login based on auth state */}
        <Route path='/' element={user ? <Home /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
