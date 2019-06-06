import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./Board";

function App() {
    const boardStatus = [['', '', ''],['', '', ''],['', '', '']]

  return (
    <div className="App">
      <header className="App-header">
          <h2>Tris!</h2>
          <Board data={boardStatus} />
      </header>
    </div>
  );
}

export default App;
