/**
 * archivo encargado de realizar la logica de los datos
 * y realizar las peticiones a las API's expuestas, con esta libreria axios
 * simulo un cliente dentre de mi backend y puedo realizar peticiones HTTP
 */
const axios = require("axios");
const { Config } = require("../config")


const DataPhotos = async() => {

    let responsephoto = await axios.get(Config.api_photos);
    let { data } = responsephoto;

    return data
}

const DataAlbums = async() => {
    let response = await axios.get(Config.api_albums);
    let { data } = response;

    return data
}

const DataUsers = async() => {
    let response = await axios.get(Config.api_users);
    let { data } = response;

    return data
}

module.exports.RequestService = {
    DataPhotos,
    DataAlbums,
    DataUsers
}