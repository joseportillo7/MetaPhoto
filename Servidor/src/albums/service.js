const axios = require("axios")

const DataAlbums = async(idalbum) => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    let { data } = response;

    let albums = data.filter((album) => {
        if (idalbum == album.id) {
            console.log("estoy en el if del service");
            return album
        }
    })
    return albums
}

module.exports.AlbumService = {
    DataAlbums
}