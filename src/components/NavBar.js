import React from 'react';
const navbar = (props) => {
    return(
        <div className="allnavbar">
      <button>       
         <h1>{props.h1}</h1>
         <img src={props.img} alt="img" className="imgcharacters" ></img>
      </button>
        </div>
    )
}

export default navbar