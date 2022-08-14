import React, { useState } from "react";
import axiosInstance from "../axios.config";
// import "regenerator-runtime/runtime";

const EnterName = ({ nextQuestion, setUserName }) => {
  const [nameInput, setNameInput] = useState("");
  const [nameTaken, setNameTaken] = useState(false);

  const saveNameAndStart = async () => {
    // Check if name is in database
    // if its already in DB display a message saying to try another
    if (nameInput.length < 1) {
      return;
    }
    try {
      const res = await axiosInstance.get(`/${nameInput}`);
      console.log({ res });

      if (res.status === 202) {
        setUserName(nameInput);
        return nextQuestion();
      }

      if (res.status === 200) {
        // Already in DB
        console.log("Name taken");
        setNameTaken(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Enter Your Name</h1>
      <input
        onChange={(e) => setNameInput(e.target.value)}
        value={nameInput}
        type="text"
        className="name-input"
      />
      {nameTaken ? <div>This name is taken</div> : ""}
      <button onClick={saveNameAndStart}>BEGIN</button>
    </>
  );
};

export default EnterName;
