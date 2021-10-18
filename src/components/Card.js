import React from 'react';


export const Card = (props) => {

    const {image,name,gender,status} = props;

    return (
        <>
            <div className='card'>
                <img className='card-image' src={image} alt={name} />
                <h3>{name}</h3>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
            </div>
        </>
    );


};