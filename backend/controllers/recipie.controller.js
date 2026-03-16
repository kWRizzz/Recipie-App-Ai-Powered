const userModel=require('../modeles/user.model')
const tokenModel=require('../modeles/token.model')
const recipieModel= require('../modeles/recipie.model')


const createRecipie= async (req,res) => {
    try {
        const {title} = req.body
    } catch (error) {
        console.log(`Somer Error Occured While Creating User Recipie ${error}`);
        res.status(400).json({
            message:`Error While Creating Recipie ${error}`
        })
    }
}