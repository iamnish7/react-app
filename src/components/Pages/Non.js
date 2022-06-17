import React, { Fragment } from "react";
import "./Non.css";
import { useHistory } from "react-router-dom";

function Non() {
  const history = useHistory();
  const nonfictionPageHandler = () => {
    history.push("/books");
  };
  return (
    <Fragment>
      <div className="non">
        <h1>A Brief History of Time</h1>
        <h2>By Stephen Hawking</h2>
        <p>
          A Brief History of Time By Stephen Hawking Was there a beginning of
          time? Could time run backwards? These are just some of the questions
          considered in an internationally acclaimed masterpiece by one of the
          world's greatest thinkers.
        </p>
      </div>
      <div className="non1">
        <h1>
          Behind the Beautiful Forevers: Life, Death, and Hope in a Mumbai
          Undercity
        </h1>
        <h2>by Katherine Boo (2012)</h2>
        <p>
          What does it mean to strive for a better life when everything is
          against you? How do we maintain our humanity in the face of poverty
          and longing? Boo delves into the lives of the families who live in the
          Annawadi slum, squatting on forgotten land owned by the Sahar
          International Airport in Mumbai and striving to make their lives
          better. As India transforms and modernizes, those who’ve resided in
          the traditionally “lower” castes have a glimpse of upward mobility and
          what it takes to get there. This beautifully written masterpiece was a
          national best seller, the winner of the National Book Award, a
          finalist for the Pulitzer Prize, and one of Time‘s Best Books of the
          Decade. Boo herself won a coveted MacArthur “Genius” Grant for her
          work. Behind the Beautiful Forevers rightfully earns its spot on this
          list of the best nonfiction books—it’s one of the books everyone
          should read in their lifetime.
        </p>
      </div>
      <button className="Nobutton" onClick={nonfictionPageHandler}>
        Back
      </button>
    </Fragment>
  );
}

export default Non;
