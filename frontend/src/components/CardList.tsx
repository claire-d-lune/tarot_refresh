import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import TarotCard from "./TarotCard.tsx"

// import { imageObject } from '../assets/Cups/ImageCollection'

const CardList = () => {

    type Card = {
        arcana: string;
        suit: string;
        name: string;
        name_short: string;
        value: string;
        value_int: number;
        image_url: string;
        meaning_up: string;
        meaning_rev: string;
        description: string
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
            <div>
                {cardList ? cardList.map(cardDetails => <TarotCard {...cardDetails}/>):  null}
            </div>
        </div>
        )

    // Building card filter. 
    const [filterSettings, setFilterSettings] = useState(["","any"])
    
    const handleCategory = (e) => {
        console.log(e)
    }
    

}

export default CardList