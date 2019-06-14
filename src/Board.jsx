import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

 class Board extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
    }
     handleSubmit(event) {
         alert('A name was submitted: ' + this.state.value);
     }
    render() {
        return <div>
            <header className="header">
                <h2>Scrivi o Parla!</h2>
            </header>

         <TextField   value={this.state.value} onChange={this.handleChange} />
            <Button variant="contained" color="primary" onClick={() => console.log(this.state.value)}
             href="">
                OK
            </Button>

        </div>

    }
}

export default Board;

