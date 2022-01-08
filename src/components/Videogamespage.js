import React from 'react';
import "../style/videogames.css"
import Header from "./Header"
import Navigation from "./Navigation"
import Gamebox from "./Gamebox"
import tloups3 from "../pictures/tloups3.jpg"
import tlouremastered from "../pictures/tloups4.jpg"
import tlou2 from "../pictures/tlou2ps4.jpeg"


const Videogamespage = () => {
    return(
        <>
          <Header/>
          <Navigation/>
          <Gamebox titlegamebox="the last of us ps3" imggamebox={tloups3} pgamebox="date: 14/06/2013" />
          <Gamebox titlegamebox="the last of us remastered ps4" imggamebox={tlouremastered} pgamebox="date: 29/07/2014" />
          <Gamebox titlegamebox="the last of us part2 ps4" imggamebox={tlou2} pgamebox="date: 19/06/2020" />
        </>
    )
}
export default Videogamespage