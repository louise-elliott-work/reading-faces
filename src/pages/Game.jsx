import React from "react";
import GameCards from "../components/GameCards";
import Stopwatch from "../components/Stopwatch";
import SupportSheet from "../components/SupportSheet";

const Game = () => {
    return (
        <div className="content">
            <h1>Game</h1>
            <SupportSheet />
            <Stopwatch />
            <GameCards />
        </div>
    )
};

export default Game;