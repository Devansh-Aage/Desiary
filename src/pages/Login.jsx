import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../config/firebase-config";
import React, { useState } from "react";

const Login = () => {
  const [userState, setUserState] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      setUserState(user);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#fdd7d7'
    }}>
      <div style={{
        flex: 1,
        backgroundColor: '#ffe5e5'
      }}></div>
      <div style={{
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(225deg, #FDE1EF 10% ,#F27EA1 35% ,#F27EA1 40% ,#F8B59A 65% ,#E5F9F0 90%,  #D9FDF7 95%)',
      }}>
        <div style={{
          width: '300px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '24px'
          }}>LOGIN</h1>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#fff',
              color: '#333',
              border: '1px solid #ccc',
              borderRadius: '25px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
            onClick={handleSignIn}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
