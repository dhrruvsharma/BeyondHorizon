import React from "react";
import "./Card.css"
import Dummy from "../../assets/Logo.webp"

const Card = () => {
    return (
        <div className="card">
            <figure>
                <img src={Dummy} alt="Image" />
            </figure>
            <div className="card-details">
                <h1>This is the Heading of the Card</h1>
                <p>This is the description of the card</p>
            </div>
        </div>
    )
}
export default Card;