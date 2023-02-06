import { isThereWinnerOrTie } from "../logic/general";
import "./GameInfo.css";
const ResetGameButton = ({ resetGame }) => {
    return (
        <button className='resetGameButton' onClick={resetGame}>
            Volver a jugar
        </button>
    );
};

const InfoText = ({ winner, turn }) => {
    const textWinnerOrTie = winner ? `Ganador!! ${turn}` : "Empate! :)";
    return <p>{textWinnerOrTie}</p>;
};

const GameInfo = ({ winner, turn, resetGame }) => {
    return isThereWinnerOrTie(winner) ? (
        <>
            <InfoText className='infoText' winner={winner} turn={turn} />
            <ResetGameButton resetGame={resetGame} />
        </>
    ) : (
        <p>Turno de: {turn}</p>
    );
};
export default GameInfo;
