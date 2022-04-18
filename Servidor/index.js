const express = require('express')
const { Config } = require("./src/config")
const { PhotosAPI } = require("./src/photos")

const app = express()

app.use(express.json())

PhotosAPI(app)

app.listen(Config.port, () => {
    console.log(`Servidor escuchando en el puerto en http://localhost:${Config.port}`);
})