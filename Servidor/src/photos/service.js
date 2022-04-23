/*archivo encargado de realizar la logica de los datos*/
const axios = require("axios");
const { RequestService } = require("./request")

let Arreglo = []

//Funcion que retorna la foto segun el parametro enviado en la peticion GET
const DataPhotos = async(parametro) => {
    return Arreglo.find((photo) => photo.id.toString() === parametro)
}

/**
 * Funcion que se encarga de retornar el arreglo filtrado segun 
 * los parametros enviados
 */
const Filtering = async(req) => {

    /**
     * Se crea un diccionario y se le asigna el valor a cada clave de
     * los posibles filtros que se mencionan o solicitan.
     */
    let query = {
        "title": req["title"], //repudiandae iusto
        "album.title": req["album.title"], //quidem
        "album.user.email": req["album.user.email"], //"Sincere@april.biz"
        "limit": Number(req["limit"]), //default = 25
        "offset": Number(req["offset"]) //default = 0
    }

    /**
     * Se crea la variable arreglofiltrado y se le asiga el arreglo 
     * principal que es el que contiene toda la informacion.
     */
    let arreglofiltrado = Arreglo

    if (query["title"]) {
        arreglofiltrado = await TitlePhotos(query["title"])
    }
    if (query["album.title"]) {
        arreglofiltrado = await TitleAlbums(query["album.title"], arreglofiltrado)
    }
    if (query["album.user.email"]) {
        arreglofiltrado = await EmailUser(query["album.user.email"], arreglofiltrado)
    }
    if (query["limit"] & query["offset"]) {
        arreglofiltrado = await LimitArray(query["limit"], query["offset"], arreglofiltrado)
    } else {
        arreglofiltrado = await LimitArray(25, 0, arreglofiltrado)
    }

    return {arreglofiltrado}
}


/**
 * Funcion que retorna las fotos que coincidan con el parametro enviado
 * siendo este un filtro que incluya el titulo de la foto
 */
const TitlePhotos = async(parametro) => {
    return Arreglo.filter((photo) => photo.title.includes(parametro))
}

/**
 * Funcion que retorna las fotos que coincidan con el parametro enviado
 * siendo este un filtro que incluya el titulo del album
 */
const TitleAlbums = (parametro, arreglofiltrado) => {
    return arreglofiltrado.filter((item) => item.album.title.includes(parametro))
}

/**
 * Funcion que retorna las fotos que coincidan con el parametro enviado
 * siendo este un filtro que incluya el email del usuario
 */
const EmailUser = (parametro, arreglofiltrado) => {
    return arreglofiltrado.filter((item) => item.album.user.email.includes(parametro))
}

const LimitArray = (limit, offset, arreglofiltrado) => {
    let limitarray
    for (let i = 0; i <= limit; i++) {
        limitarray = arreglofiltrado.slice(offset, limit + offset)
    }
    return limitarray
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
    Filtering,
    ArregloPrincipal
}