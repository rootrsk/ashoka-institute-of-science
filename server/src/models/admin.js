const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:4,
        maxlength:20
    },
    fullname:{
        type:String,
        required:true,
        minlength: 4,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
    },
    contact_no: {
        type: Number,
        minlength:10,
        maxlength: 13,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength:5,
        maxlength:20
    },
    verified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: Number
    },
}, {
    timestamps: true
})


adminSchema.statics.findByCredentials = async (username, password) => {
    let user = await Admin.findOne({email:username})
    if(!user) user = await Admin.findOne({username:username})
    if (!user) return {user:null, error:'Email or password is incorrect'}
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return {user:null, error:'Email or password is incorrect'}
    return {user,error:null}
}
adminSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}
adminSchema.methods.genAuthToken =  function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString(),purpose:'authentication'}, process.env.JWT_SECRET)
    return token
}
adminSchema.methods.emailVerificationToken = async function () {
    const user = this
    const token = jwt.sign({
        _id: user._id.toString()
    }, process.env.JWT_SECRET)
    return token
}
adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})
const Admin = mongoose.model('Admin',adminSchema)
module.exports = Admin
