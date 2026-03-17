const jwt = require('jsonwebtoken')
const tokenModel=require('../modeles/token.model')

const authMiddleWare= async (req,res,next) => {
    try {
        const token= req.cookies.token

        if(!token) return res.status(401).json({
            message:`Error No response As Such Token Found From the User Side `
        })

        const isTokenExist= await tokenModel.findOne({token})

        if(isTokenExist) return res.status(401).json({
            message:"Invalid Token"
        })

        const decoded = jwt.verify(token,process.env.SECRET)

        req.user= decoded
        next()
        
    } catch (error) {
        console.log(`Some Error Occured in the middleware  ${error}`);
        process.exit(1)
    }
}

module.exports=authMiddleWare