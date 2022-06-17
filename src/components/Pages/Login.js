import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const loginHandler = () => {
    history.push("/books");
  };
  return (
    <div className="L">
      <header>
        <h1>Login</h1>
      </header>
      <section className="loginsec">
        <div className="login">
          <label>Username</label>
          <input
            className="chk"
            type="text"
            placeholder="Enter Username"
          ></input>
        </div>
        <div className="pass">
          <label>Password</label>
          <input type="password" placeholder="Enter Password"></input>
        </div>
        <div className="FP">
          <NavLink style={{ color: "white" }} to="/forgetpassword">
            Forgot Password
          </NavLink>
        </div>
      </section>

      <button className="Lbtn" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
}

export default Login;
