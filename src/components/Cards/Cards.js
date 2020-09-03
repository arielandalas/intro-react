import React from 'react';

import './cards.css'
import Buttons from '../Buttons/Buttons';


const Cards = ({dated, content, view}) => {
    return (
      <div className="cardGrid">
            <div className="first"><h3>{dated}</h3></div>
            <p>{content}</p>
            <p>{view} <font color="#00b894">Went</font></p>
            <Buttons
                type="submit"
                value="View"
            />
        </div>
    )
}

export default Cards ;