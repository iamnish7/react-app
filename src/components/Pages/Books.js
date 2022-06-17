import React from "react";
import "./Books.css";
import { useHistory } from "react-router-dom";

function Books() {
  const history = useHistory();
  const logoutHandler = () => {
    history.push("/welcome");
  };

  const scifiHandler = () => {
    history.push("/books/scifi");
  };
  const fictionHandler = () => {
    history.push("/books/fiction");
  };
  const nonHandler = () => {
    history.push("/books/nonfiction");
  };
  const romHandler = () => {
    history.push("/books/romance");
  };
  const thrillerHandler = () => {
    history.push("/books/thriller");
  };
  return (
    <div className="books">
      <button className="scifi" onClick={scifiHandler}>
        SCI-FI
      </button>

      <button className="fiction" onClick={fictionHandler}>
        Fiction
      </button>

      <button className="nonf" onClick={nonHandler}>
        Non-fiction
      </button>
      <button className="rom" onClick={romHandler}>
        Romance
      </button>
      <button className="thr" onClick={thrillerHandler}>
        Thriller
      </button>
      <button className="back" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default Books;
