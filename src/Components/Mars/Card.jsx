import React from "react";
import "./Card.css"

const Card = ({url,name,cameras,date,used}) => {
    return(
        <div className="mars-card">
            <figure>
                <img src={url} alt="Mars Photograph" />
            </figure>
            <h1>Rover :- {name}</h1>
            <h2>Landing:- {date}</h2>
            <div className="camused">
                <h2>Cameras :- </h2>
                {cameras.map((item,index) => (
                    <div className="cam-con" key={index}>
                        <strong>{item.name}</strong>
                    </div>
                ))}
            </div>
            <h3 style={{padding:"1vw",textAlign:"center"}}>Camera Used :- {used}</h3>
        </div>
    )
}
export default Card;