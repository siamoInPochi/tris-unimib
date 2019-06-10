import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from "@material-ui/core/Button";

export default function Flags() {
  //  onSelectFlag();

    const countryCode= window.countryCode;
    window.countryCode="IT";
    return    <div >

    <ReactFlagsSelect
                                defaultCountry="IT"
                                searchable={false}
                          //      selectedSize={12}
                               optionsSize={12}
                               // onClick={() => this.forceUpdate()}
                        //       optionsSize={14}
        //
                            onSelect={(countryCode)=> window.countryCode=countryCode}

    />


    </div>

}
