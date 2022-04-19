/*archivo encargado de realizar la logica de los datos*/
const axios = require("axios");

const DataPhotos = async(parametro) => {

    //En esta parte simularemos un cliente para que vaya a realizar la peticion http a la url indicada con el metodo get
    let responsephoto = await axios.get("https://jsonplaceholder.typicode.com/photos");
    /**
     * luego almacenamos esta informacion dentro de la siguiente variable "data" que es la que almacena 
     * la informacion que necesitamos, por esa razon se hace una destructuracion
     */
    let { data: dataphoto } = responsephoto;

    //se hara el recorrido en el que por cada foto me topare con un id de album que este a su vez deberia traerme la info de un usuario    
    let photos = dataphoto.filter((photo) => {

        if (photo.id == parametro) {
            return photo
        }
    })
    return photos
}

module.exports.PhotoService = {
    DataPhotos
}