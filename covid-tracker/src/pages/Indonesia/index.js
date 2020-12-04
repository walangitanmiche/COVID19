import React, {useEffect, useState} from 'react';
import axios from "axios";

const Indonesia = () =>{
    const[jum, setJum] = useState([])
    const[sembuh, setSembuh] = useState([])
    const[per, setPer] = useState([])
    const[men, setMen] = useState([])

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) => {
            setJum(response.data.jumlahKasus)
            setSembuh(response.data.sembuh)
            setPer(response.data.perawatan)
            setMen(response.data.meninggal)
        });
    }, []);

            return (
                <div>
        <p>Jumlah Kasus: {jum}</p>
        <p>Sembuh: {sembuh}</p>
        <p>Perawatan: {per}</p>
        <p>Meninggal: {men}</p>
    </div>
            );
            
};


export default Indonesia;
