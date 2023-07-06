import React from "react";

const TarotCard = ({details}) => {
    return(
        <div className="card card-side bg-base-100 shadow-xl m-5">
            <figure><img src="https://i.ibb.co/mHbFjpj/world.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{details.name}</h2>
                <p>{details.arcana}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">More Info</button>
                </div>
            </div>
        </div>) 
}

export default TarotCard