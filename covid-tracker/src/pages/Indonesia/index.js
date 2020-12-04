import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountUp from "react-countup";

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
                <div className="center">
        
        <div className="card-container">
             <h1>Confirmed
                <p><CountUp start={0} end={jum} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>

            <div className="card2-container">
             <h1>Recovery
                <p><CountUp start={0} end={sembuh} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>

                     <div className="card1-container">
             <h1>Deaths
                <p><CountUp start={0} end={men} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
     </div>

    
            );
            
};


export default Indonesia;
