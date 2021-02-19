import React from 'react';
import '../Board/style.css';

function Board() {
    return (
        <div>
            <div className="board-row">
                <button className="square">X</button>
                <button className="square">X</button>
                <button className="square">X</button>
            </div>
            <div className="board-row">
                <button className="square">X</button>
                <button className="square">X</button>
                <button className="square">X</button>
            </div>
            <div className="board-row">
                <button className="square">X</button>
                <button className="square">X</button>
                <button className="square">X</button>
            </div>
        </div>
    );
}

export default Board;