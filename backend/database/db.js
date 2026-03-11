const mongoose = require('mongoose')




const connectDb = async () => {
    try {
        const connect= await mongoose.connect(`${process.env.MONGODBURL}`) 
        console.log(` Server Has Been Connected To The DataBase ${connect.connection.host}`)
    } catch (error) {
        console.log(`Some Error Has Occured While Connecting to the DataBase ${error}`)
        process.exit(1)
    }
}


module.exports=connectDb