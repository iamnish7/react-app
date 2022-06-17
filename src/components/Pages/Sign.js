import React from "react";
import { useHistory } from "react-router-dom";
import "./Sign.css";

function Sign() {
  const history = useHistory();
  const signinHandler = () => {
    history.push("/books");
  };
  return (
    <div className="signuser">
      <label className="label1">Enter a valid UserName</label>
      <input type="text" placeholder="Enter UserName"></input>
      <label className="label2">Enter a valid Password</label>
      <input type="password" placeholder="Enter your password"></input>
      <label className="label3">Confirm Password</label>
      <input type="password" placeholder="Confirm Password"></input>
      <button className="btn" onClick={signinHandler}>
        SignUp
      </button>
    </div>
  );
}

export default Sign;
