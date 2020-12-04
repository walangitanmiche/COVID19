import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./index";

const Global = () =>{
    const[con, setCon] = useState([])
    const[rec, setRec] = useState([])
    const[det, setDet] = useState([])

    useEffect(() => {
        axios
         .get("https://covid19.mathdro.id/api")
         .then((response) => {
             setCon(response.data.confirmed.value)
             setRec(response.data.recovered.value)
             setDet(response.data.deaths.value)
         });
    }, []);
  
    return (
        <div>
        <p>confirmed: {con}</p>
        <p>recovered: {rec}</p>
        <p>deaths: {det}</p>
    </div>
            );
};

export default Global;
