import React from 'react'
import LoginForm from '../auth/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
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
      <h3>Login</h3>
      <LoginForm onLogin={loginShop} />
      <Link to={'/register'}> <span>Not yet registered ? Click here</span> </Link>
    </div>
  )
}

export default LoginPage