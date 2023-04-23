import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useAuthCtx } from "../store/AuthProvider";

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log("searchParams ===", searchParams.get("redirected"));

  const { setIsLoading, isLoading, ui } = useAuthCtx();
  function loginShop({ email, password }) {
    ui.showLoading();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        navigate("/shops");
        ui.showSuccess("Logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ui.showError("Incorrect email or password");
        setIsLoading(false);
      });
  }
  function loginWithGoogle() {
    ui.showLoading();
    setIsLoading(true);
    const loginGooglePoromise = signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setIsLoading(false);
        navigate("/shops");
        ui.showSuccess("Logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn("errorMessage ===", errorMessage);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        ui.showError("Something went wrong");
        setIsLoading(false);
      });
  }
  return (
    <div className="innerFormEl">
      <h1>Sign in</h1>
      <LoginForm onLogin={loginShop} />
      <button onClick={loginWithGoogle} className="btn btnGoogle">
        <img src="/public/google.png" alt="googleIcon" /> Login with Google{" "}
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
