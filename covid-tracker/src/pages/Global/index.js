import React, {useEffect, useState} from 'react';
import axios from "axios";


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
    <div className="card">
        
            <h1 className ="card-container">
               <p>Confirmed : {con}</p>
            </h1>
            <h1 className ="card1-container">
                <p>Recovery : {rec}</p>
            </h1>
            <h1 className ="card2-container">
                <p>Deaths : {det}</p>
            </h1>
    </div>
        
    
            );
};

export default Global;
