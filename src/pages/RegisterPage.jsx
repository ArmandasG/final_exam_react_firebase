import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./loginAndRegister.scss";

function RegisterPage() {
  const navigate = useNavigate();
  function registerToShop({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/shops");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage ===", errorMessage);
        // ..
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
