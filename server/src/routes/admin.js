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
} = require('../controllers/admin')



router.post('/login',loginHandler)
router.post('/signup',signupHandler)


router.get('/notification', adminAuth, getNotification)
router.post('/notification', adminAuth, createNotification)
router.patch('/notification', adminAuth, updateNotification)
router.delete('/notification' ,adminAuth, deleteNotification)


router.get('/subject', adminAuth, getSubject)
router.post('/subject', adminAuth, createSubject)
router.patch('/subject', adminAuth, updateSubject)
router.delete('/subject' ,adminAuth, deleteSubject)

router.get('/teacher', adminAuth, getTeacher)
router.post('/teacher', adminAuth, createTeacher)
router.patch('/teacher', adminAuth, updateTeacher)
router.delete('/teacher' ,adminAuth, deleteTeacher)

router.get('/batch', adminAuth, getBatch)
router.post('/batch', adminAuth, createBatch)
router.patch('/batch', adminAuth, updateBatch)
router.delete('/batch' ,adminAuth, deleteBatch)

router.get('/option-data' ,adminAuth, getOptionData)


module.exports = router