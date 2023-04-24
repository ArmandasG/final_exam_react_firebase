import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useAuthCtx } from "../store/AuthProvider";

function LoginPage() {
  const navigate = useNavigate();

  const { setIsLoading, ui } = useAuthCtx();
  function loginShop({ email, password }) {
    ui.showLoading();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        navigate("/shops");
        ui.showSuccess("Logged in");
      })
      .catch((error) => {
        ui.showError("Incorrect email or password");
        setIsLoading(false);
      });
  }
  function loginWithGoogle() {
    ui.showLoading();
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setIsLoading(false);
        navigate("/shops");
        ui.showSuccess("Logged in");
      })
      .catch((error) => {
        ui.showError("Something went wrong");
        setIsLoading(false);
      });
  }
  return (
    <div className="innerFormEl">
      <h1>Sign in</h1>
      <LoginForm onLogin={loginShop} />
      <button onClick={loginWithGoogle} className="btn btnGoogle">
        <img src="/google.png" alt="googleIcon" /> Login with Google{" "}
      </button>
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
