import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import TarotCard from "./TarotCard.tsx"

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
  
    return(
        <div>
            <Navbar/>
            <p> Hello From the Cardlist! </p>
            <div className="flex mx-36">
                <div className="grid grid-cols-3 left-1/5">
                    {cardList ? cardList.map(e => <TarotCard details={e}/>):  null}
                </div>
            </div>
        </div>
        )

}

export default CardList