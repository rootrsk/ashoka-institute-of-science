const express = require('express')
const User = require('../models/test')
const router = new express.Router()
const { signUpHandler, loginHandler } = require('../controllers/admin')
const {createNotificationHandler,
        updateNotificationHandler,
        deleteNotificationHandler,
        notificationsHandler
} = require('../controllers/notification')


router.post('/signup',signUpHandler)
router.post('/login',loginHandler)
router.post('/notification',createNotificationHandler)
router.patch('/notification',updateNotificationHandler)
router.delete('/notification',deleteNotificationHandler)
router.get('/notifications',notificationsHandler)

module.exports = router