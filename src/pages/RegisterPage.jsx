import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./addRegisterShopPage.scss";
import { useAuthCtx } from "../store/AuthProvider";

function RegisterPage() {
  const navigate = useNavigate();
  const {setIsLoading, ui} = useAuthCtx()
  function registerToShop({ email, password }) {
    ui.showLoading()
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false)
        const user = userCredential.user;
        ui.showSuccess('User has been successfully registered')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage ===", errorMessage);
        ui.showError('Registration failed')
        setIsLoading(false)
      });
  }
  return (
    <div className="formEl">
      <div className="innerFormEl">
        <h1>Register</h1>
        <RegisterForm onRegister={registerToShop} />
        <div className="additional">
          <p>Already registered ?</p>
          <Link to={"/login"}>
            {" "}
            <span>Click here to login</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
