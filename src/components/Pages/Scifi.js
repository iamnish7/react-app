import React, { Fragment } from "react";
import "./Scifi.css";
import { useHistory } from "react-router-dom";

function Scifi() {
  const history = useHistory();
  const scifiPageHandler = () => {
    history.push("/books");
  };
  return (
    <Fragment>
      <div className="sfi">
        <h1>BlindSight</h1>
        <h3>BY PETER WATTS (2006)</h3>
        <p>
          First contact between humanity and an extraterrestrial civilization
          are a cornerstone of science fiction, ranging from aliens with funny
          noses to the genuinely alien. Peter Watts’ novel Blindsight stars
          after the planet is bombarded by a strange cluster of objects that
          release a single broadcast before going dark. When scientists receive
          another transmission from a comet outside of the solar system, they
          dispatch an expedition composed of five trans-human specialists,
          including a vampire.
        </p>
      </div>
      <div className="sfi1">
        <h1>THE HUNGER GAMES </h1>
        <h3>BY SUZANNE COLLINS (2008)</h3>
        <p>
          Set in a dystopic future where the United States has collapsed and
          been replaced with Panem, children are selected for a brutal
          competition every ten years from each of the country’s twelve
          districts, in which they fight to the death, as punishment for a
          failed revolution. Collins’ book deals with pressing issues of
          brutality and trauma, as well as wealth inequality, poverty, and
          revolution.
        </p>
      </div>
      <button className="Sbtn" onClick={scifiPageHandler}>
        Back
      </button>
    </Fragment>
  );
}

export default Scifi;
