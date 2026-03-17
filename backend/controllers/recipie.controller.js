const userModel = require('../modeles/user.model')
const tokenModel = require('../modeles/token.model')
const recipieModel = require('../modeles/recipie.model')


const createRecipie = async (req, res) => {
    try {
        const { title, description, prepTime, servings, coverImage, ingredients, instruction, createdBy } = req.body

        if (!title || !description) {
            return res.status(400).json({
                message: "Enter All Credentials"
            })
        }

        const recipie = await recipieModel.create({
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
            message: "Recipie Created",
            recipie
        })



    } catch (error) {
        console.log(`Somer Error Occured While Creating User Recipie ${error}`);
        res.status(400).json({
            message: `Error While Creating Recipie ${error}`
        })
    }
}



const getRecipie = async (req, res) => {
    try {
        const isFoundTheRecipie = await recipieModel.findOne();
        if (!isFoundTheRecipie) return res.status(400).json({
            message: "No Recipie Found"
        })

        res.status(200).json({
            message: "REcipie Sent",
            isFoundTheRecipie
        })
    } catch (error) {
        console.log(`Some Error Has Occured While Getting ${error}`);
        res.status(400).json({
            message: `Error While Gettin the Recipie ${error}`
        })

    }
}

const getRecipieById = async (req, res) => {
    try {
        
        if(!req.param.id) return res.status(400).json({
            message:"No Id Found WHile getting The Id "
        })
        
        const recipie = await recipieModel.findById(req.param.id)

        if(!recipie) return res.status(400).json({
            message:"Nothing Found while geting the recipie by id"
        })

        res.status(200).json({
            message: "server got recipie by id",
            recipies: {
                title:recipie.title,
                description:recipie.description,
                prepTime:recipie.prepTime,
                servings:recipie.servings,
                coverImage:recipie.coverImage,
                ingredients:recipie.ingredients,
                instruction:recipie.instruction,
                createdBy:recipie.createdBy
            }
        })
    } catch (error) {
        console.log(`Server error At Getting The Recipie By ID ${error}`);
        res.status(400).json({
            message: `Server Error While Getting the Recipie By Id  ${error}`
        })
    }
}


module.exports = {
    createRecipie,
    getRecipie,
    getRecipieById
}