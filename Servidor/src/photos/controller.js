const { PhotoService } = require("./service")
const { AlbumService } = require("../albums/service")
const { UserService } = require("../users/service")

module.exports.PhotosController = {
    getPhotos: async(req, res) => {
        try {
            let photos = await PhotoService.DataPhotos(req.params.id)
            let albums = await AlbumService.DataAlbums(req.params.id)
            let users = await UserService.DataUsers(req.params.id)
            res.json({
                photos,
                albums,
                users
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" })
        }
    }
}