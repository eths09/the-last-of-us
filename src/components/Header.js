import React from 'react';
import "../style/header.css"
import img from "../pictures/headertlou.png"

const Header = () => {
    return (
        <img className="header" src={img} alt="img"></img>
    );
};

export default Header;