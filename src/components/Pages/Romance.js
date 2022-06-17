import React, { Fragment } from "react";
import "./Romance.css";
import { useHistory } from "react-router-dom";

function Romance() {
  const history = useHistory();
  const romancePageHandler = () => {
    history.push("/books");
  };
  return (
    <Fragment>
      <div className="romantic">
        <h1>Beautiful World, Where Are You</h1>
        <h3>by Sally Rooney</h3>
        <p>
          This quiet love story centers around Alice, Felix, Eileen and Simon —
          four people trying to find their way in the world. Romantic
          entanglement ensues (this is a Rooney novel, after all) and you'll
          find your own allegiances shifting and changing as you read.
        </p>
      </div>
      <div className="romantic1">
        <h1>A Lot Like Adiós</h1>
        <h3>by Alexis Daria</h3>
        <p>
          From the author of You Had Me at Hola comes another luxurious romance
          about a Puerto Rican career-focused woman with a nonexistent love life
          who gets a second chance with Gabrielle, the only man who ever made
          her heart race. Will they? Won't they? We'll never tell.
        </p>
      </div>
      <button className="Rbtn" onClick={romancePageHandler}>
        Back
      </button>
    </Fragment>
  );
}

export default Romance;
