const axios = require("axios");
const { PhotoService } = require("./service")

module.exports.PhotosController = {
    getPhotos: async(req, res) => {
        try {
            let photos = await PhotoService.DataPhotos()
            res.json(photos)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}