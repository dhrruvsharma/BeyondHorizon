import React, { useEffect, useState } from "react";
import Transition from "../Transition/Transition";
import ExpNav from "../ExpNav/ExpNav";
import "./Explore.css"
import axios from "axios";
import POD from "../Card/POD";
import "./Explore.css"
import InfScr from "../InfScr/InfScr";

const Explore = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const key = import.meta.env.VITE_KEY;
    const ImgUrl = import.meta.env.VITE_IMAGES;

    const [pictures, setPictures] = useState([]);
    const [inf,setInf] = useState([]);

    const APOD = async () => {
        try {
            const response = await axios.get(`${baseUrl}/planetary/apod`, {
                params: {
                    'api_key': `${key}`,
                    'count': 6
                }
            })
            setPictures(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const Images = async () => {
        try{
            const response = await axios.get(`${ImgUrl}`,{
                params:{
                    "year_end":"2024",
                    "page_size":30
                }
            })
            setInf(response.data.collection.items);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getData = async () => {
            await APOD();
            Images();
        }
        getData();
    }, [])


    return (
        <div className="explore-main">
            <Transition />
            <ExpNav />
            <h1 style={{ height: "2.5rem", marginBottom: "20px",textDecoration:"underline",fontSize:"2.5rem" }}>Some Pictures of the Day</h1>
            <div className="picture-of-day">
                {pictures?.map((item, index) => (
                    <POD date={item.date} description={item.explanation} title={item.title} copyright={item.copyright} url={item.hdurl} key={index} />
                ))}
            </div>
            <div className="mars-container" tabIndex={0}>
                <figure>
                    <img src="https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/01306/ids/edr/browse/zcam/ZL0_1306_0782884607_098EBY_N0611394ZCAM09367_1100LMJ02_1200.jpg" alt="Mars" />
                </figure>
                <div>
                    <h1>Curious about Mars? Let's see what's there through images captured by various Mars rovers.</h1>
                    <p>Here are some of the pictures captured through NASA Mars rovers on their expedition to Mars.</p>
                </div>
            </div>
            <h1 style={{textDecoration:"underline",fontSize:"2.5rem",marginBottom:"20px"}}>Explore Photographs by NASA.</h1>
            <div className="scroll-container">
                {inf?.map((item,index) => (
                    <div className="con" key={index}>
                        <InfScr desc={item.data[0].description} url={item?.links[0].href} title={item.data[0].title} photographer={item.data[0].photographer} date={item.data[0].date_created}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Explore;