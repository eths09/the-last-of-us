import React from 'react';

const Gamebox = (props) => {
    return(
        <div gameboxcontainer>
            <h1>{props.titlegamebox}</h1>
            <img className="imggamebox" src={props.imggamebox} alt="img" />
            <p>{props.pgamebox}</p>  
        </div>
    )
}
export default Gamebox
