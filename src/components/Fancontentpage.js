import React from 'react';
import "../style/fancontent.css"
import Header from "./Header"
import Navigation from "./Navigation"
import Count from "./Count"
import Select from "./Select"
import Calculator from "./Calculator"
const Fancontentpage = () => {
    return(
        <div className='fancontent'>
        <Header/>
        <Navigation/>
        <Count />
        <Select />
        <Calculator />
        </div>
    )
}

export default Fancontentpage
