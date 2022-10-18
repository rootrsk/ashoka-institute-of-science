const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type:String
    }
})

const Notification = mongoose.model('Notification',notificationSchema)

module.exports = Notification