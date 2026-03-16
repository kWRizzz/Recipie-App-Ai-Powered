const mongoose=require('mongoose')

const recipieSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true,"No Name For The Recipie Is provided By The User"]
    },
    description:{
        type:String
    },
    prepTime:{
        type:Number
    },
    cookTime:{
        type:Number
    },
    servings:{
        type:Number
    },
    coverImage:{
        type:String,
        default:""
    },
    ingredients:[
        {
            type:String
        }
    ],
    instruction:[
        {
            type:String
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},
{
    timestamps:true
}
)


module.exports=mongoose.model("recipie",recipieSchema)