import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from "@material-ui/core/Button";
import $ from 'jquery';


export default function Flags() {
  //  onSelectFlag();

    const countryCode= window.countryCode;
    window.countryCode="IT";
   const  url ="https://restcountries.eu/rest/v2/alpha/"
    function f() {
        $.getJSON(url.concat(window.countryCode), function (data){
window.countryCode=(data.languages[0].iso639_1)        }

        );    }
    return    <div >

    <ReactFlagsSelect
                                defaultCountry="IT"
                                searchable={false}
                          //      selectedSize={12}
                               optionsSize={12}
                               // onClick={() => this.forceUpdate()}
                        //       optionsSize={14}
        //
                            onSelect={(countryCode)=>{window.countryCode=countryCode;f()}}

    />


    </div>

}
