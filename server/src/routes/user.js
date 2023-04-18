const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const userAuth = require('../middleware/userAuth')

const { 
    loginHandler, 
    signupHandler,
    getNotification,
    updateNotification,
    createNotification,
    deleteNotification,

    getSubject,
    createSubject,
    updateSubject,
    deleteSubject,

    getTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getOptionData,

    getBatch,
    createBatch,
    updateBatch,
    deleteBatch,
} = require('../controllers/user')



router.post("/login",loginHandler)
router.post("/signup",signupHandler)


router.get('/',(req,res)=>{
    res.send({
        message: 'success',
        data: {
            welcome: 'Welcome to Bhushan Train Api',
            headers :req.useragent
        }
    })
})

router.post('/signup',async(req,res)=>{    
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            contact_no: req.body.contact,
            password: req.body.password
        })
        await user.save()
        const token = user.genAuthToken()
        
        user.tokens = user.tokens.concat({
            token: token,
            browser: req.useragent.browser,
            device: req.useragent.os
        })
        let options = {
            // maxAge: 1000*60*60, // would expire after 30 seconds
            httpOnly: false, // The cookie only accessible by the web server
            signed: false // Indicates if the cookie should be signed
        }
        res.cookie('auth_token', token, options)
        res.send({
            message: 'success',
            data: user,
            token,
            cookies: req.cookies
        })
    } catch (e) {
        console.log(e)
        const error = userErrorHandler(e.message)
        res.send({
            message: 'failed',
            error
        })
    }
})

router.post('/login',async(req,res)=>{

    try {
        console.log(req.headers.authorization)
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = user.genAuthToken()
        user.tokens = user.tokens.concat({
            token: token,
            browser: req.useragent.browser,
            device: req.useragent.os
        })
        
        let options = {
            // maxAge: 1000*60*60, // would expire after 30 seconds
            httpOnly: false, // The cookie only accessible by the web server
            signed: false // Indicates if the cookie should be signed
        }
        res.cookie('auth_token',token,options)
        res.send({
            message:'success',
            data:user,
            token,
        })
    } catch (e) {
        res.send({
            message: 'failed',
            error: e.message
        })
    }
})

router.get('/user/me',userAuth,async(req,res)=>{
    res.json({
        message: 'success',
        data:{
            user: req.user,
            isAutheticated: true
        }
    })
})

router.get('/user/profile',userAuth,async(req,res)=>{
    try {
        const profile = await User.findById(req.user._id)
        res.json({
            message: 'success',
            profile
        })
    } catch (e) {
        console.log(e)
        res.json({
            message: 'failed',
            error: e.message
        })
    }
})

module.exports = router