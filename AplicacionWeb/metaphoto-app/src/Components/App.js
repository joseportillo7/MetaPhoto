import React, { useState, useEffect } from "react";
import {Photos} from './Photos' 

export function App() {

 const [info, setInfo] = useState([]);

    /**
     * Agregando funcion fetch para realizar la peticion a la
     * API expuesta de MetaPhoto
     */
    const peticionPhotos = () =>{
        fetch("http://localhost:5000/api/MetaPhoto/photos?album.title=quidem")        
        .then( response => response.json())
        .then( data => {            
            setInfo(data.arreglofiltrado)           
        })
        .catch( error => console.log(error))   
    }
    
    useEffect(() => {
      peticionPhotos()               
    }, [])
    
    return (
        <>
        <div className="container mt-5" >
            <Photos  photos = {info} / >
        </div>
        </>
    );
}