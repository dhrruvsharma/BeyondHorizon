import React, { useState } from "react";
import "./InfScr.css"

const InfScr = ({url,title,desc,photographer,date}) => {

    const [pop,setPop] = useState(false);

    return(
        <div className="inf">
            <figure className="off">
                <img src={url} alt={title} onClick={() => {setPop(true)}} loading="lazy"/>
            </figure>
            {pop && (
                <>
                <div className="backdrop" onClick={() => setPop(false)}></div>
                <div className="inf-pop">
                    <figure>
                        <img src={url} alt={title} loading="lazy" />
                    </figure>
                    <div className="details">
                        {title && (<h1 className="round">{title}</h1>)}
                        {photographer && (<h2>Credits :- {photographer}</h2>)}
                        <p>{desc}</p>
                        {date && <p><strong>Date :- {date}</strong></p>}
                    </div>
                    <button onClick={() => {setPop(false)}}>X</button>
                </div>
                </>
            )}
        </div>
    )
}
export default InfScr;