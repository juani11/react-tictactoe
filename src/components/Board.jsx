import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { TURNS } from "../constants/constants";
import { checkGameIsOver } from "../logic/general";
import GameInfo from "./GameInfo";
import Square from "./Square";

import "./Board.css";

const boardInitialState = Array(9).fill(null);

const Board = ({ recordResult }) => {
    const [board, setBoard] = useState(boardInitialState);
    const [turn, setTurn] = useState(TURNS.O);
    const [winner, setWinner] = useState(null);

    /**
     *--> null no hay empate ni ganador.(estado inicial)
     *--> false empate
     *--> true hay ganador
     */

    const nextTurn = () => {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
    };

    const handleClickSquare = (index) => {
        if (board[index] || winner) return;

        //Actualizo el board
        const newBoard = [...board];
        newBoard[index] = turn;

        setBoard(newBoard);

        const { gameIsOver, winner: existWinner } = checkGameIsOver(newBoard);

        if (gameIsOver) {
            if (existWinner) confetti();
            setWinner(existWinner);
            recordResult(existWinner, turn);
        } else {
            nextTurn();
        }
    };

    const resetGame = () => {
        setBoard(boardInitialState);
        setWinner(null);
    };

    useEffect(() => {
        console.log("Re render Board!", { board, turn });
    });

    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className='board' id='board'>
                {board.map((value, index) => (
                    <Square
                        key={index}
                        index={index}
                        value={value}
                        onClickSquare={handleClickSquare}
                    />
                ))}
            </div>

            <GameInfo winner={winner} turn={turn} resetGame={resetGame} />
        </section>
    );
};

export default Board;
