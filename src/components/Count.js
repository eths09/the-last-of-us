import React, { useState } from 'react'
const Count = (nb) => {
    nb = 10;
    const [Counter, setCounter] = useState(0);
    const Add = () => {
        setCounter(Counter+1)
    }
    const Remove = () => {
        setCounter(Counter-1)
    }
    const reset = () => {
        setCounter(Counter===0)
        }
    return(
        <>
        <p>price : {nb}$ </p>
        <p>{Counter}</p>
        <button onClick= {Remove} > - </button>
        <button onClick= {Add}> + </button>
        <button onClick= {reset}>reset</button>
        <p>total : {nb*Counter}$</p>
        </>
    )
}

export default Count
