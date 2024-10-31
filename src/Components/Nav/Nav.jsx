import React from "react";
import Logo from "../../assets/Logo.webp"
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className="nav">
                <figure>
                    <img src={Logo} alt="Logo" />
                    <h2>BeyondHorizon</h2>
                </figure>
            </div>
        </>
    )
}
export default Nav;