import React from 'react'
import { PhotoCard } from './PhotoCard'

export const Photos = ({photos}) => {
  return (
    <div className="container mt-5">
        <div className="row">
        {
            photos.map((photo) => (
               <PhotoCard key={photo.id} photo= {photo}/> 
            ))
        }        
    </div>
    </div>    
  )
}