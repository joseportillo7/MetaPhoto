require("dotenv").config()

module.exports.Config = {
    port: process.env.PORT,
    api_photos: process.env.API_PHOTOS,
    api_albums: process.env.API_ALBUMS,
    api_users: process.env.API_USERS
}