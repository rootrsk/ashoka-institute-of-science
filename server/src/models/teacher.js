const { Schema, model, SchemaTypes }  = require('mongoose')

const teacherSchema = new Schema({
    full_name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        unique: true,
        required:true,
    },
    degree: {
        type: String,
        required: true,
        default: "B.tech in Computer Science"                      
    },
    experience: {
        type: Number,
        required: true,
        default: 1,                      
    },
    contact: {
        type: String,
        required: true,                      
    },
    description: {
        type: String,
        required: true,  
        default: "Computer Specialist for class 11th-12th"                    
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    },
    facebook_id :{
        type: String,
        default: "100009661783552"
    },
    insta_id :{
        type: String,
        default: "rootrsk"
    }
},{timestamps:true})

const Teacher = model('Teacher',teacherSchema)

module.exports = Teacher
