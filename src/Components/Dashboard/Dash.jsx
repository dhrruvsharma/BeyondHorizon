import React, { useEffect, useState } from "react";
import Transition from "../Transition/Transition";
import "./Dash.css"
import Nav from "../Nav/Nav";
import Tilted from "../Tilted/Tilted";
import { Link } from "react-router-dom";
const Dash = () => {
    const [reveal, setReveal] = useState(false);

    const [background, setBackground] = useState(0)

    const images = ["https://i.pinimg.com/236x/f8/50/73/f850738e6d1e16d325a7d55a512861c9.jpg","https://i.pinimg.com/236x/62/82/38/628238cf552c7fb2b067c1d795e02e09.jpg","https://i.pinimg.com/236x/69/70/91/697091773db380f2692fb7140621d29f.jpg","https://i.pinimg.com/236x/5e/e7/fd/5ee7fd4e6dc6dca492f7727670b76956.jpg"]

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setTimeout(() => {
            setReveal(true);
        }, 500)
    }, [])

    useEffect(() => {
        const bt = setInterval(() => {
            setBackground((prev) => ((prev + 1) % images.length));
        }, 3000)

        return () => clearInterval(bt);
    }, [background])

    const HandleMouse = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setPosition({ x, y });
    }

    return (
        <div className="main-dash">
            <div className="banners" style={{ backgroundImage: `url(${images[background]})`, height: "100vh", opacity: ".3", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", filter: "grayscale(50%)",backgroundAttachment:"fixed" }} onMouseMove={HandleMouse}>
                <div
                    className="hover-overlay"
                    style={{
                        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0,0,0,0) 100px, rgba(0,0,0,.8) 150px)`,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 1,
                        filter: `blur(0px)`
                    }}
                />
                <div className="dash-container">
                    <div className={`diagonal ${reveal ? "revealed" : ""}`} style={{opacity:1,zIndex:4,color:"#eaeaea"}}>
                        <h1>WELCOME</h1>
                        <h1>To</h1>
                        <h1>BeyondHorizon</h1>
                        <p>Embark on a cosmic journey through timeless worlds and infinite perspectives.</p>
                        <p>Exploring the literature of universe, one star-studded verse at a time.</p>
                    </div>
                </div>
            </div>
            <Transition />
            <div className="nav-container">
                <Nav />
            </div>
            <div className="dashboard-container">
                <Tilted />
            </div>
            <div className="banner">
                <h1>Seems Interesting?</h1>
                <Link to={'/explore'}>
                    <h2>Start Exploring</h2>
                </Link>
            </div>
        </div>
    )
}
export default Dash;