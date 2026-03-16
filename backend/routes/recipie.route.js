const express= require('express')
const recipieController= require('../controllers/recipie.controller')

const router= express.Router()

router.post('/create',recipieController.createRecipie)

module.exports=router



