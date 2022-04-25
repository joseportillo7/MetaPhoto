import React from "react";

export const PhotoCard = ({ photo }) => {
  return (
    <div className="col mb-5">
      <div className="card">
        <img 
        width= {350}
        height={300}        
        src={photo.url} alt={photo.title} 
        />
        <div className="card-body">
          <h5 className="card-title">{photo.id +" - "+ photo.title}</h5>          
          <p>Album: {photo.album.title}</p>
          <p>User: {photo.album.user.name}</p>
          <p>Email: {photo.album.user.email}</p>
        </div>
      </div>
    </div>
  );
};
