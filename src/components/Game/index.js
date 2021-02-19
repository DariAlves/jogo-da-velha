import React from 'react';
import Board from '../Board';
import '../Game/style.css';

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>

            <div className="game-info">
                Info
            </div>
        </div>
    );
}

export default Game;