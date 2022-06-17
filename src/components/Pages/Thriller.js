import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./Thriller.css";

function Thriller() {
  const history = useHistory();
  const thrillerHandler = () => {
    history.push("/books");
  };

  return (
    <Fragment>
      <div className="thrill">
        <h1>You're Invited</h1>
        <h2>by Amanda Jayatissa</h2>
        <p>
          "Filled with kaleidoscope twists and turns I could not turn the pages
          fast enough." —Greer Hendricks, bestselling co-author of The Wife
          Between Us (less) What could be worse than your ex-boyfriend marrying
          your childhood best friend? Getting accused of her murder… From the
          author of My Sweet Girl comes a dangerously addictive new thriller
          about a lavish Sri Lankan wedding celebration that not everyone will
          survive.
        </p>
      </div>
      <button className="thbtn" onClick={thrillerHandler}>
        Back
      </button>
    </Fragment>
  );
}

export default Thriller;
