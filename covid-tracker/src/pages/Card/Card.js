import React from 'react';

const Card = ({provinsi, kasusPositif, kasusSembuh, meninggal}) =>{
    return (
        <div className="card-container">
            <p>Provinsi : {provinsi}</p>
            <p>Kasus Positif : {kasusPositif}</p>
            <p>Kasus Sembuh : {kasusSembuh}</p>
            <p>Meninggal : {meninggal}</p>
        </div>
    )
}

export default Card;
