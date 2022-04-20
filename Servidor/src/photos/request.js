/**
 * archivo encargado de realizar la logica de los datos
 * y realizar las peticiones a las API's expuestas
 */
const axios = require("axios");

const DataPhotos = async() => {

    let responsephoto = await axios.get("https://jsonplaceholder.typicode.com/photos");
    let { data } = responsephoto;

    return data
}

const DataAlbums = async() => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    let { data } = response;

    return data
}

const DataUsers = async() => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    let { data } = response;

    return data
}

module.exports.RequestService = {
    DataPhotos,
    DataAlbums,
    DataUsers
}