const mongoose = require('mongoose')



const connectDb = () => {
    // try {
    //     mongoose.connect(`mongodb://127.0.0.1:27017/Recipie`).then(() => {
    //         console.log(`ConnectedDb`);
    //     })
    // } catch (error) {
    //     console.log(error);

    // }

    mongoose.connect(`mongodb://127.0.0.1:27017/Recipie`).then(()=>{
        console.log('DataBase Connected Succesfully');
    }).catch((error)=>{
        console.log(error);
    })
}


module.exports={
    connectDb
}