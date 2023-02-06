import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { TURNS } from "../constants/constants";
import { checkGameIsOver } from "../logic/general";
import GameInfo from "./GameInfo";
import Square from "./Square";

import "./Board.css";

const boardInitialState = Array(9).fill(null);

const Board = () => {
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

        //Si hay 5 jugadas como minimo, comprobar si hay ganador

        //Actualizo el board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
    };

    const resetGame = () => {
        setBoard(boardInitialState);
        setWinner(null);
    };

    useEffect(() => {
        console.log("Re render Board!", { board, turn });
    });

    useEffect(() => {
        //Comprobar si hay ganador
        console.log("Se ejecuta efecto!.");

        const { gameIsOver, winner } = checkGameIsOver(board);

        if (gameIsOver) {
            if (winner) confetti();
            setWinner(winner);
        } else {
            nextTurn();
        }
    }, [board]);

    return (
        <>
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
        </>
    );
};

export default Board;
