const express = require('express')
const router = new express.Router()
const adminAuth = require('../middleware/adminAuth')

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

    getUser
} = require('../controllers/admin')

/**
 * Admin  Auth Routes
 */

router.post('/login',loginHandler)
router.post('/signup',signupHandler)

/** Notification Routes for Admin */
router.get('/notification', adminAuth, getNotification)
router.post('/notification', adminAuth, createNotification)
router.patch('/notification', adminAuth, updateNotification)
router.delete('/notification' ,adminAuth, deleteNotification)

/**Subject Routes For Admin */
router.get('/subject', adminAuth, getSubject)
router.post('/subject', adminAuth, createSubject)
router.patch('/subject', adminAuth, updateSubject)
router.delete('/subject' ,adminAuth, deleteSubject)

/**Teacher Routes for Admin */
router.get('/teacher', adminAuth, getTeacher)
router.post('/teacher', adminAuth, createTeacher)
router.patch('/teacher', adminAuth, updateTeacher)
router.delete('/teacher' ,adminAuth, deleteTeacher)


/**Batch Routes For Admin */
router.get('/batch', adminAuth, getBatch)
router.post('/batch', adminAuth, createBatch)
router.patch('/batch', adminAuth, updateBatch)
router.delete('/batch' ,adminAuth, deleteBatch)

/**Other Common Routes for admin */
router.get('/option-data' ,adminAuth, getOptionData)

router.get('/user' ,adminAuth, getUser)

module.exports = router