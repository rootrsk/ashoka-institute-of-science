const mongoose  = require("mongoose")
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Connected with Database')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { connect }