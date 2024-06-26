
const { isAuth } = require("../../middlewares/auth.middleware")
const { uploadVideogames } = require("../../middlewares/file")
const { getVideogames, postVideogame, deleteVideogame, updateVideogame } = require("../controllers/videogames")

const videogamesRoutes = require("express").Router()

videogamesRoutes.get("/", getVideogames)
videogamesRoutes.post("/", uploadVideogames.single("img"), [isAuth], postVideogame)
videogamesRoutes.delete("/:id", [isAuth], deleteVideogame)
videogamesRoutes.put("/:id", uploadVideogames.single("img"), [isAuth], updateVideogame)

module.exports =  videogamesRoutes 