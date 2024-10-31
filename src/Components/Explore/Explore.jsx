import React, { useEffect } from "react";
import Transition from "../Transition/Transition";
import ExpNav from "../ExpNav/ExpNav";
import "./Explore.css"
import Card from "../Card/Card";
import axios from "axios";

const Explore = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const key = import.meta.env.VITE_KEY

    const Fiction = async () => {
        try{
            const response = await axios.get(`${baseUrl}/lists/current/hardcover-fiction.json`,{
                params:{
                    'api-key': `${key}`
                }
            })
            console.log(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    const NonFiction = async () => {
        try{
            const response = await axios.get(`${baseUrl}/lists/current/hardcover-nonfiction.json`,{
                params: {
                    'api-key':`${key}`
                }
            })
            console.log(response);
        } catch(error) {
            console.error(error);
        }
    }

    const Manga = async () => {
        try{
            const response = await axios.get(`${baseUrl}/lists/current/manga.json`,{
                params:{
                    'api-key' : `${key}`
                }
            })
            console.log(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    const Series = async () => {
        try{
            const response = await axios.get(`${baseUrl}/lists/current/series-books`,{
                params:{
                    'api-key':`${key}`
                }
            })
            console.log(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    const Crime = async () => {
        try{
            const response = await axios.get(`${baseUrl}/lists/current/crime-and-punishment`,{
                params:{
                    'api-key':`${key}`
                }
            })
            console.log(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        Fiction();
        setTimeout(() => {
            NonFiction();
            setTimeout(() => {
                Manga();
                setTimeout(() => {
                    Series();
                    setTimeout(() => {
                        Crime();
                    },1000)
                },1000)
            },1000)
        },1000)
    },[])

    return(
        <div className="explore-main">
            <Transition />
            <ExpNav />
            <h1>This is the explore page.</h1>
            <Card />
        </div>
    )
}
export default Explore;