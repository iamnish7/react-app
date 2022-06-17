import React, { Fragment } from "react";
import "./Fiction.css";
import { useHistory } from "react-router-dom";
function Fiction() {
  const history = useHistory();
  const fictionPageHandler = () => {
    history.push("/books");
  };
  return (
    <Fragment>
      <div className="fb1">
        <h1>The Maid</h1>
        <h2>by Nita Prose</h2>
        <p>
          Nita Prose's debut novel has the perfect Clue-like beginning: A grand
          hotel. A motley cast of personality-rich characters. And, of course, a
          murder. The story's protagonist is a hotel maid named Molly Gray, who
          quickly becomes a suspect in the case. Molly sees things a little
          differently. She notices details that others might miss, but she also
          struggles to follow social rules that others find natural. Fans of
          cozy mysteries, locked-room investigations, books for women, and
          Agatha Christie fiction books will fall head over heels for The Maid.
        </p>
      </div>
      <div className="fb2">
        <h1>Olga Dies Dreaming</h1>
        <h2>by Xochitl Gonzalez</h2>
        <p>
          Another much-anticipated debut novel, Olga Dies Dreaming is the
          perfect new fiction book for fans of witty rom-com that aren’t afraid
          to ask complex questions or tackle tricky topics beneath the veneer of
          sparkling humor. Set in New York and anchored in time by Puerto Rico’s
          devastating hurricane Maria, the story follows Olga, a Latinx wedding
          planner, as she grapples with her own less-than-fairy-tale love story
          and the return of a long-lost mother. Author Xochitl Gonzalez gives
          readers a modern romance complete with themes of race, identity,
          political corruption, and the American dream. This one seems destined
          to be a top pick for online book clubs and book subscription boxes.
        </p>
      </div>
      <button className="Fbutton" onClick={fictionPageHandler}>
        Back
      </button>
    </Fragment>
  );
}

export default Fiction;
