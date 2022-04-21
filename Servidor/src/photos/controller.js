const { PhotoService } = require("./service")

module.exports.PhotosController = {
    getPhotos: async(req, res) => {
        try {
            let dataphotos = await PhotoService.DataPhotos(req.params.id)

            res.json({
                ...dataphotos
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" })
        }
    },

    getParams: async(req, res) => {
        try {
            let title = await PhotoService.Filtering(req.query)

            res.json({
                ...title
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" })
        }
    },
}