const upload = require("../../middlewares/file")
const { isAuth } = require("../../middlewares/auth.middleware")
const { getVideogames, postVideogame, deleteVideogame, updateVideogame } = require("../controllers/videogames")

const videogamesRoutes = require("express").Router()

videogamesRoutes.get("/", getVideogames)
videogamesRoutes.post("/", upload.single("img"), [isAuth], postVideogame)
videogamesRoutes.delete("/:id", [isAuth], deleteVideogame)
videogamesRoutes.put("/:id", upload.single("img"), [isAuth], updateVideogame)

module.exports =  videogamesRoutes 