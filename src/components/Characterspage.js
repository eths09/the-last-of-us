import React from 'react';
import "../style/characters.css"
import Header from "./Header"
import Navigation from "./Navigation"
import Charactersdescription from "./Charactersderciption"
import ellie from "../pictures/elliecharacters.jpg"
import marlene from "../pictures/marlenecharacters.jpg"
import tess from "../pictures/tesscharacters.jpg"
import tommy from "../pictures/tommycharacters.jpg"
import joel from "../pictures/joelcharacters.jpg"

const Characterspage = () => {
    return(
        <div className="allsdescription">
        <Header/>
        <Navigation/>
        <Charactersdescription  h1="Ellie" img={ellie} alt="img" text="Ellie was born in the spring of 2019, by which time the Cordyceps brain infection had spread throughout America. Her mother was a nurse named Anna, although the identity of her father is unknown. On the day of her birth, her mother passed away. Before her death, Anna entrusted her closest friend Marlene to look after Ellie. However, Ellie did not meet Marlene until she was 13 years old." />
        <Charactersdescription h1="Marlene" img={marlene} alt="img" text="Marlene was the leader of the Fireflies and a friend of Ellie's mother, Anna. She took care of Ellie after Anna died and raised her as her own daughter." />
        <Charactersdescription h1="Tess" img={tess} alt="img" text="Tess is a survivor, partner of Joël in this apocalyptic world. Intelligent and resourceful, she does not hesitate for a second to get her hands dirty to achieve her ends. With Joël, they work to obtain ration cards." />
        <Charactersdescription h1="Tommy" img={tommy} alt="img" text="Tommy Miller is Joel's little brother and Sarah's uncle. In his past, he was part of the Fireflies, and now lives in Jackson with his wife Maria" />
        <Charactersdescription h1="Joel" img={joel} alt="img" text="Joel Miller is the main character and protagonist of The Last of Us. Joel is a ruthless survivor of the cordyceps infection, which has nearly wiped out the human species." />
        </div>
    )
}
export default Characterspage;
