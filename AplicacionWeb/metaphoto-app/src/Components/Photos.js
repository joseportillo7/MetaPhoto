import React from 'react'

const Photos = ({photos}) => {
  return (
    <div className="row">
        {
            photos.map((photo, clave) => (
                <div key={clave} className="col">            
                    <div className="card" style={{minWidth: "20px"}}>
                        <img src={photo.url} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{photo.title}</h5>
                            {/*<hr/>
                            <p>Album: {photo.album.title}</p>                            
            <p>Usuario: {photo.user.name}</p>*/}
                        </div>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Photos