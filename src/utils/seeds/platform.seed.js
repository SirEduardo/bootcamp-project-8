const mongoose = require("mongoose")
const Platform = require("../../api/models/platforms")
const platforms = require("../../data/platforms")

const platformSeed = async (req, res, next) => {
    try {
        await mongoose.connect("mongodb+srv://eduardosaanchezlopez:sBBp1j22H1nEVDHb@videojuegos.nvpl1rr.mongodb.net/?retryWrites=true&w=majority&appName=Videojuegos")
        await Platform.collection.drop()
        console.log("Plataformas eliminadas");

        await platforms.insertMany(platforms)
        console.log("Plataformas introducidas");

        await mongoose.disconnect()
    } catch (error) {
        console.log("Error");
    }
}

platformSeed()