 const express = require("express")
 const { PhotosController } = require("./controller")

 const router = express.Router()

 module.exports.PhotosAPI = (app) => {
     router
         .get('/:id', PhotosController.getPhotos)

     app.use('/api/MetaPhoto/photos', router)
 }