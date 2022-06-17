import React from "react";
import { NavLink } from "react-router-dom";

import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="welcome">
      <main>
        <h2>Welcome User</h2>
        <h1>Book Shelf</h1>
      </main>
      <header>
        <p>Hey You need to Sign in to use this page. It's very easy!!</p>
        <NavLink to="/welcome/signin">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </header>
    </div>
  );
};

export default Welcome;
