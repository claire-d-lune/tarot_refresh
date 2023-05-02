import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";

// import { imageObject } from '../assets/Cups/ImageCollection'

const CardList = () => {

    type Card = {
        type: string,
        name_short: string,
        name: string,
        value: number,
        value_int: number,
        meaning_up: string,
        meaning_rev: string,
        desc: string
    }

    axios({url: 'cards', baseURL: "http:localhost:3000"}).then(res => console.log(res.data))

    return(
        <div>
            <Navbar/>
            <p> Hello From the Cardlist! </p>
        </div>
        )

}

export default CardList