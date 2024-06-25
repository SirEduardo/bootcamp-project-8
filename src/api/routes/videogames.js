const upload = require("../../middlewares/file")
const { getVideogames, postVideogame, deleteVideogame, updateVideogame } = require("../controllers/videogames")

const videogamesRoutes = require("express").Router()

videogamesRoutes.get("/", getVideogames)
videogamesRoutes.post("/", upload.single("img"), postVideogame)
videogamesRoutes.delete("/:id", deleteVideogame)
videogamesRoutes.put("/:id", upload.single("img"), updateVideogame)

module.exports =  videogamesRoutes 