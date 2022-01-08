import React from 'react'
import "../style/navigation.css"
const Navigation = () => {
return (
<div className="navigation">
<ul>
  <button className="mainmenubutton"><li><a href="http://localhost:3000/">mainmenu</a></li></button>
  <button className="charactersbutton"><li><a href="http://localhost:3000/characters">characters</a></li></button>
  <button className="fancontentbutton"><li><a href="http://localhost:3000/fancontent">fancontent</a></li></button>
  <button className="videogamesbutton"><li><a href="http://localhost:3000//videogames">videogames</a></li></button> 
</ul>
</div>
);
};

export default Navigation;
