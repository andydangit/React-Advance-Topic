import React, { useState } from "react";
import MainMenu from "../Components/MainMenu";
import Quiz from '../Components/Quiz'
import EndScreen from '../Components/EndScreen'

import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h2>test</h2>

      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  );
}

export default App;
