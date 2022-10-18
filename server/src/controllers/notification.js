const Notification = require('../models/notification')

const notificationsHandler = async(req,res)=>{
    try {
        const notifications = await Notification.find({})
        res.json({
            status:"success",
            status_code:200,
            message:"All notification fetched",
            data: notifications,
            error:null
        })
    } catch (error) {
        res.json({
            status:"failure",
            status_code:404,
            message:"Something went wrong",
            data: null,
            error:error.message
        })
    }
}

const createNotificationHandler = async (req, res)=>{

    try {
        const notification = new Notification({
            title:req.body.title,
            body: req.body.body
        })
        await notification.save()
        req.json({
            status:"success",
            status_code:200,
            message:"Notification created successfully",
            error:null,
            data:notification
        })

    } catch (error) {
        console.log(error)
        res.json({
            status:"failure",
            status_code:500,
            message:"Somehting went wrong",
            error:"server error",
            data:null
        })
    }
    

}
const updateNotificationHandler = async(req,res)=>{
    //id -> which notification has to change
    //update it on mongoDB
    
    // const notification = await Notification.findByIdAndUpdate({_id:req.body.id},
    //     {
    //         title:req.body.title,
    //         body:req.body.body
    //     }, (err,docs)=>{
    //         if (err){
    //             console.log(err)
    //         }
    //         else{
    //             console.log("Updated User : ", docs);
    //         }
    //     });

}
const deleteNotificationHandler = async(req,res)=>{

}
module.exports = {
    notificationsHandler,
    createNotificationHandler,
    updateNotificationHandler,
    deleteNotificationHandler
}