import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

export default function Flags(){
  //  onSelectFlag();

    //component render
 //   const countryCode = "IT";
    return    <div >

    <ReactFlagsSelect
                                defaultCountry="IT"
                                searchable={false}
                          //      selectedSize={12}
                               optionsSize={12}
                               // onClick={() => this.forceUpdate()}
                        //       optionsSize={14}
        //
                            onSelect={(countryCode)=> console.log(countryCode)}

    />

    </div>

}
