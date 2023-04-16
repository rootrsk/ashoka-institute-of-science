const express = require('express')
const router = new express.Router()
const adminAuth = require('../middleware/adminAuth')

const { 
    loginHandler, 
    signupHandler,
    getNotification,
    updateNotification,
    createNotification,
    deleteNotification
} = require('../controllers/admin')



router.post('/login',loginHandler)
router.post('/signup',signupHandler)


router.get('/notification', adminAuth, getNotification)
router.post('/notification', adminAuth, createNotification)
router.patch('/notification', adminAuth, updateNotification)
router.delete('/notification' ,adminAuth, deleteNotification)

module.exports = router