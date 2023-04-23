import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthCtx } from "../store/AuthProvider";

function LoginPage() {
  const navigate = useNavigate();
  const {setIsLoading, ui} = useAuthCtx()
  function loginShop({ email, password }) {
    ui.showLoading()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false)
        navigate("/shops");
        ui.showSuccess('Logged in')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage ===", errorMessage);
        ui.showError('Incorrect email or password')
        setIsLoading(false)
      });
  }
  return (
    <div className="innerFormEl">
      <h1>Sign in</h1>
      <LoginForm onLogin={loginShop} />
      <div className="additional">
        <p>Not yet registered ?</p>
        <Link to={"/register"}>
          {" "}
          <span> Click here</span>{" "}
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
