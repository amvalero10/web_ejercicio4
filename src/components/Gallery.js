import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import './Gallery.css';



function Gallery(){

    let [rickImg, setRickImg] = useState(null)
  
    useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json() )
        //.then( data => console.log(data.results) )
        .then( data => setRickImg(data.results) )
    },
    [])


    return(
        <div className="container" >

        {rickImg && rickImg.map( (element) => (
            <Card
                image = {element.image}
                name = {element.name}
                gender = {element.gender}
                status = {element.status}
            />
        ))}

        </div>

    );
}

export default Gallery