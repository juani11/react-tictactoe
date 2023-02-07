import { WIN_COMBINATIONS } from "../constants/constants";

const thereIsAWinner = (board) => {
    //Si hay 5 jugadas como minimo, comprobar si hay ganador
    if (board.filter((elem) => elem !== null).length < 5) return false;

    const result = WIN_COMBINATIONS.some((combination) => {
        const [a, b, c] = combination;

        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            console.log("Hay ganador", { combination });
            return true;
        }
        return false;
    });

    return result;
};

const isBoardComplete = (board) => board.every((elem) => elem != null);

const checkGameIsOver = (board) => {
    //Check si hay ganador
    if (thereIsAWinner(board)) {
        return { gameIsOver: true, winner: true };
    } else {
        //Chek si ya se completo todo el board
        return isBoardComplete(board)
            ? { gameIsOver: true, winner: false }
            : { gameIsOver: false, winner: false };
    }
};

const isThereWinnerOrTie = (winner) => winner != null;

export { thereIsAWinner, checkGameIsOver, isThereWinnerOrTie };
