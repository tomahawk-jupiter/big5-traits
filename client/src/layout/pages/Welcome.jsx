import React, { useState } from "react";
import Traits from "../../components/Traits";

const Welcome = ({ setPage }) => {
  const [showTraits, setShowTraits] = useState(false);

  return (
    <div className="main">
      <h1 className="title">Big 5 Personality Test</h1>

      <button onClick={() => setPage("Questionaire")}>START</button>

      <p>
        Answer the 44 questions to get your score for the big 5 personality
        traits
      </p>

      <button onClick={() => setPage("Compare")}>See previous results</button>

      {showTraits ? (
        <Traits setPage={setPage} setShowTraits={setShowTraits} />
      ) : (
        <button onClick={() => setShowTraits(true)}>
          Show trait descriptions
        </button>
      )}
    </div>
  );
};

export default Welcome;
