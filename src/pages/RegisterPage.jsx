import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterForm from '../auth/RegisterForm'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function RegisterPage() {
  const navigate = useNavigate();
  function registerToShop ({email, password}) {
    createUserWithEmailAndPassword(auth, email, password)
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
    // ..
  });
  }
  return (
    <div>
      <h3>Register</h3>
      <RegisterForm onRegister={registerToShop} />
      <Link to={'/login'}> <span>Already registered ? Click to Login</span> </Link>
    </div>
  )
}

export default RegisterPage