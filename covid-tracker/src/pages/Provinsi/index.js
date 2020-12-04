import React, {useEffect, useState} from 'react';
import axios from "axios";
import NumberFormat from "react-number-format";

const Provinsi = () =>{
    const[users,setUsers] = useState([])
    

    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
         .then((response) =>  setUsers(response.data.data) );
    }, []);
   return(
       <div className="center">
           <table border="1">
               <tr>
                   <td>
                       Provinsi
                   </td>
                   <td>
                       Positif
                   </td>
                   <td>
                       Sembuh
                   </td>
                   <td>
                        Meninggal
                   </td>
               </tr>
               {users.map((item)=>{
                   return(
                       <tr>
                           <td>
                               {item.provinsi}
                           </td>
                           <td>
                           {item.kasusPosi}
                           </td>
                           <td>
                               {item.kasusSemb}
                           </td>
                           <td>
                               {item.kasusMeni}
                           </td>
                       </tr>
                   )
               })
               }
           </table>
       </div>
   )
};

export default Provinsi;
