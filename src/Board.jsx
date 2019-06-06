import React from 'react';

export default function Board(props){
    return <table className={"tris-board"}>
        <tbody>
        { props.data.map((row, rowIndex) => <tr key={"row"+rowIndex}>
            {row.map((cell, colIndex) => <td onClick={() => props.onClick(rowIndex, colIndex)} key={`cell${rowIndex} ${colIndex}`}>{cell}</td>)}
        </tr>) }
        </tbody>
    </table>
}
