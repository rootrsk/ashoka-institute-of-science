const Admin = require("../models/admin");
const bcrypt = require('bcryptjs');

const signUpHandler = async(req,res,next)=>{
    //backend for signup
    try{
       
        
        const admin = new Admin({
            username:req.body.username,
            password:req.body.password,
            email: req.body.email,
            contact_no: req.body.contactNo,
            city: req.body.city

        })
        await admin.save();
        //create user
        res.json({
            message:"ok",
            admin
        })

    }
    catch(error){
        console.log(error);
        res.json({
            message:error.message
        })
    }

}

const loginHandler = async(req,res,next)=>{
    console.log("login");
    try{
       const email = req.body.email
       const password = req.body.password
        console.log(email+" "+password)
       //verify the user then generate token and login
        const admin = await Admin.findOne({email});
        
        if(!admin){
            return res.json({

                status:"failed",
                message:"Create account first",
                data:null,
                error:"No such user found",
                status_code:404
            })
        }

        const samePass =await bcrypt.compare(password,admin.password);
        console.log(samePass)
        if(!samePass){
            return res.json({
                status:"failed",
                message:"Check your email and password",
                data:null,
                error:"Wrong credentials",
                status_code:401
            })
        }

        //login the user by sending token and username
        res.json({
            status_code:200,
            status:"success",
            message:"User logged-In",
            data:{
                fullname:admin.fullname,
                username: admin.username,
                email:admin.email,
                token: admin.genAuthToken()
            },
            error:null
            
        })

    }
    catch(error){
        console.log(error);
        res.json({
            message:error.message
        })
    }
}

module.exports = {
    signUpHandler,
    loginHandler
}

// //res send
// res.json({
//     status
//     status_code
//     message
//     error
//     data
// })
