import React, { useState } from 'react'
const Calculator = (nb) => {
    nb=10
    const [Calcul,aFtercalcul] = useState(0)
    const multiplier = () =>{  
        aFtercalcul(Calcul*nb)
    }
    const additioner = () =>{
        aFtercalcul(Calcul+nb)
    }
    const soustraire = () =>{
        aFtercalcul(Calcul-nb)
    }
    const reset = () => {
        aFtercalcul(Calcul===0)
        }
    return(
        <>
          <br/>
          <button onClick={multiplier}> X 10 </button>
          <button onClick={additioner}> + 10 </button>
          <button onClick={soustraire}> - 10 </button>
          <button onClick={reset}> reset </button>     
          <p>{Calcul}</p>
        </>
    )
}
export default Calculator
