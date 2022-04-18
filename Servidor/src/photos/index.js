const express = require("express")
const Services = require("./service")

const router = express.Router()

module.exports.PhotosAPI = (app) => {
    router
        .get('/1', (req, res) => {
            res.json({
                message: 'Hello MetaPhoto application',
                body: Services.getPhotos()
            })
        })
        .get('/:id', (req, res) => {})

    app.use('/api/photos', router)
}