require("dotenv").config()
const express = require('express')
const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorHandlerMiddleware")
const cors = require('cors')

//mongodb
connectDB()

//app
const app = express()

//middleware
app.use(express.json())
app.use(cors({
    origin: ['https://frontend-folder-mallikarjuns-projects-c9d2e4f9.vercel.app/'],
    credentials: true
}))


//router
app.use('/api',require('./routes/authRoutes'))
app.use('/api/product',require('./routes/cartRoutes'))
app.use('/api/admin',require('./routes/productRoutes'))

///get the server
app.get('/',(req,res)=>{
    res.send('welcome to the api')
})
//error Handler
app.use(errorHandler)
//port
const port = process.env.PORT

//server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})
