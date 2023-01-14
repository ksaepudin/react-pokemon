import React, { useEffect, useState } from "react";
import Crad from "./card";
import PokeInfo from "./pokeinfo";
import axios from "axios";

const Main = () => {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const pokeFunc=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        console.log(res)
    }
    useEffect(()=>{
        pokeFunc();
    },[url])
    return (<>
        <div className="content">
            <div className="left-content">
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
                <Crad/>
            </div>
            <div className="right-content">
                <PokeInfo/>
            </div>
        </div>
    </>)
}

export default Main;