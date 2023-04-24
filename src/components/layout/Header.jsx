import React from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { useAuthCtx } from "../../store/AuthProvider";
import Logout from "../auth/Logout";

function Header() {
  const { isLoggedIn, user } = useAuthCtx();
  return (
    <header>
      <div className="container headertop">
        <div className="top">
          <Link to={"/"} className="logo">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <title>store-building</title>
              <path
                d="M336.51,386.36c-.2.1-.4.16-.6.24v72.14H97.16V53.25H335.91v69.28H341a24.14,24.14,0,0,1,18.9,9.24V53.27A53.41,53.41,0,0,0,306.65,0H126.42A53.43,53.43,0,0,0,73.16,53.27V458.74A53.4,53.4,0,0,0,126.42,512H306.65a53.38,53.38,0,0,0,53.24-53.26V389.48H345.6A14.8,14.8,0,0,1,336.51,386.36Zm-120-341.28a6.16,6.16,0,1,1,6.13-6.15A6.15,6.15,0,0,1,216.53,45.08Zm-32.78-25.4c0-1.81,2.95-3.31,6.55-3.31h52.45c3.6,0,6.56,1.5,6.56,3.31V21.3c0,1.81-3,3.29-6.56,3.29H190.3c-3.6,0-6.55-1.48-6.55-3.29Zm65.56,469.4a6.57,6.57,0,0,1-6.56,6.55H190.3a6.57,6.57,0,0,1-6.55-6.55V485.8a6.58,6.58,0,0,1,6.55-6.56h52.45a6.59,6.59,0,0,1,6.56,6.56Z"
                fill="#22215B"
              />
              <path
                d="M352.41,214.4V170a6.42,6.42,0,0,0-6.4-6.4H208.1a6.41,6.41,0,0,0-6.4,6.4V214.4a6.4,6.4,0,0,0,6.4,6.39H346A6.41,6.41,0,0,0,352.41,214.4Zm-6.45-.05-137.81.05,0-44.35L346,170ZM203,146.8a9.44,9.44,0,0,1,9.45-9.43H341a9.45,9.45,0,1,1,0,18.89h-.49v2.51H212.93v-2.51h-.49A9.45,9.45,0,0,1,203,146.8Zm9.94,78.83H340.49v15.92H212.93Zm0,30.94H340.49v18H212.93Zm0,33.05H340.49v16H212.93Zm0,67.12a17.9,17.9,0,0,0,17.91,17.89h91.73a17.9,17.9,0,0,0,17.92-17.89V320.66H212.93Zm50.26-23.44h27.73a3.3,3.3,0,0,1,.69,6.54v27.64a4,4,0,0,1-4,4H266.48a4,4,0,0,1-4-4V339.82a3.3,3.3,0,0,1,.7-6.53Z"
                fill="#22215B"
              />
              <path
                d="M424,235.41H345.6V374.63H424a14.79,14.79,0,0,0,14.8-14.77V250.21A14.81,14.81,0,0,0,424,235.41ZM381.53,338.77A3.22,3.22,0,0,1,378.3,342H365.39a3.22,3.22,0,0,1-3.22-3.21V325.84a3.23,3.23,0,0,1,3.22-3.21H378.3a3.23,3.23,0,0,1,3.23,3.21Zm0-35.44a3.23,3.23,0,0,1-3.23,3.23H365.39a3.23,3.23,0,0,1-3.22-3.23V290.43a3.24,3.24,0,0,1,3.22-3.22H378.3a3.23,3.23,0,0,1,3.23,3.22Zm0-35.43a3.23,3.23,0,0,1-3.23,3.23H365.39a3.23,3.23,0,0,1-3.22-3.23V255a3.24,3.24,0,0,1,3.22-3.23H378.3a3.24,3.24,0,0,1,3.23,3.23Zm40.71,70.86A3.2,3.2,0,0,1,419,342h-12.9a3.22,3.22,0,0,1-3.24-3.21V325.84a3.23,3.23,0,0,1,3.24-3.21H419a3.21,3.21,0,0,1,3.22,3.21Zm0-35.44a3.21,3.21,0,0,1-3.22,3.23h-12.9a3.23,3.23,0,0,1-3.24-3.23V290.43a3.24,3.24,0,0,1,3.24-3.22H419a3.22,3.22,0,0,1,3.22,3.22Zm0-35.43a3.21,3.21,0,0,1-3.22,3.23h-12.9a3.23,3.23,0,0,1-3.24-3.23V255a3.24,3.24,0,0,1,3.24-3.23H419a3.22,3.22,0,0,1,3.22,3.23Z"
                fill="#22215B"
              />
              <path
                d="M227.76,188.12a6.8,6.8,0,0,1-1.18-4.09,6.52,6.52,0,0,1,2.3-5.27,9.29,9.29,0,0,1,6.27-2,14.18,14.18,0,0,1,5.21,1v3.74a9.17,9.17,0,0,0-4.2-1.24,4.89,4.89,0,0,0-3.3,1.06,3.3,3.3,0,0,0-1.29,2.7,3.81,3.81,0,0,0,.93,2.56A10.47,10.47,0,0,0,234,188c.71.61,1.64,1.33,2.75,2.18a18.29,18.29,0,0,1,4.25,4.11,7.06,7.06,0,0,1,1.13,4.1,6.84,6.84,0,0,1-2.48,5.43,9.52,9.52,0,0,1-6.36,2.08,10.78,10.78,0,0,1-5.57-1.35v-3.8a10.61,10.61,0,0,0,5,1.5,4.81,4.81,0,0,0,3.26-1,3.59,3.59,0,0,0,1.17-2.83,4.54,4.54,0,0,0-.9-2.77,13,13,0,0,0-1.3-1.37c-.55-.49-1.24-1.07-2.09-1.69-1.3-1-2.35-1.82-3.2-2.53A13.14,13.14,0,0,1,227.76,188.12Zm23.46-7.61h-5.9v-3.36H262v3.36h-5.72V205.6h-5ZM275.64,206c3.5,0,6-1.06,7.5-3.17s2.23-5.68,2.23-10.71a36.42,36.42,0,0,0-.69-8.17,10.06,10.06,0,0,0-2.2-4.68c-1.55-1.64-3.91-2.45-7.09-2.45-3.55,0-6.06,1.06-7.55,3.18s-2.22,5.67-2.22,10.75c0,5.66.76,9.6,2.23,11.83S271.95,206,275.64,206Zm-3.76-23.48a3.57,3.57,0,0,1,3.65-2.22,3.5,3.5,0,0,1,3.61,2.43c.57,1.61.88,4.87.88,9.79,0,3.82-.34,6.42-1,7.84a4,4,0,0,1-7.12-.16c-.62-1.59-.94-4.49-.94-8.64C271,187,271.29,184,271.87,182.48Zm24.92,9.19,7,13.94h5.17l-7-13.82a5.9,5.9,0,0,0,3.89-2.31,8,8,0,0,0,1.36-4.91,6.91,6.91,0,0,0-2.57-5.91c-1.35-1-3.43-1.5-6.21-1.5h-6.72V205.6h5.1Zm0-11.36h.85a6.94,6.94,0,0,1,2.07.28,3.13,3.13,0,0,1,2.22,2.4,7.79,7.79,0,0,1,.27,2.25,4.3,4.3,0,0,1-1.22,3.48c-.81.7-2.21,1.05-4.19,1.05Zm30.92,25.29H314.14V177.15h13.58v3.25h-8.47v9h7.52v3.23h-7.52v9.71h8.47Z"
                fill="#22215B"
              />
            </svg>
            <p>SHOPS</p>
          </Link>
          {isLoggedIn && <p className="emailUser">{user.email}</p>}
        </div>
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
          {!isLoggedIn && (
            <NavLink className="navItem" to={"/login"}>
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className="navItem" to={"/register"}>
              Register
            </NavLink>
          )}
          <div className="userBox">
            <NavLink className="" to={"/login"}></NavLink>
            {isLoggedIn && <p className="emailUserW">{user.email}</p>}
            <Logout />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
