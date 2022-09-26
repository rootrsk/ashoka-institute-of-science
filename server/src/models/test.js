const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:String,
    fname:String,
    mname:String,
    roll: Number,
    hindi:{
        subject: String,
        marks: Number
    },
    sanskrit: {
        subject: String,
        marks: Number
    },
    math: {
        subject: String,
        marks: Number,
    },
    science: {
        subject: String,
        pr: Number,
        tm: Number
    },
    social_science: {
        subject: String,
        pr: Number,
        tm: Number
    },
    english: {
        subject: String,
        marks: Number,
    },
})

const Student = mongoose.model('Student', userSchema)

module.exports = Student