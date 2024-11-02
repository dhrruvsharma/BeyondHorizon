import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./Mars.css"
import Loader from "../Loader/Loader";

const Mars = () => {
    const [page, setPage] = useState(1);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const key = import.meta.env.VITE_KEY;
    const [images, setImages] = useState([]);
    const bottomRef = useRef(null);
    const [initial, setInitial] = useState(false);
    const loading = useRef(false);
    const [loader, setLoader] = useState(false);

    const sol = Math.floor(Math.random() * 1000);

    const GetImages = async () => {
        loading.current = true;
        setLoader(true);
        console.log("Fired");
        try {
            const response = await axios.get(`${baseUrl}/mars-photos/api/v1/rovers/curiosity/photos`, {
                params: {
                    "sol": sol,
                    "api_key": `${key}`,
                    "page": page
                }
            })
            setImages((prev) => [...prev, ...response.data.photos]);
            if (!initial) {
                window.scrollTo({
                    top: 0
                })
            }
        } catch (error) {
            console.error(error);
        }
        loading.current = false;
        setInitial(true);
        setLoader(false);
    }

    useEffect(() => {
        GetImages();
    }, [page])

    useEffect(() => {

        if (!bottomRef.current || !initial) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading.current) {
                setPage((prev) => prev + 1);
            }
        }, { threshold: .5 })

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        }

    }, [images, loader, initial])

    return (
        <div className="mars">
            <div className="text-wrapper">
                <h1>Exploring Mars</h1>
                <p>Showcasing the stunning images captured by various Mars rovers. From rocky terrain to breathtaking landscapes, each photo offers a glimpse into the Martian environment.</p>
            </div>
            <div className="cards">
                {images?.map((item, index) => (
                    <div className="card-container" key={index}>
                        <Card url={item.img_src} name={item.rover.name} cameras={item.rover.cameras} date={item.rover.landing_date} used={item.camera.full_name} />
                    </div>
                ))}
            </div>
            {loader && (
                <div className="load" style={{ marginTop: "20px" }}>
                    <Loader height={"50px"} width={"50px"} />
                </div>
            )}
            <div ref={bottomRef} style={{ height: "50px" }}></div>
        </div>
    )
}
export default Mars;