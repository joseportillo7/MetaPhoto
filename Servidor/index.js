const express = require('express')
const { Config } = require("./src/config")
const { PhotosAPI } = require("./src/photos")
const { PhotoService } = require("./src/photos/service")

const app = express()

app.use(express.json())

PhotosAPI(app)

/**
 * Se realiza la ejecucion de la funcion, esto con el fin
 * de poder alimentar el arreglo y que se consulten las API's expuestas
 */
PhotoService.ArregloPrincipal() //buscar como ejecutarse cada cierto tiempo


app.listen(Config.port, () => {
    console.log(`Servidor escuchando en el puerto en http://localhost:${Config.port}`);
})