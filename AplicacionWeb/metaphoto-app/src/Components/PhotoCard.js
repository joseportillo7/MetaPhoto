import React from "react";

export const PhotoCard = ({ photo }) => {
  return (
    <div className="col mb-5">
      <div className="card">
        <img 
        width= {300}
        height={300}        
        src={photo.url} alt={photo.title} 
        />
        <div className="card-body">
          <h2 className="card-title">{photo.title}</h2>
          <hr />
          <p>Album: {photo.album.title}</p>
          <p>User: {photo.album.user.name}</p>
        </div>
      </div>
    </div>
  );
};
