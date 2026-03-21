const express= require('express')
const recipieController= require('../controllers/recipie.controller')

const router= express.Router()

/*
*@Route=/api/recipie/create
*@Method=POST
*/

router.post('/create',recipieController.createRecipie)

/*
**@Route=/api/recipie/getrecipie
**@Method=GET
*/

router.get('/getrecipie',recipieController.getRecipie)

/*
**@Route=/api/recipe/getrecipie/:id
**@Method=GET
*/

router.get('/getrecipie/:id', recipieController.getRecipieById)

/*
**@Route=/api/recipie/getrecipie/:id
**@Method=PUT
*/

router.put('/getrecipie/:id',recipieController.updateRecipie)



module.exports=router