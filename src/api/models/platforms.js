const mongoose = require("mongoose")

const platformSchema = new mongoose.Schema(
    {
        platform: 
        { 
            type: String, 
            required: true,
            enum: [
            "ps5",
            "ps4",
            "xbox",
            "nintendo",
            "pc"
            ], 
        },
        img: { type: String, required: true },
        videogames: [{ type: mongoose.Types.ObjectId, ref: "videogames" }]
 
    },
    {
        timestamps: true,
        collection: "platforms"
    }
)

const Platform = mongoose.model("platforms", platformSchema, "platforms")
module.exports = Platform