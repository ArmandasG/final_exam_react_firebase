import React from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { useAuthCtx } from "../../store/AuthProvider";
import Logout from "../auth/Logout";

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
      <div className="container">
        <Link to={"/"} className="logo">
          Logo
        </Link>
        <nav>
          {isLoggedIn && (
            <NavLink className="navItem" to={"/shops"}>
              Shops
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className="navItem" to={"/shops/new"}>
              Add Shop
            </NavLink>
          )}
          {!isLoggedIn && <NavLink className="navItem" to={"/login"}>
            Login
          </NavLink>}
          {!isLoggedIn && <NavLink className="navItem" to={"/register"}>
            Register
          </NavLink> }
          <NavLink className="" to={"/login"}>
            <Logout />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
