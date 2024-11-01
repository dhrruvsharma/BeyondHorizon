import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./Mars.css"

const Mars = () => {
    const [page, setPage] = useState(1);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const key = import.meta.env.VITE_KEY;
    const [images, setImages] = useState([]);
    const bottomRef = useRef(null);
    const [loading,setLoading] = useState(false);
    const [initial,setInitial] = useState(false);

    const sol = Math.floor(Math.random() * 1000);

    const GetImages = async () => {
        setLoading(true);
        console.log("Fired");
        try {
            const response = await axios.get(`${baseUrl}/mars-photos/api/v1/rovers/curiosity/photos`, {
                params: {
                    "sol": sol,
                    "api_key": `${key}`,
                    "page": page
                }
            })
            setImages((prev) => [...prev,...response.data.photos]);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
        setInitial(true);
    }

    useEffect(() => {
        GetImages();
    }, [page])

    useEffect(() => {

        if (!bottomRef.current || !initial) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setPage((prev) => prev+1);
            }
        },{threshold:1.0})

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        }

    },[images])

    return (
        <div className="mars">
            This is the mars page.
            <div className="cards">
                {images?.map((item, index) => (
                    <div className="card-container" key={index}>
                        <Card url={item.img_src} name={item.rover.name} cameras={item.rover.cameras} date={item.rover.landing_date} used={item.camera.full_name}/>
                    </div>
                ))}
            </div>
            {loading && (
                <h1 style={{textAlign:"center"}}>Loading...</h1>
            )}
            <div ref={bottomRef} style={{height: "10px"}}></div>
        </div>
    )
}
export default Mars;