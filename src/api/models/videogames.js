const mongoose = require("mongoose")

const gamesSchema = new mongoose.Schema(
    {
        gameName: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        category: {
            type: String,
            required: true,
            enum: [
                "adventures",
                "strategy",
                "sports",
                "simulators"
            ],
        },
        platforms: [{ type: mongoose.Types.ObjectId, ref: "platforms" }]
    },
    {
        timestamps: true,
        collection: "videogames"
    }
)

const Videogame = mongoose.model("videogames", gamesSchema, "videogames")
module.exports = Videogame