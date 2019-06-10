import React from 'react';
import './App.css';
import Flags from "./Flags";
import Button from '@material-ui/core/Button';

//todo: Board
//todo: Api connection
//todo: "Multiplayer"

function App() {


    return <div className="demo-group">
        <header className="header">
            <h2>Translate!</h2>
        </header>
            <Flags/>
        <Button variant="contained" color="primary"
        onClick={()=>""}>
            OK

        </Button>

    </div>;
}

export default App;
