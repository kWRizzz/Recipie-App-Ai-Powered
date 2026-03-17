const mongoose= require('mongoose')

const tokenBlackListingSchema= mongoose.Schema({
    token:{
        type:String,
        required:[true,"No Token Is provided By the User Either The eToken Has Expired  or The Token is Invalid "]
    }
},
{
    timestamps:true
}
)


module.exports=mongoose.model("token",tokenBlackListingSchema)