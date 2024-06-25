const upload = require("../../middlewares/file")
const { getPlatform, postPlatform, deletePlatform, updatePlatform } = require("../controllers/platforms")

const platformRoutes = require("express").Router()

platformRoutes.get("/", getPlatform)
platformRoutes.post("/", upload.single("img"), postPlatform)
platformRoutes.delete("/:id", deletePlatform)
platformRoutes.put("/:id", upload.single("img"), updatePlatform)

module.exports = platformRoutes