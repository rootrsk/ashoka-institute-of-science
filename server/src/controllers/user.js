const User = require('../models/user')
const Batch = require('../models/batch')
const Notification = require('../models/notification')
const Subject = require('../models/subject')
const Teacher = require('../models/teacher')

const signupHandler = async(req,res,next)=>{
    try {
        const user = await new User({
            username:req.body.username,
            fullname:req.body.fullname,
            password:req.body.password,
            email: req.body.email,
            contact_no: req.body.contact_no
        })
        console.log(user)
        await user.save()
        res.json({
            user,
            message:"Account Created Successfully"
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
}

const loginHandler = async(req,res,next)=>{
    console.log(req.body)
    try {
        const {username,password} = req.body
        if(!username || !password){
            return res.status(400).json({
                error:'Email or Username and Password is required.'
            })
        }
        const {user,error} = await User.findByCredentials(username,password)
    
        if(error){
            return res.json({
                error,
            })
        }
        const token = await user.genAuthToken()
        console.log(user,error)
        res.json({
            message:"Loggedin Successfully",
            user,
            error,
            token
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
}

const getNotification = async(req,res,next)=>{
    try {
        const notifications = await Notification.find({})
        res.status(200).json({
            notifications,
            message: "Notification fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const createNotification = async(req,res,next)=>{
    console.log(req.body)
    try {
        const notification = new Notification({
            title: req.body.title,
            created_by: req.user._id
        })
        await notification.save()
        res.status(201).json({
            message: "Notification created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const updateNotification = async(req,res,next)=>{
    
    try {
        const notification = await Notification.findById(req.body._id)
        if(!notification) return res.status(404).json({
            error:"No such notifiaction found",
        })
        notification.title = req.body.title
        notification.updated_by = req.user._id
        await notification.save()
        res.status(200).json({
            message: "Notification updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const deleteNotification = async(req,res,next)=>{
    try {
        const notification = await Notification.findById(req.body._id)
        if(!notification) return res.status(404).json({
            error:"No such notifiaction found",
        })
        await Notification.findByIdAndRemove(req.body._id)
        res.status(200).json({
            message: "Notification created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}


const getSubject = async(req,res,next)=>{
    try {
        const subjects = await Subject.find({})
        res.status(200).json({
            subjects,
            message: "Subjects fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const createSubject = async(req,res,next)=>{
    console.log(req.body)
    try {
        const subject = new Subject({
            ...req.body,
            created_by: req.user._id
        })
        await subject.save()
        res.status(201).json({
            message: "Subject created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const updateSubject = async(req,res,next)=>{
    
    try {
        const subject = await Subject.findById(req.body._id)
        if(!subject) return res.status(404).json({
            error:"No such notifiaction found",
        })
        subject.updated_by = req.user._id
        await subject.save()
        res.status(200).json({
            message: "Notification updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const deleteSubject = async(req,res,next)=>{
    try {
        const subject = await Subject.findById(req.body._id)
        if(!subject) return res.status(404).json({
            error:"No such notifiaction found",
        })
        await Subject.findByIdAndRemove(req.body._id)
        res.status(200).json({
            message: "Notification created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}

const getTeacher = async(req,res,next)=>{
    try {
        const teachers = await Teacher.find({})
        res.status(200).json({
            teachers,
            message: "Teachers fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const createTeacher = async(req,res,next)=>{
    console.log(req.body)
    try {
        const teacher = new Teacher(req.body)
        await teacher.save()
        res.status(201).json({
            message: "Teacher created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const updateTeacher = async(req,res,next)=>{
    
    try {
        const teacher = await Teacher.findById(req.body._id)
        if(!teacher) return res.status(404).json({
            error:"No such Teacher found",
        })
        teacher.updated_by = req.user._id
        await teacher.save()
        res.status(200).json({
            message: "Teacher updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const deleteTeacher = async(req,res,next)=>{
    try {
        const teacher = await Teacher.findById(req.body._id)
        if(!teacher) return res.status(404).json({
            error:"No such notifiaction found",
        })
        await Teacher.findByIdAndRemove(req.body._id)
        res.status(200).json({
            message: "Teacher Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}

const getBatch = async(req,res,next)=>{
    try {
        const batches = await Batch.find({}).populate("subjects teachers")
        res.status(200).json({
            batches,
            message: "Teachers fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const createBatch = async(req,res,next)=>{
    console.log(req.body)
    try {
        const batch = new Batch(req.body)
        await batch.save()
        res.status(201).json({
            message: "Batch created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const updateBatch = async(req,res,next)=>{
    
    try {
        const batch = await Batch.findById(req.body._id)
        if(!batch) return res.status(404).json({
            error:"No such batch found",
        })
        batch.updated_by = req.user._id
        await batch.save()
        res.status(200).json({
            message: "Batch updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
const deleteBatch = async(req,res,next)=>{
    try {
        const batch = await Batch.findById(req.body._id)
        if(!batch) return res.status(404).json({
            error:"No such notifiaction found",
        })
        await Batch.findByIdAndRemove(req.body._id)
        res.status(200).json({
            message: "Batch Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}

const getOptionData = async(req,res,next)=>{
    try {
        const options = Object.keys(req.query)
        const allowedOptions = {
            teachers:{
                modal: Teacher,
                fields: "_id full_name"
            },
            subjects:{
                modal: Subject,
                fields:  "_id title"
            }
        }
        const optionsData = {}
        console.log(options)
        await Promise.all(options.map(async(option)=>{
            if(allowedOptions.hasOwnProperty(option)){
                console.log(allowedOptions[option].fields)
                let data = await allowedOptions[option].modal.find({})
                .select(allowedOptions[option].fields)
                Object.assign(optionsData,{[option]:data})
            }
        }))
        res.status(200).json({
            optionsData,
            message: "Teachers fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}
module.exports = {
    signupHandler,
    loginHandler,

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
}