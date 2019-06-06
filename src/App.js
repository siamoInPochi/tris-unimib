import React, {useState} from 'react';
import './App.css';
import Board from "./Board";

function App() {
    const [boardStatus, setBoardStatus ] = useState([['', '', ''],['', '', ''],['', '', '']]);

    function makeMove(row, col) {
        const nextState = [...boardStatus];
        nextState[row][col] = 'X';
        setBoardStatus(nextState);
    }

    return (
    <div className="App">
      <header className="App-header">
          <h2>Tris!</h2>
          <Board data={boardStatus} onClick={(row, col) => makeMove(row, col)} />
      </header>
    </div>
  );
}

export default App;
