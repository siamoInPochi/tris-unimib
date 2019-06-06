import React from 'react';

export default function Board(){
    const data = [['', '', ''],['', '', ''],['', '', '']]

    return <table className={"tris-board"}>
        <tbody>
        { data.map((row, rowIndex) => <tr>
            {row.map((cell, colInde) => <td></td>)}
        </tr>) }

        </tbody>
    </table>
}