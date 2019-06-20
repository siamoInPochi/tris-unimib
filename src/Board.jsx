import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ControlledExpansionPanels from "./ControlledExpansionPanels";
import { setCORS } from "google-translate-api-browser";
import * as ReactDOM from "react-dom";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

 class Board extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tradotto = "";
    }
nome(){
        return this.tradotto;
}
    translateNow (){
        const text = this.state.value;
        const SelectedLanguage = window.countryCode;
            translate(text, {from: 'IT', to: SelectedLanguage}).then(
            res => { //console.log(res.text);
                this.tradotto = res.text;
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
            <Button variant="contained" color="primary"
                    onClick={ ()=> {
                        translate(this.state.value, {from: 'IT', to: window.countryCode}).then((res)=>{
                    console.log(res.text);
                    ReactDOM.render(<ControlledExpansionPanels testo={res.text}/>,
                    document.getElementById('root').appendChild(document.createElement('messaggio')))})
                    }}
                    href="">
                TRADUCI
            </Button>

        </div>

    }
}

export default Board;

