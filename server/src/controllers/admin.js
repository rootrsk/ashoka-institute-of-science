const Admin = require('../models/admin')
const Notification = require('../models/notification')

const signupHandler = async(req,res,next)=>{
    try {
        const admin = await new Admin({
            username:req.body.username,
            fullname:req.body.fullname,
            password:req.body.password,
            email: req.body.email,
            contact_no: req.body.contact_no
        })
        console.log(admin)
        await admin.save()
        res.json({
            admin
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
        const {user,error} = await Admin.findByCredentials(username,password)
    
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
            notifications,
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
            notifications,
            message: "Notification created Successfully"
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
    deleteNotification
}