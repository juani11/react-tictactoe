import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
    return (
        <main>
            <h2 className='title'>TIC TAC TOE</h2>
            <Board />
        </main>
    );
}

export default App;
