import React from "react";
import "./POD.css"

const POD = ({ copyright, url, description, date, title }) => {
    return (
        <>
            <div className="pod">
                <figure>
                    <img src={url} alt="Picture of the day" />
                </figure>
                <div className="desc-container">
                    <h1 className="round">{title}</h1>
                    <div>{copyright && (<h2>Copyright :- {copyright}</h2>)}</div>
                    <p>{description}</p>
                    <p><strong>Taken on :- {date}</strong></p>
                </div>
            </div>
        </>
    )
}
export default POD;