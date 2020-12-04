import React from 'react';

const Card = ({confirmed, recovered, deaths}) =>{
    return (
        <div className="card-container">
            <p>confirmed:{confirmed}</p>
            <p>recovered:{recovered}</p>
            <p>deaths:{deaths}</p>
        </div>
    );
};

export default Card;
