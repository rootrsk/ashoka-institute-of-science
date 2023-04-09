const { Schema, model }  = require('mongoose')

const subjectSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true,
        unique: true,
    },
    type:{
        type:String,
        enum:['Compulsory','Additional','Optional']
    },
    has_pratical:{
        type: Boolean,
        default:false,
        required:true
    },
    full_marks:{
        type:Number,
        default: 100,
        required:true
    },
    pratical_marks:{
        type: Number
    },
    theory_marks:{
        type: Number
    },
    exam_id:{
        type: String,
        ref:'Exam',
        required:true
    },
    user_id:{
        type:String,
        ref:'User',
        required:true,
    }
})

const Subject = model('Subject',subjectSchema)

module.exports = Subject
