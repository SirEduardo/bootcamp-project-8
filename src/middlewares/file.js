const multer = require("multer")
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const Storage = (folder) => {
 return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: folder,
        allowedFormats: ["jpg", "png", "jpeg", "gif"]
    }
})
}

const uploadVideogames = multer({ storage: Storage("videojuegos") })
const uploadPlatforms = multer({ storage: Storage("plataformas") })

module.exports = { uploadVideogames, uploadPlatforms }