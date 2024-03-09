import React from "react";
import GameCards from "../components/GameCards";
import Stopwatch from "../components/Stopwatch";
import SupportSheet from "../components/SupportSheet";
import "./Game.css";

const Game = () => {
    return (
        <div className="content game-page">
            <SupportSheet className="support-sheet"/>
            <Stopwatch className="stopwatch"/>
            <GameCards className="game-cards"/>
        </div>
    )
};

export default Game;