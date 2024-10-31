import React from "react";
import Logo from "../../assets/Logo.webp"
import "./Exp.css"

const ExpNav = () => {
    return(
        <div className="exp-nav">
            <figure>
                <img src={Logo} alt="Logo" />
                <h2>BeyondHorizon</h2>
            </figure>
        </div>
    )
}
export default ExpNav;