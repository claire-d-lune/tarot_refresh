import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import TarotCard from "./TarotCard.tsx"

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
    
    // Fetch card data into use state as a custom data type
    useEffect(() => {
        axios('/api/cards')
        .then(res => setCardList([...res.data]))
    }, []);

    console.log(cardList)

    // Building card filter. 
    const [filterSettings, setFilterSettings] = useState()
    
    const handleCategory = (event: React.MouseEvent) => {
        console.log(event)
    }
  
    return(
        <div>
            <Navbar/>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Filter</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleCategory}>Swords</li>
                    <li onClick={handleCategory}>Pentacles</li>
                    <li onClick={handleCategory}>Cups</li>
                    <li onClick={handleCategory}>Wands</li>
                </ul>
            </div>
            <div>
                {cardList ? cardList.map(cardDetails => <TarotCard {...cardDetails}/>):  null}
            </div>
        </div>
        )
    // Indicate a selected card to show extra data for one card at a time. 
    // const [selectedCard, setSelectedCard] = useState(id: Number)
}

export default CardList