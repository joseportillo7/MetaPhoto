/*archivo encargado de realizar la logica de los datos*/

const axios = require("axios");


const DataPhotos = async() => {

    //En esta parte simularemos un cliente para que vaya a realizar la peticion http a la url indicada con el metodo get
    let response = await axios.get("https://jsonplaceholder.typicode.com/photos");

    /**
     * luego almacenamos esta informacion dentro de la siguiente variable "data" que es la que almacena 
     * la informacion que necesitamos, por esa razon se hace una destructuracion
     */
    let { data } = response;

    //se hara el recorrido
    //let recorrido = data.map((item) => item)
    return data
}

module.exports.PhotoService = {
    DataPhotos
}