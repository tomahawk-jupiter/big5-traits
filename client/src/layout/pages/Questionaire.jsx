import React, { useState } from "react";
import EnterName from "../../components/EnterName";
import Question from "../../components/Question";
import Results from "../../components/Results";
import { questions } from "../../data/questions";

const SelectComponent = ({
  questionId,
  endTestNumber,
  scores,
  nextQuestion,
  setScores,
  setUserName,
  userName,
}) => {
  if (questionId < 1) {
    return <EnterName setUserName={setUserName} nextQuestion={nextQuestion} />;
  }
  if (questionId < endTestNumber) {
    return (
      <Question
        scores={scores}
        questionId={questionId}
        question={questions[questionId]}
        nextQuestion={nextQuestion}
        setScores={setScores}
      />
    );
  }
  return <Results scores={scores} userName={userName} />;
};

const Questionaire = ({ setPage }) => {
  const endTestNumber = 45;
  const [questionId, setQuestionId] = useState(0);
  const [userName, setUserName] = useState("");
  const [scores, setScores] = useState({
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  });

  const nextQuestion = () => {
    setQuestionId(questionId + 1);
  };

  return (
    <div className="main">
      <SelectComponent
        questionId={questionId}
        endTestNumber={endTestNumber}
        scores={scores}
        nextQuestion={nextQuestion}
        setScores={setScores}
        userName={userName}
        setUserName={setUserName}
      />

      <button className="quitButton" onClick={() => setPage("Welcome")}>
        QUIT
      </button>
    </div>
  );
};

export default Questionaire;
