import React from 'react';

export default function Board(props){
    return <table className={"tris-board"}>
        <tbody>
        { props.data.map((row, rowIndex) => <tr>
            {row.map((cell, colIndex) => <td>{cell}</td>)}
        </tr>) }
        </tbody>
    </table>
}