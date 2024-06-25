const platformRoutes = require("./plaforms")
const userRoutes = require("./users")
const videogamesRoutes = require("./videogames")

const mainRouter = require("express").Router()

mainRouter.use("/videogames", videogamesRoutes)
mainRouter.use("/platforms", platformRoutes)
mainRouter.use("/users", userRoutes)

module.exports = mainRouter