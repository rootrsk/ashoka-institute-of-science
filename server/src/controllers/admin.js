const Admin = require('../models/admin')

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
            return res.json({
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

module.exports = {

    signupHandler,
    loginHandler
}