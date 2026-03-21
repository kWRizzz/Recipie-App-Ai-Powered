const express= require('express')
const authController=require('../controllers/auth.controller')
const router=express.Router()


/*
**@Route=api/user/register
**
*/

router.post('/register',authController.registerUser)


/*
**@Route=api/user/login
**
*/

router.post('/login',authController.loginUser)


/*
**@Route=api/user/logout
**
*/

router.get('/logout',authController.logoutUser)

module.exports=router