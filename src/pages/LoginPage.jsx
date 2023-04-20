import React from 'react'
import LoginForm from '../auth/LoginForm'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function LoginPage() {
  const navigate = useNavigate();
  function loginShop ({email, password}) {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorMessage ===', errorMessage);
  });
  }
  return (
    <div>
      <h3>Login Form</h3>
      <LoginForm onLogin={loginShop} />
    </div>
  )
}

export default LoginPage