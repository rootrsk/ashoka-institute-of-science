const mongoose = require('mongoose')

const examSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    standard:{
        type: String,
        enum:['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','All']
    },
    stream:{
        type:String,
        enum:['Science','Commerce','Arts',null,'None']
    },
    status:{
        type: String,
        enum:['publish','upcoming','hidden'],
        default: false
    },
    publish_time:{
        type: Date
    }
})

const Exam = mongoose.model('Exam',examSchema)