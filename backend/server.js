const express=require('express')
const cookieparser=require('cookie-parser')
const authRoutes=require('./routes/auth.route')
const connectDb=require('./database/db')

require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 3000
connectDb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())

app.use('/api/user',authRoutes)

app.listen(PORT)