const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')
const userModel=require('../modeles/user.model')

const register= (req,res)=>{

    try {
        
        const {username,email,password} =req.body

        if(!username)return res.status(200).json({
            message:"Enter username"
        })

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt, async (err,hash)=>{
                var User= await userModel.create({
                    username:username,
                    email:email,
                    password:hash
                })
            })
        })

    } catch (error) {
        console.log(error);
    }


}


module.exports={
    register
}