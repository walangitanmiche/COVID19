import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from '../Card/Card';

const Provinsi = () =>{
    const[users,setUsers] = useState([])
    

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
         .then((response) =>  setUsers(response.data.data) );
    }, []);
   return(
       <>
       {users.map((item)=>{
           return(
               <Card
                provinsi={item.provinsi}
                kasusPositif={item.kasusPosi}
                kasusSembuh={item.kasusSemb}
                meninggal={item.kasusMeni}
               />
           );
       }
       )}
       
       </>
   )
};

export default Provinsi;
