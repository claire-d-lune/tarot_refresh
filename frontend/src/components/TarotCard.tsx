import React from "react";

interface Card{
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

const TarotCard = (details: Card) => {

    return( 
        <div className="card w-96 inline-flex bg-amber-100 shadow-xl flex-wrap m-6">
            <div className="my-3">
                <div className="badge badge-outline">Arcana: {details.arcana}</div> 
                {details.arcana == "minor" ? <div className="badge badge-outline">Suite: {details.suit}</div> : null}
            </div>
            <figure>
                <img src={details.image_url} alt={details.name} />
            </figure>
            <h2 className="card-title self-center">
                    <span>{details.name}</span>
                    {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            
            <div className="card-body">
                <div className="h-20 my-4 overflow-scroll">
                    <p className=''>{details.description}</p>
                </div>
                <div className="card-actions justify-center">
                    <div className="badge badge-outline">Expand Details</div>
                </div>
            </div>
        </div>)
}

export default TarotCard