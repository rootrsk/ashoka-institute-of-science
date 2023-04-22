const { Schema, model, SchemaTypes }  = require('mongoose')

const batchSchema = new Schema({
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
    start_time:{
        type: String,
        default:false,
    },
    end_time:{
        type: String,
        default:false,
    },
    start_date:{
        type: Date,
    },
    end_date:{
        type: Date,
    },
    monthly_fee:{
        type: Number,
    },

    updated_by:{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    },
    teachers:[{
        type: Schema.Types.ObjectId,
        ref:"Teacher"
    }],
    subjects:[{
        type: Schema.Types.ObjectId,
        ref:"Subject"
    }]
},{timestamps:true})

const Batch = model('Batch',batchSchema)

module.exports = Batch