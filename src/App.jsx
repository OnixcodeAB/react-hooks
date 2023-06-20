import React, { useContext, useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <>
      <div className={`App ${darkmode ? "DarkMode" : "LigthMode"}`}>
        <Header />
        <Characters />
      </div>
    </>
  );
};

export default App;
