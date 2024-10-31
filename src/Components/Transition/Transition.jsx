import React, { useEffect, useState } from "react";
import "./Transition.css"

const Transition = () => {
    const [cl,setCl] = useState("transition active")
    useEffect(() => {
        setTimeout(() => {
            setCl("transition not-active");
        },500)
    },[])
    return(
        <div className={cl}></div>
    )
}
export default Transition;