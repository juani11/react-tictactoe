import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import GameRecord from "./components/GameRecord";
import { TURNS } from "./constants/constants";

function App() {
    const [gameRecord, setGameRecord] = useState({
        [TURNS.X]: 0,
        [TURNS.O]: 0,
        tie: 0,
    });

    const recordResult = (result, turn) => {
        if (!result)
            setGameRecord({
                ...gameRecord,
                tie: gameRecord.tie + 1,
            });
        else {
            setGameRecord({
                ...gameRecord,
                [turn]: gameRecord[turn] + 1,
            });
        }
    };

    useEffect(() => {
        console.log("render App!");
    });

    return (
        <main>
            <h2 className='title'>TIC TAC TOE</h2>
            <Board recordResult={recordResult} />
            <GameRecord gameRecord={gameRecord} />
        </main>
    );
}

export default App;
