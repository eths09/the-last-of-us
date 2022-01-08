import React from 'react';
import "../style/characters.css"
const Charactersdescription = (props) => {
    return(
        <div className="description">
        <h1>{props.h1}</h1>
        <img src={props.img} alt="img"  className="imgdescription"/> 
        <p>{props.text}</p>
        </div>
    )
}
export default Charactersdescription

