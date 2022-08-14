import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios.config";
import Traits from "../../components/Traits";

// make api call to backend to get all results from DB and display.
// You can use axios and do it in a useEffect hook.

const PrevScoreRow = ({ scoreEntry }) => {
  const {
    username,
    openness,
    conscientiousness,
    extraversion,
    agreeableness,
    neuroticism,
  } = scoreEntry;
  return (
    <tr>
      <td>{username}</td>
      <td>{openness}</td>
      <td>{conscientiousness}</td>
      <td>{extraversion}</td>
      <td>{agreeableness}</td>
      <td>{neuroticism}</td>
    </tr>
  );
};

const CompareBoard = ({ setPage }) => {
  const [prevScores, setPrevScores] = useState([]);
  const [showTraits, setShowTraits] = useState(false);

  useEffect(() => {
    const getPreviousScores = async () => {
      try {
        const res = await axiosInstance("/");
        setPrevScores(res.data);
      } catch (error) {}
    };
    getPreviousScores();
  }, []);

  return (
    <div className="main">
      <h1>Previous Scores</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>O</th>
            <th>C</th>
            <th>E</th>
            <th>A</th>
            <th>N</th>
          </tr>
        </thead>
        <tbody>
          {prevScores.map((scoreEntry, index) => {
            return <PrevScoreRow key={index} scoreEntry={scoreEntry} />;
          })}
        </tbody>
      </table>
      <button className="quitButton" onClick={() => setPage("Welcome")}>
        BACK
      </button>

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

export default CompareBoard;
