 const express = require("express")
 const { PhotosController } = require("./controller")

 const router = express.Router()

 module.exports.PhotosAPI = (app) => {
     router
         .get('/:id', PhotosController.getPhotos)
         .get('', PhotosController.getParams)

     app.use('/api/MetaPhoto/photos', router)
 }