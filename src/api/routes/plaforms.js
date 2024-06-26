
const { isAuth } = require("../../middlewares/auth.middleware")
const { uploadPlatforms } = require("../../middlewares/file")
const { getPlatform, postPlatform, deletePlatform, updatePlatform } = require("../controllers/platforms")

const platformRoutes = require("express").Router()

platformRoutes.get("/", getPlatform)
platformRoutes.post("/", uploadPlatforms.single("img"), [isAuth], postPlatform)
platformRoutes.delete("/:id", [isAuth], deletePlatform)
platformRoutes.put("/:id", uploadPlatforms.single("img"), [isAuth], updatePlatform)

module.exports = platformRoutes