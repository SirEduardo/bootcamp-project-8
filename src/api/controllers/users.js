const { generateToken } = require("../../utils/token")
const User = require("../models/users")
const bcrypt = require("bcrypt")

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(404).json("Usuarios no encontrados")
    }
}

const registerUser = async (req, res, next) => {
    try {
        const newUser = new User({
            userName: req.body.userName,
            password: req.body.password,
            rol: "user"
        })
        const userExist = await User.findOne({userName: req.body.userName})
        if(userExist){
            return res.status(400).json("Este usuario ya existe")
        }
        const userSaved = await newUser.save()
        return res.status(201).json(userSaved)
    } catch (error) {
        return res.status(400).json("Error al registrar al usuario")
    }
}

const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({userName: req.body.userName})
        if(!user){
            return res.status(400).json("Usuario o contraseña incorrectos")
        }
        if (bcrypt.compareSync(req.body.password, user.password)){
            const token = generateToken(user._id)
            return res.status(200).json({ user, token })
        }else{
            return res.status(400).json("Usuario o contraseña incorrectos")
        }
    } catch (error) {
        return res.status(400).json("Error en el login")
    }
}

const deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        return res.status(200).json(deletedUser)
    } catch (error) {
        return res.status(400).json("Error al eliminar al usuario")
    }
}

const updateUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const newUser = new User({
            rol: req.body.rol
        })
        newUser._id = id
        const userUpdated = await User.findByIdAndUpdate(id, newUser, { new: true })
        return res.status(200).json(userUpdated)
    } catch (error) {
        return res.status(400).json("Error al actualizar al usuario")
    }    
}


module.exports = { getUsers, registerUser, loginUser, deleteUser, updateUser }