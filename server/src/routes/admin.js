const express = require('express')
const User = require('../models/test')
const router = new express.Router()
const {trainErrorHandler} = require('../middleware/error')
const { signupHandler, loginHandler } = require('../controllers/admin')

router.post('/signup',signupHandler)
router.post('/login',loginHandler)

module.exports = router