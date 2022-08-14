import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Questionaire from "./pages/Questionaire";
import Welcome from "./pages/Welcome";
import "../styles/globals.sass";
import "../styles/home.sass";
import CompareBoard from "./pages/CompareBoard";

const SelectPage = ({ page, setPage }) => {
  if (page === "Questionaire") {
    return <Questionaire setPage={setPage} />;
  }
  if (page === "Compare") {
    return <CompareBoard setPage={setPage} />;
  }
  return <Welcome setPage={setPage} />;
};

const App = () => {
  const [page, setPage] = useState("Welcome");

  return (
    <div className="container">
      {/* {page === "Welcome" ? (
        <Welcome setPage={setPage} />
      ) : (
        <Questionaire setPage={setPage} />
      )} */}
      <SelectPage page={page} setPage={setPage} />
      <Footer />
    </div>
  );
};

export default App;
