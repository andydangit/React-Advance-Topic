import React, { useState, useContext } from "react";
import MainMenu from "../Components/MainMenu";
import Quiz from "../Components/Quiz";
import EndScreen from "../Components/EndScreen";

import { QuizContext } from "../Helpers/Contexts";

import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h2>test</h2>
      <QuizContext.Provider value= {{gameState, setGameState}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
