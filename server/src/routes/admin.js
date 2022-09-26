const express = require('express')
const User = require('../models/test')
const router = new express.Router()
const {trainErrorHandler} = require('../middleware/error')

// Get All user 
router.get('/admin/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.json({
            message: 'success',
            data: users
        })
    } catch (e) {
        res.json({
            message: 'error',
            error: 'Something went wrong.'
        })
    }
})
router.post('/user/create',async(req,res)=>{
    console.log(req.body)
    try {
        const user = new User(req.body)
        console.log(user)
        await user.save()
        res.json({
            message:'success'   

        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

module.exports = router