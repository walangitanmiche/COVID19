import React, {useEffect, useState} from 'react';
import axios from "axios";

const Indonesia = () =>{
    const[jum, setJum] = useState([])
    const[sembuh, setSembuh] = useState([])
    const[men, setMen] = useState([])

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) => {
            setJum(response.data.jumlahKasus)
            setSembuh(response.data.sembuh)
            setMen(response.data.meninggal)
        });
    }, []);

            return (
                <div className="card">
        
                
            <h1 className ="card-container">
            <p>Confirmed : {jum}</p>
            </h1>
            <h1 className ="card1-container">
               <p>Recovery : {sembuh}</p>
            </h1>
            
            <h1 className ="card2-container">
            <p>Deaths : {men}</p>
            </h1>
    </div>
            );
            
};


export default Indonesia;
