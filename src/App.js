import React from 'react'
import { Routes, Route } from "react-router-dom";
import './style/App.css';
import Mainmenupage from "./components/Mainmenupage.js";
import Fancontentpage from "./components/Fancontentpage.js";
import Videogamespage from "./components/Videogamespage.js";
import Characterspage from "./components/Characterspage";

const  App= ()  => {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Mainmenupage />} />
      <Route path="/characters" element={<Characterspage />} />
      <Route path="/fancontent" element={<Fancontentpage />} />
      <Route path="/videogames" element={<Videogamespage />} />
    </Routes>
  </div>
  );
}
export default App;





