const mongoose= require('mongoose')

const tokenBlackListingSchema= mongoose.Schema({
    token:{
        type:String
    }
},
{
    timestamps:true
}

)


module.exports=mongoose.model("token",tokenBlackListingSchema)