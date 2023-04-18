const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
    title:{
      type: String,
      trim:true,
      required:true,
      unique: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Admin"
    }
},{timestamps:true})

const Notificaiton = mongoose.model("Notificaiton",notificationSchema)

module.exports = Notificaiton