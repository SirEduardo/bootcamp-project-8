const upload = require("../../middlewares/file")
const { isAuth } = require("../../middlewares/auth.middleware")
const { getPlatform, postPlatform, deletePlatform, updatePlatform } = require("../controllers/platforms")

const platformRoutes = require("express").Router()

platformRoutes.get("/", getPlatform)
platformRoutes.post("/", upload.single("img"), [isAuth], postPlatform)
platformRoutes.delete("/:id", [isAuth], deletePlatform)
platformRoutes.put("/:id", upload.single("img"), [isAuth], updatePlatform)

module.exports = platformRoutes