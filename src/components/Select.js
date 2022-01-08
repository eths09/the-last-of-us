import React from 'react';
import { useState } from "react/cjs/react.development"
const Select = () => {
    const [Choice, setChoice] = useState()
    const Joel = () => {
        setChoice('joel')
    }
    const Ellie = () => {
        setChoice('ellie')

    }
    const Tommy = () => {
        setChoice('Tommy')
    }
return(
    <>
      <p>your name is :  {Choice}</p>
      <button onClick={Joel}>Joel Miller</button><br/>
      <button onClick={Ellie}>Ellie</button><br/>
      <button onClick={Tommy}>Tommy</button>
    </>
)
}
export default Select