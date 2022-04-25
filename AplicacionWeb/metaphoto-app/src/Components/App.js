import React, { useState, useEffect } from "react";
import { Photos } from "./Photos";
import { Title } from "./Title";

export function App() {
  const [info, setInfo] = useState([]);
  const [idphoto, setIdPhoto] = useState("");
  const [titlephoto, setTitlePhoto] = useState("");
  const [titlealbum, setTitleAlbum] = useState("");
  const [emailUser, setEmail] = useState("");
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);

  /**
   * Agregando funcion fetch para realizar la peticion a la
   * API expuesta de MetaPhoto
   */
  const peticionPhotos = (    
    idphoto,
    titlePhoto,
    titleAlbum,
    email,
    limit,
    offset
  ) => {
    let url = `http://localhost:5000/api/MetaPhoto/photos?${titlePhoto}${titleAlbum}${email}${limit}${offset}`          
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.arreglofiltrado);
      })
      .catch((error) => console.log(error));              
  };

  useEffect(() => {
    const dataphoto = idphoto ? `/${idphoto}` : "";
    const dataTitlePhoto = titlephoto ? `title=${titlephoto}&` : "";
    const dataTitleAlbum = titlealbum ? `album.title=${titlealbum}&` : "";
    const dataemail = emailUser ? `album.user.email=${emailUser}&` : "";
    const datalimit = limit ? `limit=${limit}&` : "";
    const dataoffset = offset ? `offset=${offset}&` : "";

    peticionPhotos(
      dataphoto,
      dataTitlePhoto,
      dataTitleAlbum,
      dataemail,
      datalimit,
      dataoffset      
    );
  }, [idphoto,titlephoto, titlealbum, emailUser, limit, offset]);

  return (
    <>
      <Title />
      <nav className="navbar">
        <div className="container">
          <input
            name="IdPhoto"
            placeholder="Buscar id de foto"
            onChange={(e) => setIdPhoto(e.target.value)}
          />
          <input
            name="TitlePhoto"
            placeholder="Buscar por titulo de foto"
            onChange={(e) => setTitlePhoto(e.target.value)}
          />
          <input
            name="TitleAlbum"
            placeholder="Buscar por titulo de album"
            onChange={(e) => setTitleAlbum(e.target.value)}
          />
          <input
            name="Email"
            placeholder="Buscar por email de usuario"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="Limit"
            placeholder="Colocar valor limite"
            onChange={(e) => setLimit(e.target.value)}
          />
          <input
            name="Offset"
            placeholder="Colocar valor offset"
            onChange={(e) => setOffset(e.target.value)}
          />
        </div>
      </nav>
      {info.length > 0 ? (
        <Photos photos={info} />
      ) : (
        <div className="container">
          NO SE ENCONTRO NINGUN VALOR RELACIONADO AL FILTRO INDICADO
        </div>
      )}
    </>
  );
}
