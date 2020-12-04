import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountUp from "react-countup";


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
    <div className="center">
        
        <div className="card-container">
             <h1>Confirmed
                <p><CountUp start={0} end={con} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
                     <div className="card2-container">
             <h1>Recovery
                <p><CountUp start={0} end={rec} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
                     <div className="card1-container">
             <h1>Deaths
                <p><CountUp start={0} end={det} delay={1.5} separator=",">
                     {({ countUpRef }) => (<span ref={countUpRef} />)} 
                     </CountUp> </p></h1>
                     </div>
    </div>
        
    
            );
};

export default Global;
