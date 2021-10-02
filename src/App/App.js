import React, { useState } from "react";
import MainMenu from "../Components/MainMenu";

import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h2>test</h2>

      {gameState === "menu" && <MainMenu />}
    </div>
  );
}

export default App;
