const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieparser = require('cookie-parser')
const userModel = require('../modeles/user.model')

const registerUser = async (req, res) => {

    try {

        const { username, email, password } = req.body

        const isExistUser = await userModel.findOne({
            email
        })

        if (isExistUser) return res.status(409).json({
            message: "User Already Exist"
        })
        if (!username) return res.status(400).json({
            message: "Enter username"
        })
        if (!email) return res.status(400).json({
            message: "Enter Email"
        })
        if (!password) return res.status(400).json({
            message: "Enter Password"
        })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const User = await userModel.create({
            username: username,
            email: email,
            password: hash
        })

        const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.status(200).json({
            message: "User Registered",
            user: {
                userid: User._id,
                username: User.username,
                email: User.email
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        })
    }

}

const loginUser = async (req, res) => {
    try {

        let { email, password } = req.body;

        const user= await userModel.findOne({
            email
        })

        if(!user) return res.status(409).json({
            message:"User not registered"
        })

        const checkPassword= await bcrypt.compare(password,user.password)

        if(!checkPassword) return res.status(409).json({
            message:"User Password is Incorrect"
        })

        const token = jwt.sign({
            id:user._id,
        },process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(200).json({
            message:"User Logged In",
            user:{
                userid:user._id,
                username:user.username,
                email:user.email
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Server Error"
        })
    }
}

const logoutUser= async (req,res) =>{
    try {
        res.clearCookie("token")
        res.status(200).json({
            message:"User Logged Out"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Server Error"
        })
    }
}
module.exports = {
    registerUser,
    loginUser,
    logoutUser
}