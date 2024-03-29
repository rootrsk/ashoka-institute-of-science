const { Schema, model, SchemaTypes }  = require('mongoose')

const subjectSchema = new Schema({
    title:{
        type: String,
        required:true,
        unique: true,
    },
    type:{
        type:String,
        enum:['Compulsory','Additional','Optional'],
        default:'Compulsory'
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
    pass_marks:{
        type:Number,
        default: 30,
        required:true
    },
    pratical_marks:{
        type: Number,
        default: 0
    },
    theory_marks:{
        type: Number,
        defalult: 100,
    },
    standard:{
        type: String,
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    }
},{timestamps:true})

const Subject = model('Subject',subjectSchema)

module.exports = Subject
