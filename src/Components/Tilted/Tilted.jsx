import React, { useState } from "react";
import "./Tilted.css"

const Tilted = () => {
    const headings = ["Black Holes", "Comets", "Pulsar Stars", "Nebulas"]
    const images = ["","https://t3.ftcdn.net/jpg/02/97/57/02/240_F_297570278_UY8yGdELkhJ2zSXyOA8gkdPIZG8CK8Pf.jpg", "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tZXR8ZW58MHx8MHx8fDA%3D","https://t3.ftcdn.net/jpg/02/45/60/82/240_F_245608248_UL8VveCzdCICChwrP6twXFKOrCRthBR1.jpg","https://cdn.esahubble.org/archives/images/thumb700x/heic1105a.jpg"]

    const [activeImage,setActive] = useState(null);

    const effects = ["black","green","purple","yellow"];

    const ChangeImage = (index) => {
        setActive(index);
    }

    return (
        <div className="tilted">
            <h1 >Most Popular Topics</h1>
            <div className="wrapper">
                <div className="category-wrapper">
                    {headings.map((item, index) => (
                        <div className={`categories ${activeImage && activeImage !== index+1 ? "blurred" : ""}`} key={index}>
                            <h1 onMouseOver={() => {ChangeImage(index+1)}} onMouseLeave={() => {setActive(null)}}>{item}</h1>
                        </div>
                    ))}
                </div>
                <figure className={`image-wrapper ${activeImage ? "" : "strike"}`}>
                    <img src={(activeImage) ? images[activeImage] : "" } alt="" className={activeImage ? "ifade-in" : "ifade-out"} />
                </figure>
            </div>
            {effects.map((item,index) => (
                <div className={`hover-effect ${index == activeImage-1 ? `${item} active` : ""}`} key={index}></div>
            ))}
        </div>
    )
}
export default Tilted;