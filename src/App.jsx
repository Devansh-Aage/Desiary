import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./config/firebase-config";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>} />
     </Routes>
    </>
  )
}

export default App
