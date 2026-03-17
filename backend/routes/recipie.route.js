const express= require('express')
const recipieController= require('../controllers/recipie.controller')

const router= express.Router()

/*
*@Route=/api/recipie/create
*
*/

router.post('/create',recipieController.createRecipie)

/*
**@Route=/api/recipie/getrecipie
**
*/

router.get('/getrecipie',recipieController.getRecipie)



/*
**@Route=/api/recipe/getrecipie/:id
**
*/

router.get('/getrecipie/:id', recipieController.getRecipieById)


module.exports=router