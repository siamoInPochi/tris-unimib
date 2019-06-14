import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ControlledExpansionPanels from "./ControlledExpansionPanels";
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

 class Board extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const tradotto = "";
    }

    translateNow (){
        const SelectedLanguage = window.countryCode;
        const text = this.state.value;
        translate(text, {from: 'IT', to: SelectedLanguage}).then(
            res => { console.log(res.text);
                     }).catch(err => {
            console.error(err);
        });
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
    }


    render() {
        return <div>
            <header className="header">
                <h2>Scrivi o Parla!</h2>
            </header>


         <OutlinedInput multiline={true} value={this.state.value} onChange={this.handleChange} />
            <Button variant="contained" color="primary" onClick={() => this.translateNow()
            }
             href="">
                OK
            </Button>

        </div>

    }
}

export default Board;

