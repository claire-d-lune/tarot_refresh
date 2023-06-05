import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { TarotCard } from './TarotCard'

// import { imageObject } from '../assets/Cups/ImageCollection'

const CardList = () => {

    type Card = {
        arcana: string
        name: string;
        name_short: string;
        value: string;
        value_int: number;
        meaning_up: string;
        meaning_rev: string;
        desc: string
    }
    
    const [cardList, setCardList] = useState<Card[] |null>(null);

    // let response: Card[]
    useEffect(() => {
        axios('/api/cards')
        .then(res => setCardList([...res.data]))     
    }, []);
  
    console.log(cardList)

    return(
        <div>
            <Navbar/>
            <p> Hello From the Cardlist! </p>
        </div>
        )

}

export default CardList