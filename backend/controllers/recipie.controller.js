const userModel=require('../modeles/user.model')
const tokenModel=require('../modeles/token.model')
const recipieModel= require('../modeles/recipie.model')


const createRecipie= async (req,res) => {
    try {
        const {title,description,prepTime,servings,coverImage,ingredients,instruction,createdBy} = req.body

        if (!title || !description ) {
            return res.status(400).json({
                message:"Enter All Credentials"
            })
        }

        const recipie= await recipieModel.create({
            title,
            description,
            prepTime,
            servings,
            coverImage,
            ingredients,
            instruction,
            createdBy
        })


        res.status(200).json({
            message:"Recipie Created",
            recipie
        })



    } catch (error) {
        console.log(`Somer Error Occured While Creating User Recipie ${error}`);
        res.status(400).json({
            message:`Error While Creating Recipie ${error}`
        })
    }
}


module.exports={
    createRecipie
}