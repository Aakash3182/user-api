const mongoose = require('mongoose')

const connectDB = async () => {
   
   if (process.env.MODE==="production"){
    return await mongoose.connect(process.env.MONGO_CLOUD)
   } else{ return await mongoose.connect(process.env.MONGO_DEV)}
}

module.exports = connectDB