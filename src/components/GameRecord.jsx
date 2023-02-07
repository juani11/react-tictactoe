import { TURNS } from "../constants/constants";

import "./GameRecord.css";

const GameRecord = ({ gameRecord }) => {
    return (
        <section className='gameRecord'>
            <h2 className='gameRecord-title'>Historial de victorias</h2>
            <div className='gameRecord-grid'>
                <p className='gameRecord-grid-header'> Jugador {TURNS.X}</p>
                <p className='gameRecord-grid-header'> Empates</p>
                <p className='gameRecord-grid-header'> Jugador {TURNS.O}</p>

                <p className='gameRecord-grid-content'>
                    {" "}
                    {gameRecord[TURNS.X]}
                </p>
                <p className='gameRecord-grid-content'> {gameRecord.tie}</p>
                <p className='gameRecord-grid-content'>
                    {" "}
                    {gameRecord[TURNS.O]}
                </p>
            </div>
        </section>
    );
};

export default GameRecord;
