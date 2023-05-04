const mongoose = require("mongoose")


const trashSchema = new mongoose.Schema({
    collection:{
        type: String,
    },
    object: {
        type : mongoose.Schema.Types.Mixed
    }
},{timestamps: true})

const trash = mongoose.model("trash",trashSchema)