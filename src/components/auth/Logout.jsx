import React from "react";
import { useAuthCtx } from "../../store/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "./logout.scss";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { isLoggedIn, logout } = useAuthCtx();
  const navigate = useNavigate();
  function logoutShop() {
    signOut(auth)
      .then(() => {
        logout();
        navigate('/login')
      })
      .catch((error) => {});
  }
  return !isLoggedIn ? null : (
    <button className="logout" onClick={logoutShop}>
      Logout
    </button>
  );
}

export default Logout;
