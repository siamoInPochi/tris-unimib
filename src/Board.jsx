import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from "@material-ui/core/Button";

export default function Board() {
  //  onSelectFlag();

    const countryCode= window.countryCode;
    window.countryCode="IT";
    return    <div>
        <div className="demo-group">
            <header className="header">
                <h2>Scrivi o Parla!</h2>
            </header>
            <textarea>

            </textarea>


    </div>
    </div>
}
