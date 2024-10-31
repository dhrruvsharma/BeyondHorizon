import React, { useEffect, useRef, useState } from "react";
import "./Landing.css"
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const words = ["From","black","holes","to","distant","planets","experience","the","awe","inspring","beauty","and","complexity","of","space.","Join","us","in","exploring","what","lies","beyond","our","world"];
    const words2 = ["For","the","wise","man","looks","into","space","and","he","knows","there","is","no","limited","dimensions.","The","sun","is","the","past,","the","earth","is","the","present,","the","moon","is","the","future."];
    const [mapWords, setMap] = useState(words);
    const [visible, setVisible] = useState(0);
    const [fadeout,setFadeout] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (visible < mapWords.length) {
            const timer = setTimeout(() => {
                setVisible(prev => prev + 1);
            }, 500)
            return () => clearTimeout(timer);
        } else if (visible === words.length) {
            setTimeout(() => {
                setVisible(0);
                setMap(words2);
            }, 1500);
        } else {
            setTimeout(() => {
                setFadeout(true);
            },1500)
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
        }
    }, [visible])

    return (
        <div className={`landing ${fadeout ? "fade-out" : ""}`}>
            <h1 className="init-text">
                {mapWords.map((item, index) => (
                    <div key={index}>
                        <span className={`words ${index < visible ? "unblurred" : "blurred"}`}>{item}&nbsp;</span>
                    </div>
                ))}
            </h1>
        </div>
    )
}
export default Landing;