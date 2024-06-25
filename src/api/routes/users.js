const { isAuth } = require("../../middlewares/auth.middleware")
const { getUsers, registerUser, loginUser, deleteUser, updateUser } = require("../controllers/users")

const userRoutes = require("express").Router()

userRoutes.get("/", [isAuth], getUsers)
userRoutes.post("/register", registerUser)
userRoutes.post("/login", loginUser)
userRoutes.delete("/:id", [isAuth],deleteUser)
userRoutes.put("/:id", [isAuth],updateUser)


module.exports = userRoutes