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
    updated_by:{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    }
},{timestamps:true})

const Teacher = model('Teacher',teacherSchema)

module.exports = Teacher
