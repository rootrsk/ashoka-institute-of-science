const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const useragent = require('express-useragent')
const cookieParser = require('cookie-parser')
const db = require("./src/config/db")
const cors = require("cors")

require("dotenv").config();

const PORT = process.env.PORT || 3001
const userRouter = require('./src/routes/user')
const adminRouter = require('./src/routes/admin')
const app = express()
app.use(cors())
app.use(express.json())
app.use(useragent.express())
app.use(cookieParser())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)   

db.connect()
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})

module.export = app