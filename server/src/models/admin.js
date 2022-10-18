const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    tokens:{
        type:String
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


adminSchema.statics.findByCredentials = async (email, password) => {
    const user = await Admin.findOne({
        email
    })
    if (!user) throw new Error('Email or  password is incorrect')
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if (!isMatch) throw new Error('Email or password is incorrect')
    return user
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
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
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


const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin