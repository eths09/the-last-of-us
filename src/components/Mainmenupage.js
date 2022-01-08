import React from 'react';
import Header from "./Header"
import Navigation from "./Navigation"
import Navbar from "./NavBar"
import logo from "../pictures/logojoel.png"
import logodina from "../pictures/logodina.png"
import last from "../pictures/last.png"
import "../style/mainmenu.css"

const Mainmenupage = () => {
    return(
      <>
        <Header/>
        <Navigation/>
        <div className="navbar1"> <Navbar h1="characters" img={logo} alt="imgpng" /></div>
        <div className="navbar2"> <Navbar h1="videogames" img={logodina} alt="imgpng"/></div>
        <div className="navbar3"> <Navbar h1="fancontent" img={last} alt="imgpng" /></div>
      </>
    )
}

export default Mainmenupage
