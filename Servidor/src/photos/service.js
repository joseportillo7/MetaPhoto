/*archivo encargado de realizar la logica de los datos*/
const axios = require("axios");
const { RequestService } = require("./request")

let Arreglo = []

//Funcion que retorna la foto segun el parametro enviado en la peticion GET
const DataPhotos = async(parametro) => {
    return Arreglo.find((photo) => photo.id.toString() === parametro)
}

//Funcion que retorna los titulos que coincidan con el parametro enviado
const TitlePhotos = async(parametro) => {
    return Arreglo.filter((photo) => photo.title.includes(parametro))
}

const TitleAlbumPhotos = async(parametro) => {
        console.log("si entre");
        return Arreglo.filter((photo) => photo.album.title.includes(parametro))
    }
    /**
     * Funcion que se encarga de alimentar el arreglo para poder realizar las peticiones directamente
     * a dicho arreglo y no tener que consultar las API expuestas en cada peticion realizada
     * esto redujo el tiempo de respuesta en las peticiones realizadas.
     */
const ArregloPrincipal = async() => {
    try {
        let dataphotos = await RequestService.DataPhotos() //trae las 5000 photos
        let dataalbums = await RequestService.DataAlbums() //trae los 100 albums
        let datausers = await RequestService.DataUsers() //trae los 10 usuers  

        /**
         * Se realiza los recorridos para buscar la informacion
         * y asi unificarlos en un unico arreglo.
         */
        dataphotos.forEach(photo => {
            dataalbums.forEach(album => {
                datausers.forEach(user => {
                    if (photo.albumId === album.id) {
                        if (album.userId === user.id) {
                            Arreglo.push({
                                "id": photo.id,
                                "title": photo.title,
                                "url": photo.url,
                                "thumbnailUrl": photo.thumbnailUrl,
                                "album": {
                                    "id": album.id,
                                    "title": album.title,
                                    "user": {
                                        ...user
                                    }
                                }
                            })
                        }
                    }
                })
            })
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports.PhotoService = {
    DataPhotos,
    TitlePhotos,
    TitleAlbumPhotos,
    ArregloPrincipal
}